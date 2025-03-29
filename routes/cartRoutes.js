const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart.Controller");

/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Shopping cart management
 */

/**
 * @swagger
 * /api/createCart:
 *   post:
 *     summary: Create a new shopping cart
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *                 example: 1
 *               status_id:
 *                 type: integer
 *                 example: 2
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-02-28T12:00:00Z"
 *               fineshedAt:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-03-01T12:00:00Z"
 *     responses:
 *       201:
 *         description: Cart created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/createCart", cartController.createCart);

/**
 * @swagger
 * /api/getCarts:
 *   get:
 *     summary: Get all carts
 *     tags: [Carts]
 *     responses:
 *       200:
 *         description: List of carts
 *       500:
 *         description: Server error
 */
router.get("/getCarts", cartController.getCarts);

/**
 * @swagger
 * /api/getCartById/{id}:
 *   get:
 *     summary: Get a cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cart ID
 *     responses:
 *       200:
 *         description: Cart details
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.get("/getCartById/:id", cartController.getCartById);

/**
 * @swagger
 * /api/updateCart/{id}:
 *   put:
 *     summary: Update a cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *               fineshedAt:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Cart updated
 *       404:
 *         description: Cart not found
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put("/updateCart/:id", cartController.updateCart);

/**
 * @swagger
 * /api/deleteCart/{id}:
 *   delete:
 *     summary: Delete a cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cart ID
 *     responses:
 *       200:
 *         description: Cart deleted
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.delete("/deleteCart/:id", cartController.deleteCart);

module.exports = router;
