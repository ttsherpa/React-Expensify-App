import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyA9J_-eYxQnPIOCm9nLIRuSmHCO1R58F6s",
    authDomain: "expensify-reaction.firebaseapp.com",
    databaseURL: "https://expensify-reaction.firebaseio.com",
    projectId: "expensify-reaction",
    storageBucket: "expensify-reaction.appspot.com",
    messagingSenderId: "501608511259"
  };
  
  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase, database as default};

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

