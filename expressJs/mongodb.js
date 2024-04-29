const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
// const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
const database = "e-comm";

async function dbConnect() {
  let result = await client.connect();
  // let db=  result.db.apply('e-comm');
  let db = result.db(database);
  return db.collection("product");
  // let response = await collection.find({}).toArray();
  // console.log(response);
}
module.exports = dbConnect;
