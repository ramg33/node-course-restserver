const { request, response } = require('express');

const getUsers = (req = request, res = response) => {

  const {name, apikey, page=10, limit} = req.query;

  res.json(
    {
      msg: "get API - Controller",
      name,
      apikey,
      page,
      limit
    }
  );
}

const postUsers = (req = request, res = response) => {

  const {name, age} = req.body;

  res.json(
    {
      msg: "post API - Controller",
      name,
      age
    }
  );
}

const putUsers = (req = request, res = response) => {

  const id = req.params.id;

  res.json(
    {
      msg: "put API - Controller",
      id
    }
  );
}

const patchUser = (req = request, res = response) => {
  res.json(
    {
      msg: "post API - Controller"
    }
  );
}

const deleteUser = (req = request, res = response) => {
  res.json(
    {
      msg: "delete API - Controller"
    }
  );
}

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  patchUser,
  deleteUser
}