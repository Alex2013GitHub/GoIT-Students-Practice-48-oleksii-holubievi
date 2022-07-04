// check password

// const userName = prompt('Login');

// const adminPassword = 'pass';

// switch (userName) {
//   case null:
//     console.log('cancel');
//     break;
//   case 'admin':
//     const pass = prompt('password');
//     console.log(pass === adminPassword ? 'welcome' : 'wrong password');
//     break;
//   default:
//     console.log('I don`t know you, buddy');
//     break;
// }

// if (userName === null) {
//   console.log('cancel');
// } else if (userName.toLowerCase() === 'admin') {
//   const pass = prompt('password');
//   console.log(pass === adminPassword
//     ? 'welcome'
//     : 'wrong password');
// //   if (pass === adminPassword) {
// //     console.log('welcome');
// //   } else {
// //     console.log('wrong password');
// //   }
// } else {
//   console.log('I don`t know you, buddy');
// }

// console.log(userName);


const userName = prompt('Login');

const adminPassword = 'pass';

switch (userName) {
  case null:
    console.log('cansel');
    break;
    case 'admin':
    const pass=prompt('password');
    console.log(pass === adminPassword?'welcome' : 'wrong password');
    break;

  default:
    console.log('I don`t know you, buddy')
    break;
}

// if(userName === null){
//   console.log('cansel');
// }else if(userName.toLowerCase() === 'admin'){
//   const pass = prompt('password');
//   console.log(pass === adminPassword
//     ? 'welcome'
//     :'wrong password');
//   // if(pass===adminPassword){
//   //   console.log('welcome');
//   // }else{
//   //   console.log('wrong password')
//   // }
//   // check password

// }else{
//   console.log('I don`t know you, buddy');
// }

// console.log(userName);