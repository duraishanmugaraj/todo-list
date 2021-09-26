import React, { useState, useEffect } from 'react';
import Input from './Components/Input';
import NavBar from './Components/NavBar';
import Card from "./Components/Card"
import { db } from './firebase_config';
import { collection, addDoc, getDocs, getDoc, deleteDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import './App.css';
import Footer from './Components/Footer';

const auth = getAuth();
function App() {

  const [doLists, setDoLists] = useState([])
  const [isUserSignedIn, setUserSignedIN] = useState(false)
  const [user, setUser] = useState("todos")
  const [userData, setUserData] = useState()

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "users", user, "todos"));
    const initialData = []
    querySnapshot.forEach((doc) => {
      initialData.push({
        id: doc.id,
        todo: doc.data().todo,
        isDash: doc.data().isDash
      })
    });
    setDoLists(initialData)
  }
  const checkNewUser = async () => {
    const docRef = doc(db, "users", user);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      setDoc(doc(db, "users", user), {
        displayName: userData.displayName,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        photoURL: userData.photoURL,
        uid: userData.uid,
      }).catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    if (userData !== undefined) {
      checkNewUser()
    }
    fetchData()
  }, [userData])

  const inputHandler = (value) => {
    addDoc(collection(db, "users", user, "todos"), {
      todo: value,
      isDash: false,
      timestamp: serverTimestamp()
    })

    fetchData()
  }

  const deleteHandler = async (id) => {
    await deleteDoc(doc(db, "users", user, "todos", id));
    fetchData()
  }


  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserSignedIN(true)
        setUser(user.email)
        setUserData(user.providerData[0])
      } else {
        setUserSignedIN(false)
      }
    })
  }

  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      console.log("signout Success")
      setUserSignedIN(false)
      setUser("todos")
      setUserData()
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className="main" >
      <NavBar />
      <div className="centers-container">
        <div className="text-center">
          {
            !isUserSignedIn ? (<div onClick={handleGoogle} className="btn btn-lg btn-google btn-block text-uppercase btn-outline">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Signin" /> Signin Using Google
            </div>) : (<div onClick={handleSignOut} className="btn btn-lg btn-google btn-block text-uppercase btn-outline">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="SignOut" /> Signout
            </div>)
          }
        </div>
        <div className="d-flex justify-content-center">
          <div className="glass">
            <h1 className="text-center welcome">Welcome!{userData && userData.displayName}</h1>
            <div className="content">
              <Input add={inputHandler} />
              {doLists.map(list => <Card user={user} data={list.todo} isDash={list.isDash} key={list.id} id={list.id} delete={deleteHandler} />)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
