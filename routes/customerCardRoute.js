const express = require("express");
const customerCard = express.Router();
const customerCardController = require("../controller/customerCard.controller");

/**
 * @swagger
 * tags:
 *   name: CustomerCards
 *   description: Customer Cards management
 */

/**
 * @swagger
 * /api/createCustomerCard:
 *   post:
 *     summary: Create a new customer card
 *     tags: [CustomerCards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Customer card created
 *       500:
 *         description: Server error
 */
customerCard.post("/createCustomerCard", customerCardController.createCustomerCard);

/**
 * @swagger
 * /api/getCustomerCards:
 *   get:
 *     summary: Get all customer cards
 *     tags: [CustomerCards]
 *     responses:
 *       200:
 *         description: List of customer cards
 *       500:
 *         description: Server error
 */
customerCard.get("/getCustomerCards", customerCardController.getCustomerCards);

/**
 * @swagger
 * /api/getCustomerCardById{id}:
 *   get:
 *     summary: Get customer card by ID
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer card details
 *       404:
 *         description: Customer card not found
 *       500:
 *         description: Server error
 */
customerCard.get("/getCustomerCardById:id", customerCardController.getCustomerCardById);

/**
 * @swagger
 * /api/updateCustomerCard{id}:
 *   put:
 *     summary: Update customer card by ID
 *     tags: [CustomerCards]
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
 *               customer_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Customer card updated
 *       404:
 *         description: Customer card not found
 *       500:
 *         description: Server error
 */
customerCard.put("/updateCustomerCard:id", customerCardController.updateCustomerCard);

/**
 * @swagger
 * /api/deleteCustomerCard{id}:
 *   delete:
 *     summary: Delete customer card by ID
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Customer card deleted
 *       404:
 *         description: Customer card not found
 *       500:
 *         description: Server error
 */
customerCard.delete("/deleteCustomerCard:id", customerCardController.deleteCustomerCard);

module.exports = customerCard;
