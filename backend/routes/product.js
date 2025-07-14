const express = require("express");
const {
  addProduct,
  editProduct,
  deleteProduct,
  getProducts,
  getProduct,
} = require("../controllers/product");
const ROLES = require("../constants/roles");
const hasRole = require("../middlewares/hasRole");
const authenticated = require("../middlewares/authenticated");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const products = await getProducts();

  res.send({ data: products });
});

router.get("/:id", async (req, res) => {
  const product = await getProduct(req.params.id);

  res.send({ data: product });
});

router.post(
  "/add",
  authenticated,
  hasRole([ROLES.MODERATOR]),
  async (req, res) => {
    const newProduct = await addProduct({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      amount: req.body.amount,
      category: req.body.category,
      image: req.body.image,
    });

    res.send({ data: newProduct });
  },
);

router.patch(
  "/editing/:id",
  authenticated,
  hasRole([ROLES.MODERATOR]),
  async (req, res) => {
    const updateProduct = await editProduct(req.params.id, {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      amount: req.body.amount,
      category: req.body.category,
      image: req.body.image,
    });

    res.send({ data: updateProduct });
  },
);

router.delete(
  "/editing/:id",
  authenticated,
  hasRole([ROLES.MODERATOR]),
  async (req, res) => {
    await deleteProduct(req.params.id);

    res.send({ error: null });
  },
);

module.exports = router;
