// Post request in JavaScript 
 // Introduction to POST request using Fetch API
 // The Fetch API provides a way to make network requests similar to XMLHttpRequest (XHR). However, it is more powerful and flexible. One of the common use cases of the Fetch API is to send data to a server using a POST request.

 // Example of making a POST request using Fetch API

 const options = {
   method: 'POST',
   headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
 };



fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((response) => response.json())
  .then((json) => console.log(json));




