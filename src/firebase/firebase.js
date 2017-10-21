import * as firebase from 'firebase';

 // Initialize Firebase
 const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };

//   //child_remove

//   database.ref('expenses').on('child_removed',(snapshot)=>{
//       console.log(snapshot.key,snapshot.val());
//   });

//   //child_changed

//   database.ref('expenses').on('child_changed',(snapshot)=>{
//       console.log(snapshot.val());
//   });

//   //child_added

//   database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.val());
// });


//   database.ref('expenses').once('value').then((snapshot)=>{
//     // console.log(snapshot.val());
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses =[];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

//   database.ref('expenses').push({
//       description: 'Rent',
//       note: '',
//       amount: 13000,
//       createdAt: 98765432101
//   });



//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log( `${val.name} is an ${val.job.title} at ${val.job.company} `);
//   }).catch((e)=>{
//       console.log(e);
//   });

//   setTimeout(()=>{
//     database.ref('name').update('Puranam Pradeep Picasso')
//   },3000);

//   setTimeout(()=>{
//     database.ref().off('value', onChangeData);
//   },6000);

//   setTimeout(()=>{
//     database.ref('name').update('Puranam Akshitha Picasso')
//   },9000);

  

//   database.ref().once('value').then((snapshot)=>{
//     const  val = snapshot.val();
//     console.log(val);
//   }).catch((e)=>{
//       console.log(e)
//   });

//   database.ref().set({
//       name: 'PPP',
//       age: 25,
//       stressLevel: 4,
//       job: {
//           title: 'Entrepreneur',
//           company: 'ImbueDesk'
//       },
//       location: {
//           city: 'Hyderabad',
//           country: 'India'
//       }
//   }).then(()=>{
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed. ', e);
//   });

//   database.ref('age').set(26);
//   database.ref('location/city').set('Malysia');

//   database.ref('attributes').set({
//       height: '176cms',
//       weight: '89kgs'
//   }).then(()=>{
//       console.log('new object is added to database, please check')
//   }).catch((e)=>{
//       console.log('error: ', e);
//   });

  //Update
//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'NestorAnalytics',
//       'location/city': 'Bangalore'
//   });