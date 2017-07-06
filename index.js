const app = "I don't do much.";

// let xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits')
// xhr.responseType = 'json'
//
// xhr.onload = function() {
//   console.log(xhr.response);
// }
//
// xhr.onerror = function() {
//   console.log('Boooo');
// }
//
// xhr.send()

const token = 'f904790dd57db7df23a1bfea356b56c04925444f'
fetch('https://api.github.com/repos/jquery/jquery/commits', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
