import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const DataBase = firebase.database()

export { firebase, DataBase as default }

// DataBase.ref().set({
//     name: 'dixAborah',
//     age: 24,
//     job: {
//         title: 'Manager',
//         company: 'IBS'
//     },
//     stressLevel: 4,
//     location: {
//         country: 'Ghana',
//         city: 'McCarthy Hill'
//     }
// }).then(() => {
//     console.log('Data saved')
// })
// .catch((error) => {
//     console.log('Something went wrong')
// })

// DataBase.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle',
//     'location/country': 'USA'
// })



// DataBase.ref('location').once('value').then((snapshot)=> {
//     const val = snapshot.val()
//     console.log(val)
// }).catch((e) => {
//     console.log('Something went wrong')
// })

// DataBase.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (e) => {
//     console.log('something went wrong')
// })

// setTimeout(() => {
//     DataBase.ref('job').update({
//         title: 'Owner'
//     })
// }, 3000);


// DataBase.ref('Expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: '109500',
//     createdAt: '12348977'
// })

// DataBase.ref('Expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: '950',
//     createdAt: '12348977'
// })

// DataBase.ref('Expenses').push({
//     description: 'Food',
//     note: '',
//     amount: '10950',
//     createdAt: '12348977'
// })


// DataBase.ref('Expenses').once('value').then((snapshot) => {
//     let Expenses = [];
//     snapshot.forEach(childSnapshot => {
//         Expenses.push({
//             //Note - Firebase key start with "-" but has been removed
//             id: childSnapshot.key.slice(1),
//             ...childSnapshot.val()
//         })
//     })
//     console.log(Expenses)
// }).catch((e) => {
//     console.log('Something went wrong')
// })



// DataBase.ref('Expenses').on('value', ((snapshot) => {
//     let Expenses = [];
//     snapshot.forEach(childSnapshot => {
//         Expenses.push({
//             //Note - Firebase key start with "-" but has been removed
//             id: childSnapshot.key.slice(1),
//             ...childSnapshot.val()
//         })
//     })
//     console.log(Expenses)
// }), (e) => {
//     console.log('Something went wrong')
// })


// DataBase.ref('Expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key.slice(1), snapshot.val())
// })

// DataBase.ref('Expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })