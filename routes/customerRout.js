const express = require("express");
const router = express.Router();
const customerController = require("../controller/customer.controller");

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer management
 */

/**
 * @swagger
 * /api/createCustomer:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/createCustomer", customerController.createCustomer);

/**
 * @swagger
 * /api/getCustomers:
 *   get:
 *     summary: Get a list of all customers
 *     tags: [Customer]
 *     responses:
 *       200:
 *         description: A list of customers
 *       500:
 *         description: Server error
 */
router.get("/getCustomers", customerController.getCustomers);

/**
 * @swagger
 * /api/getCustomerById/{id}:
 *   get:
 *     summary: Get a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customer ID
 *     responses:
 *       200:
 *         description: Customer details
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.get("/getCustomerById/:id", customerController.getCustomerById);

/**
 * @swagger
 * /api/updateCustomer/{id}:
 *   put:
 *     summary: Update a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer updated
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.put("/updateCustomer/:id", customerController.updateCustomer);

/**
 * @swagger
 * /api/deleteCustomer/{id}:
 *   delete:
 *     summary: Delete a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customer ID
 *     responses:
 *       200:
 *         description: Customer deleted
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.delete("/deleteCustomer/:id", customerController.deleteCustomer);

module.exports = router;
