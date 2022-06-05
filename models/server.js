const express = require('express');
var cors = require('cors');

class Server {

  constructor () {
    this.app  = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';

    //Middlewares
    this.middlewares();

    //Application routes
    this.routes();

  }

  middlewares () {

    //Cors
    this.app.use(cors());

    //Body parse and lecture
    this.app.use(express.json())

    //Public directory
    this.app.use(express.static('public'));
  }

  routes () {

    this.app.use(this.usersPath, require('../routes/users'));
    
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log('Server running on port', this.port);
    });
  }

}

module.exports = Server;