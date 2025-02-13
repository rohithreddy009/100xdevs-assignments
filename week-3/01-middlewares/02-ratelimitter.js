const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

app.use((req, res, next) => {
  const userId = req.headers['user-id'];

  // Initialize request count for the user if not exists
  numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] || 0;

  // Check if the user has exceeded the limit
  if (numberOfRequestsForUser[userId] >= 5) {
    return res.status(404).json({ error: 'Rate limit exceeded. Please try again later.' });
  }

  // Increment the request count for the user
  numberOfRequestsForUser[userId]++;

  // Schedule the reset of the request count for the user after one second
  setTimeout(() => {
    numberOfRequestsForUser[userId] = 0;
  }, 1000);

  // Continue to the next middleware or route handler
  next();
});

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000)

// module.exports = app;