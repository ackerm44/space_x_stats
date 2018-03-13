import React, { Component } from 'react'

const Rocket = props => {
  fetch()
}

export default Rocket


function search(query) {
  return fetch(`/api/food?q=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON);
}
