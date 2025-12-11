//what is fetch API?    
//The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

//Example of using fetch API to get data from a public API


// const p = fetch('https://jsonplaceholder.typicode.com/users');

// p.then((response) => {
//   return response.json();
// })
// .then(data => {
//   console.log(data);
// });

// function getUser(id) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(res => res.json());
// }

// getUser(7).then(user => console.log(user));


// When you make a fetch request, it returns a Promise that resolves to the Response object representing the response to your request. You can then use methods like .json(), .text(), or .blob() on the Response object to extract the data in the desired format.

// Example of posting data using fetch API

// const userData = {
//   name: 'John Doe',
//   email: 'abc.user@mail.com'
// };
// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   headers: {    
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(userData)
// })
// .then(response => response.json())
// .then(data => {
//   console.log('User created:', data);
//   console.log(data.id)
// });

// In this example, we are sending a POST request to create a new user. We specify the method, headers, and body of the request. The body is stringified JSON data representing the new user. The server responds with the created user data, which we log to the console.

// Fetch API also supports other HTTP methods like PUT, DELETE, etc., and allows you to customize requests with various options such as headers, credentials, and caching.
// Example of handling errors with fetch API

// fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//     });

// In this example, we check if the response is ok (status in the range 200-299). If not, we throw an error which is then caught in the catch block, allowing us to handle errors gracefully.

//Overall, the Fetch API is a powerful and flexible way to make network requests in JavaScript, providing a modern alternative to older methods like XMLHttpRequest.


const p = fetch('https://catfact.ninja/fact');

console.log("1. p (the fetch call):", p);

p.then(response => {
  console.log("2. response inside first .then:", response);
  const jsonPromise = response.json();
  console.log("3. response.json() gives:", jsonPromise);
  return jsonPromise;
})
.then(data => {
  console.log("4. data in second .then:", data);
});

