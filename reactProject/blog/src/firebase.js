import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCptRgD6Nb92fcxIwO9VcAfMVETdfv1XJQ',
  authDomain: 'blog-16c96.firebaseapp.com',
  projectId: 'blog-16c96',
  storageBucket: 'blog-16c96.appspot.com',
  messagingSenderId: '784319365360',
  appId: '1:784319365360:web:44d09bc03668b4e9d54235',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
