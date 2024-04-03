const admin = require('firebase-admin');

const projectId = 'shopping-assistant-2dee7';
process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';

admin.initializeApp({projectId});

const db = admin.firestore();

db.collection('lists').add({
  assignee: "",
  creator: "ZQ4VVbpPLETRWABpThBqQe8FEl43",
  date: "January 20, 2022 at 5:05:09 PM UTC+1",
  id: "0F6cali70JWtXoYCAHh1",
  name: '20.01.2022',
  categories: [
    {
      name: "Undefiend",
      items: [
        {
          description: "",
          name: "Test product",
          quantity: 1,
          unit: "szt"
        }
      ]
    }
  ]
})
.then(() => console.log('DB Seed Successfully'))
.catch((e) => {
  console.log('DB Seed Error');
  console.error(e)
});
