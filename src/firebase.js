import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBhEsWAaEirJwcuEcTr-k9_yTLN3JMjV-4',
  authDomain: 'on-time-eld.firebaseapp.com',
  projectId: 'on-time-eld',
  storageBucket: 'on-time-eld.appspot.com',
  messagingSenderId: '378963254491',
  appId: '1:378963254491:web:34ed0cfd62ac5f949c00fe',
  measurementId: 'G-G1DE4LNMME',
}

export const app = initializeApp(firebaseConfig)
// export const analytics = getAnalytics(app)
export const firestore = getFirestore(app)
