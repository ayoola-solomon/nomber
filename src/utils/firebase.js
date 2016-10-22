import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCWizlG6JkLFRpZBdyrovUKTxC2AFZB3as',
  authDomain: 'nomber-e715f.firebaseapp.com',
  databaseURL: 'https://nomber-e715f.firebaseio.com',
  storageBucket: 'nomber-e715f.appspot.com',
  messagingSenderId: '476405247759',
};

firebase.initializeApp(config);

export ref = (node) => {
  const ref = firebase.database().ref();
  return ref.child(node);
}

export auth = () => {
  return firebase.auth();
}
