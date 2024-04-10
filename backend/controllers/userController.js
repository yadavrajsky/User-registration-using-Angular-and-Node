const User = require('../models/user');
const Sequelize = require('sequelize');


//register a new user
exports.register = async (req, res) => {
  try {
    const { name,email } = req.body;
    const existingUser = await User.findOne({ where: { email: email ? email : null } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    await User.create({
      email,
      name,
    });

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    if (error instanceof Sequelize.ValidationError) {
      res.status(400).json({ ...error })
    } else {
      // Handle other types of errors
      console.error('Other error:', error);
      res.status(500).json({ ...error })
    }
  }
};


// Fetch all users with pagination
exports.getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page, default is 1
    const pageSize = parseInt(req.query.pageSize) || 10; // Number of users per page, default is 10

    const offset = (page - 1) * pageSize; // Calculate offset

    const users = await User.findAll({
      limit: pageSize,
      offset: offset,
    }); 

    const totalCount = await User.count(); // Total number of users in the database

    return res.status(200).json({
      users,
      totalCount,
      currentPage: page,
      pageSize: pageSize,
      totalPages: Math.ceil(totalCount / pageSize),
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
