import * as firebase from 'firebase';

  var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase, database as default}

  // database.ref().set({
  //   name: 'Tenzing Sherpa',
  //   age: 21,
  //   stressLevel: 6,
  //   job: {
  //       title: 'Software Developer',
  //       company: 'Google'
  //   },
  //   location: {
  //       city: 'Goleta',
  //       country: 'United States'
  //   }
  // }).then(() => {
  //     console.log('Data is saved!');
  // }).catch(() => {
  //   console.log('This failed', e);
  // });

  // database.ref().update({
  //     stressLevel: 9,
  //     'job/company': 'Amazon',
  //     'location/city': 'Seattle'
  // });

