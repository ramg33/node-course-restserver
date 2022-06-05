const { Router } = require("express");
const { getUsers, putUsers, postUsers, patchUser, deleteUser } = require("../controllers/users");

const router = Router();

router.get('/', getUsers);

router.post('/', postUsers);

router.put('/:id', putUsers);

router.patch('/', patchUser);

router.delete('/', deleteUser);

module.exports = router;