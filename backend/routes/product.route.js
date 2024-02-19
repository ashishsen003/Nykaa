const express = require("express");
const { productModel } = require("../models/product.model");
const { auth } = require("../middlewares/auth.middleware");
const productsRouter = express.Router();

productsRouter.get("/", auth, async (req, res) => {
  try {
    const products = await productModel.find({ userID: req.body.userID });
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

productsRouter.get("/:productId", auth, async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await productModel.findById({ _id: productId });
    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

productsRouter.post("/", auth,  async (req, res) => {
  // const { name, picture, description, gender, category, price } = req.body;
  try {
    const product = new productModel(req.body);
    await product.save();
    res.status(201).send({ message: "Product added successfully" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

productsRouter.patch("/:productId", auth,  async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await productModel.findById({ _id: productId });
    if (req.body.userID == product.userID) {
      await productModel.findByIdAndUpdate({ _id: productId }, req.body);
      res.status(204).send({ msg: `Post with ID ${productId} has been updated` });
    } else {
      res.status(204).send({ msg: "You are not authorised" });
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

productsRouter.delete("/:productId", auth,  async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await productModel.findOne({ _id: productId });
    if (req.body.userID == product.userID) {
      await productModel.findByIdAndDelete({ _id: productId }, req.body);
      res.status(202).send({ msg: `Post with ID ${productId} has been deleted` });
    } else {
      res.status(202).send({ msg: "You are not authorised" });
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

module.exports = { productsRouter };
