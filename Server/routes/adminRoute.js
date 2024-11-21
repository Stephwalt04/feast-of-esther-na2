const express = require("express");
const {
  allUsers,
  createUser,
  updateUser,
  getUserById,
  deleteUser,
} = require("../Controllers/userController");
const { contactMail } = require("../Controllers/contactController");
const { Router } = express;
const router = Router();

router.get("/users", allUsers);
router.post("/users", createUser);
router.get("/users/id", getUserById);
router.put("/users/:id/update", updateUser);
router.delete("/users/:id/delete", deleteUser);

router.post("/contact", contactMail);

module.exports = router;
