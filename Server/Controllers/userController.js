const { User } = require("../models");

const allUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ user });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.status(200).json({ user });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.update(req.body, {
      where: { id: id },
    });

    res.status(200).json({ user });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.destroy({
      where: { id: id },
    });
    res.status(200).json({ user });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  allUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
