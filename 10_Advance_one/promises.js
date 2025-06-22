// const promiseOne = new Promise(function (resolve, reject) {
//   // do an async task
//   setTimeout(() => {
//     console.log("Async task is complete!");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(() => console.log("promise consumed"));

// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Async tASK 2 ');
//     reject();
//   }, 1000)
// })
// // promiseTwo.then(() => {
// //   console.log('prosmise executed');
// // })
// promiseTwo.catch(() => {
//   console.log('prosmise failed');
// })

// const task = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       'name': 'rouge',
//       'company': 'unknwn',
//       'status': 'online'
//     })
//   }, 1000)
// })

// task.then((asset) => {
//   console.log(`${asset['name']} of ${asset['company']} is ${asset['status']}!`);
// })

// const operation = new Promise((resolve, reject) => {
//   let error = false;
//   if (!error) resolve("stackig in process...");
//   else reject("Failure in detecting some cores!");
// });

// operation
//   .then((asign) => {
//     return `STATUS: ${asign}`;
//   })
//   .then((deliver) => {  // Chaining
//     console.log(deliver);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('The task is either completed or rejected!');
//   })

// const duty = () =>
//   new Promise((resolve, reject) => {
//     let vheicle = {
//       name: "CAT-7AWD-03S2",
//       company: "caterpillar"
//     };

//     let error = true;
//     if (!error) {
//       vheicle["status"] = "online";
//       resolve(vheicle);
//     } else {
//       vheicle["status"] = "offline";
//       reject(vheicle);
//     }
//   });

// async function postDuty() {
//   try {
//     const recieve = await duty();
//     console.log(recieve);
//   } catch(error) {
//     console.log(error);
//   }
// }

// postDuty()

// async function getUserData() {
//   try {
//     const url = "https://randomuser.me/api/";
//     const response = await fetch(url);
//     const data = await response.json()
//     console.log(data.results[0].location.country);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getUserData()

const url = "https://randomuser.me/api/";
fetch(url)
  .then((resolve) => {
    return resolve.json();
  })
  .then((response) => {
    console.log(response.results[0].location.country);
  })
  .catch((reject) => {
    console.log("E:", reject);
  });
