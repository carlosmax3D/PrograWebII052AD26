const Users = require('../model/usersModel')
const Roles = require('../model/rolesModel')
//const users = [ { id: 1, name: 'Hadi Soufan' }, { id: 2, name: 'Melia Malik' }, { id: 3, name: 'Zayn Cerny' }];
// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res) => {
  const users = await Users.find();
  res.status(200).json({ success: true, count: users.length, data: users});
};

// @desc    Get one user
// @route   GET /api/v1/user
// @access  Public
exports.getUser = async (req, res) => {
  const id = req.params.id;
  const users = await Users.find({"id": id}).populate("rol");
  console.dir(users)
  if (users.length < 1)
  res.status(500).
  json({ success: false, count: 0, data: [{"error": "porque me odias?"}]});
  else
  res.status(200).json({ success: true, count: users.length, data: users});
};

// @desc    Create new user
// @route   POST /api/v1/create
// @access  Public
exports.createUser = async (req, res) => {
//  const {name} = await Users.create(req.body);  
  const idDB = (await Users.find().sort({"id": -1}))
  const rol = await Roles.findOne();
  const id = idDB.length < 1 ? 1 : idDB[0].id + 1
  const name = req.body.name;
  const user = await Users.create({id, name, rol});
  res.status(201).json({ success: true, user: { id, name }, message: 'User created successfully' });
};

// @desc    Update a user
// @route   PATCH /api/v1/users/:id
// @access  Public
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  const user = await Users.findOne({"id": id});
  console.dir(user)
  if (user instanceof Users) {
   user.name = name;
   await user.save();
    res.json({ message: 'User updated successfully', user });
  } else {
    res.status(404).json({ message: `User with ID ${id} not found` });
  }
};

// @desc    Delete a user
// @route   DELETE /api/v1/users/:id
// @access  Public
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const index = await Users.deleteOne({"id": id});
  console.dir(index);
  if (index.deletedCount > 0) {
    res.status(200).json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: `User with ID ${id} not found` });
  }
};