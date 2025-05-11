// function getUserInfo() {
//   return new Promise(function (res, rej) {
//     setTimeout(() => {
//       res({ id: 1, name: "John Doe" });
//     }, 2000);
//   });
// }

// function getUserPics(id) {
//   return new Promise(function (res, rej) {
//     res([{ url: "pic1" }, { url: "pic2" }]);
//   });
// }

// getUserInfo()
//   .then(function (data) {
//     console.log(data);
//     return getUserPics(data.id);
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// Today we will learn about Fetch API & GitHub API 
// 1. Fetch API
// 2. GitHub API