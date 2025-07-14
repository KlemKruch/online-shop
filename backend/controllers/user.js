const bcrypt = require("bcrypt");
const { User } = require("../models/User");
const { generate } = require("../helpers/token");
const ROLES = require("../constants/roles");

async function register(login, password) {
  if (!password) {
    throw new Error("Пароль пустой");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({ login, password: passwordHash });
  const token = generate({ id: user.id });

  return { user, token };
}

async function login(login, password) {
  const user = await User.findOne({ login });

  if (!user) {
    throw new Error("Пользователь не найден.");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Неверный пароль.");
  }

  const token = generate({ id: user.id });

  return { token, user };
}

function getUsers() {
  return User.find();
}

function getUser(id) {
  return User.findById(id);
}

function getRoles() {
  return [
    { id: ROLES.ADMIN, name: "Администратор" },
    { id: ROLES.MODERATOR, name: "Модератор" },
    { id: ROLES.USER, name: "Пользователь" },
  ];
}

function deleteUser(id) {
  return User.deleteOne({ _id: id });
}

function updateUser(id, userData) {
  return User.findByIdAndUpdate(id, userData, { returnDocument: "after" });
}

module.exports = {
  register,
  login,
  getUsers,
  getUser,
  getRoles,
  deleteUser,
  updateUser,
};
