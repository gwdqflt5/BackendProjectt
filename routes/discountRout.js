const express = require("express");
const discount = express.Router();
const discountController = require("../controller/discount.controller");

/**
 * @swagger
 * tags:
 *   name: Discounts
 *   description: Discount management
 */

/**
 * @swagger
 * /api/createDiscount:
 *   post:
 *     summary: Create a new discount
 *     tags: [Discounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: number
 *               finish_date:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Discount created
 *       500:
 *         description: Server error
 */
discount.post("/createDiscount", discountController.createDiscount);

/**
 * @swagger
 * /api/getDiscounts:
 *   get:
 *     summary: Get all discounts
 *     tags: [Discounts]
 *     responses:
 *       200:
 *         description: List of discounts
 *       500:
 *         description: Server error
 */
discount.get("/getDiscounts", discountController.getDiscounts);

/**
 * @swagger
 * /api/getDiscountById/{id}:
 *   get:
 *     summary: Get discount by ID
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Discount details
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
discount.get("/getDiscountById/:id", discountController.getDiscountById);

/**
 * @swagger
 * /api/updateDiscount/{id}:
 *   put:
 *     summary: Update discount by ID
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: number
 *               finish_date:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Discount updated
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
discount.put("/updateDiscount/:id", discountController.updateDiscount);

/**
 * @swagger
 * /api/deleteDiscount/{id}:
 *   delete:
 *     summary: Delete discount by ID
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Discount deleted
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
discount.delete("/deleteDiscount/:id", discountController.deleteDiscount);

module.exports = discount;
