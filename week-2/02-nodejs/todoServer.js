/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */

  const express = require('express');
  const bodyParser = require('body-parser');
  const fs = require('fs');
  const path = require('path');
  
  const app = express();
  const PORT = 3000;
  const dataFilePath = path.join(__dirname, 'todos.json');
  
  // Middleware to read and parse JSON data from the file
  app.use((req, res, next) => {
    try {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      req.todos = JSON.parse(data) || [];
      next();
    } catch (error) {
      req.todos = [];
      next();
    }
  });
  
  // Middleware to write JSON data to the file
  app.use((req, res, next) => {
    const writeDataToFile = () => {
      fs.writeFileSync(dataFilePath, JSON.stringify(req.todos), 'utf8', (err) => {
        if (err) {
          console.error('Error writing data to file:', err);
        }
      });
    };
  
    res.on('finish', writeDataToFile);
    res.on('close', writeDataToFile);
    next();
  });
  
  app.get('/todos', (req, res) => {
    res.status(200).json(req.todos);
  });
  
  // app.get('/todos/:id', (req, res) => {
  //   const todoId = parseInt(req.params.id);
  //   const todo = req.todos.find((t) => t.id === todoId);
  
  //   if (todo) {
  //     res.status(200).json(todo);
  //   } else {
  //     res.status(404).send('Not Found');
  //   }
  // });

  app.get('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = req.todos.find((t) => t.id === todoId);
  
    if (todo) {
      res.status(200).json(todo);  // Return the entire TODO item
    } else {
      res.status(404).send('Not Found');
    }
  });
  
  
  app.post('/todos', (req, res) => {
    const newTodo = {
      id: Date.now(),
      ...req.body,
    };
  
    req.todos.push(newTodo);
  
    res.status(201).json({ id: newTodo.id });
  });
  
  app.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const updatedTodoIndex = req.todos.findIndex((t) => t.id === todoId);
  
    if (updatedTodoIndex !== -1) {
      req.todos[updatedTodoIndex] = {
        ...req.todos[updatedTodoIndex],
        ...req.body,
      };
      res.status(200).send('OK');
    } else {
      res.status(404).send('Not Found');
    }
  });
  
  app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const deletedTodoIndex = req.todos.findIndex((t) => t.id === todoId);
  
    if (deletedTodoIndex !== -1) {
      req.todos.splice(deletedTodoIndex, 1);
      res.status(200).send('OK');
    } else {
      res.status(404).send('Not Found');
    }
  });
  
  // 404 route handler
  app.use((req, res) => {
    res.status(404).send('Not Found');
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
  module.exports = app;
  