import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCYSAoYuYh4dOq1cjyxDUO9lMFHNBG8kJo',
  authDomain: 'music-686d3.firebaseapp.com',
  projectId: 'music-686d3',
  storageBucket: 'music-686d3.appspot.com',
  appId: '1:802038897093:web:2d0782aa3a6240959253ac'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')

export { auth, db, usersCollection, songsCollection, storage }
