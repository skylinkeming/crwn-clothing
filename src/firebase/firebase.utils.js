import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyAv-yxrHUP-denxCd9B8Y_x0MR9oqJxgzE',
  authDomain: 'crwn-db-steve.firebaseapp.com',
  projectId: 'crwn-db-steve',
  storageBucket: 'crwn-db-steve.appspot.com',
  messagingSenderId: '618492249052',
  appId: '1:618492249052:web:2e89b4f4cfdde7fac28519',
  measurementId: 'G-HEH5KJ7FRL',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const collectionRef = firestore.collection('users')

  const snapShot = await userRef.get()
  const collectionSnapshot = await collectionRef.get()
  console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) })
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
    // console.log(newDocRef)
  });

  await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  console.log(collections);
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  console.log(transformedCollection);
  return transformedCollection.reduce((accumulator, collection)=>{
     accumulator[collection.title.toLowerCase()] = collection;
     return accumulator;
  },{})
  
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
