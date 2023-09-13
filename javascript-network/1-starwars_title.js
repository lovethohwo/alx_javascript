#!/usr/bin/node
//create a const of request and url
const req = require("request");

const id = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

//using "get" to access the url from the source
req(url, (error, response, body) => {
  if (error) {
    return console.error(error);
  }
  const object = JSON.parse(body);
  console.log(object.title);
});