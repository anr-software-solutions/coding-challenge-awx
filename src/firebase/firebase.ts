import app from 'firebase/app'

const config = {
  apiKey: 'AIzaSyDPrO0dmX-d0BCqCuF-77z28jbhuj4qJwc',
  authDomain: 'awx-challenge.firebaseapp.com',
  databaseURL: 'https://awx-challenge.firebaseio.com',
  projectId: 'awx-challenge',
  storageBucket: 'awx-challenge.appspot.com',
  messagingSenderId: '502929201380',
  appId: '1:502929201380:web:27544aabb527078d8e34f1',
  measurementId: 'G-3VS5LPGMWM',
}

/**
 *  Initialising firebase app
 *  Only used for deployment purposes and to integrate with Github CI/CD
 */
const Firebase = () => {
  app.initializeApp(config)
}

export default Firebase
