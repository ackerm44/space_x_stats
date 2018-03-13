import React, { Component } from 'react'


function rocketDataFetch() {
  return fetch('/api/rockets', {
    accept: 'application/json',
  }).then(res => res.json())
    .then(rockets => console.log(rockets[0]))
}

const Rocket = { rocketDataFetch }
export default Rocket

// function search(query, cb) {
//   return fetch(`api/food?q=${query}`, {
//     accept: 'application/json',
//   }).then(checkStatus)
//     .then(parseJSON)
//     .then(cb);
// }
//
// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const error = new Error(`HTTP Error ${response.statusText}`);
//   error.status = response.statusText;
//   error.response = response;
//   console.log(error); // eslint-disable-line no-console
//   throw error;
// }
//
// function parseJSON(response) {
//   return response.json();
// }
//
// const Client = { search };
// export default Client;
