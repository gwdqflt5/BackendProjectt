const { CartItem, Cart, Ticket } = require("../models");

const { validateCartItem } = require("../validations/cart_itemValidation");

exports.createCartItem = async (req, res) => {
  const { error } = validateCartItem(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cartItem = await CartItem.create(req.body);
    res.status(201).send(cartItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCartItemById = async (req, res) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.id, {
      include: [
        {
          model: Cart,
          as: "cart",
        },
        {
          model: Ticket,
          as: "ticket",
        },
      ],
    });

    if (!cartItem) {
      return res.status(404).json({ message: "CartItem not found" });
    }

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateCartItem = async (req, res) => {
  const { error } = validateCartItem(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cartItem = await CartItem.findByPk(req.params.id);
    if (!cartItem) return res.status(404).send("CartItem not found");

    await cartItem.update(req.body);
    res.status(200).send(cartItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.id);
    if (!cartItem) return res.status(404).json({ message: "CartItem not found" });

    await cartItem.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
