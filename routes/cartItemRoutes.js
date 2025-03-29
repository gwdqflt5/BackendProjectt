const express = require("express");
const router = express.Router();
const cartItemController = require("../controller/cart_item.Controller");

/**
 * @swagger
 * tags:
 *   name: CartItems
 *   description: Shopping cart item management
 */

/**
 * @swagger
 * /api/createCartItem:
 *   post:
 *     summary: Add a new item to the cart
 *     tags: [CartItems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: integer
 *                 example: 0
 *               cart_id:
 *                 type: integer
 *                 example: 0
 *               quantity:
 *                 type: integer
 *                 example: 0
 *     responses:
 *       201:
 *         description: Item added to cart
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/createCartItem", cartItemController.createCartItem);

/**
 * @swagger
 * /api/getCartItems:
 *   get:
 *     summary: Get all cart items
 *     tags: [CartItems]
 *     responses:
 *       200:
 *         description: List of cart items
 *       500:
 *         description: Server error
 */
router.get("/getCartItems", cartItemController.getCartItems);

/**
 * @swagger
 * /api/getCartItemById/{id}:
 *   get:
 *     summary: Get a cart item by ID
 *     tags: [CartItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cart item ID
 *     responses:
 *       200:
 *         description: Cart item details
 *       404:
 *         description: Cart item not found
 *       500:
 *         description: Server error
 */
router.get("/getCartItemById/:id", cartItemController.getCartItemById);

/**
 * @swagger
 * /api/updateCartItem/{id}:
 *   put:
 *     summary: Update a cart item by ID
 *     tags: [CartItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cart item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: integer
 *               cart_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Cart item updated
 *       404:
 *         description: Cart item not found
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put("/updateCartItem/:id", cartItemController.updateCartItem);

/**
 * @swagger
 * /api/deleteCartItem/{id}:
 *   delete:
 *     summary: Delete a cart item by ID
 *     tags: [CartItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cart item ID
 *     responses:
 *       200:
 *         description: Cart item deleted
 *       404:
 *         description: Cart item not found
 *       500:
 *         description: Server error
 */
router.delete("/deleteCartItem/:id", cartItemController.deleteCartItem);

module.exports = router;
