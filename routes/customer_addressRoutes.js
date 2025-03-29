const express = require("express");
const router = express.Router();
const customerAddressController = require("../controller/customer_address.Controller");

/**
 * @swagger
 * tags:
 *   name: CustomerAddresses
 *   description: Customer address management
 */

/**
 * @swagger
 * /api/createCustomerAddress:
 *   post:
 *     summary: Create a new customer address
 *     tags: [CustomerAddresses]
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
 *               name:
 *                 type: string
 *                 example: 123
 *               country_id:
 *                 type: integer
 *                 example: 2
 *               region_id:
 *                 type: integer
 *                 example: 3
 *               district_id:
 *                 type: integer
 *                 example: 4
 *               street:
 *                 type: string
 *                 example: "Baker Street"
 *               house:
 *                 type: string
 *                 example: "221B"
 *               flat:
 *                 type: integer
 *                 example: 5
 *               location:
 *                 type: string
 *                 example: "51.5074 N, 0.1278 W"
 *               post_index:
 *                 type: string
 *                 example: "123456"
 *               info:
 *                 type: string
 *                 example: "Near the park"
 *     responses:
 *       201:
 *         description: Customer address created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/createCustomerAddress", customerAddressController.createCustomerAddress);

/**
 * @swagger
 * /api/getCustomerAddresses:
 *   get:
 *     summary: Get all customer addresses
 *     tags: [CustomerAddresses]
 *     responses:
 *       200:
 *         description: List of customer addresses
 *       500:
 *         description: Server error
 */
router.get("/getCustomerAddresses", customerAddressController.getCustomerAddresses);

/**
 * @swagger
 * /api/getCustomerAddressById/{id}:
 *   get:
 *     summary: Get a customer address by ID
 *     tags: [CustomerAddresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customer address ID
 *     responses:
 *       200:
 *         description: Customer address details
 *       404:
 *         description: Customer address not found
 *       500:
 *         description: Server error
 */
router.get("/getCustomerAddressById/:id", customerAddressController.getCustomerAddressById);

/**
 * @swagger
 * /api/updateCustomerAddress/{id}:
 *   put:
 *     summary: Update a customer address by ID
 *     tags: [CustomerAddresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customer address ID
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
 *               country_id:
 *                 type: integer
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: integer
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer address updated
 *       404:
 *         description: Customer address not found
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put("/updateCustomerAddress/:id", customerAddressController.updateCustomerAddress);

/**
 * @swagger
 * /api/deleteCustomerAddress/{id}:
 *   delete:
 *     summary: Delete a customer address by ID
 *     tags: [CustomerAddresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customer address ID
 *     responses:
 *       200:
 *         description: Customer address deleted
 *       404:
 *         description: Customer address not found
 *       500:
 *         description: Server error
 */
router.delete("/deleteCustomerAddress/:id", customerAddressController.deleteCustomerAddress);

module.exports = router;

