#!/usr/bin/node
//create a const of request and url
const req = require("request");

const url = process.argv[2];

//using "get" to access the url from the source
req
  .get(url, { encoding: "utf-8" })

  .on("response", (response) => {
    console.log("code:", response.statusCode);
  });