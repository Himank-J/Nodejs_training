const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controller/usercontroller.js');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

modules.export = router;