const users = [ { id: 1, name: 'Hadi Soufan' }, { id: 2, name: 'Melia Malik' }, { id: 3, name: 'Zayn Cerny' }];
// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = (req, res) => {
//  const users = await Users.find();
  res.status(200).json({ success: true, count: users.length, data: users});
};

// @desc    Get one user
// @route   GET /api/v1/user
// @access  Public
exports.getUser = (req, res) => {
    const id = req.params.id - 1
//  const users = await Users.find();
  if (id > users.length - 1 || id < 0)
  res.status(500).
  json({ success: false, count: 0, data: [{"error": "porque me odias?"}]});
  else
  res.status(200).json({ success: true, count: 1, data: [users[id]]});
};

// @desc    Create new user
// @route   POST /api/v1/create
// @access  Public
exports.createUser = (req, res) => {
//  const {name} = await Users.create(req.body);  
  const id = users.length + 1;
  const name = req.body.name;
  users.push({ id, name });
  res.status(201).json({ success: true, user: { id, name }, message: 'User created successfully' });
};

// @desc    Update a user
// @route   PATCH /api/v1/users/:id
// @access  Public
exports.updateUser = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  const user = users.find(user => user.id == id);
  if (user) {
   user.name = name;
    res.json({ message: 'User updated successfully', user });
  } else {
    res.status(404).json({ message: `User with ID ${id} not found` });
  }
};

// @desc    Delete a user
// @route   DELETE /api/v1/users/:id
// @access  Public
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const index = users.findIndex(user => user.id == id);
  if (index != -1) {
    users.splice(index, 1);
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: `User with ID ${id} not found` });
  }
};