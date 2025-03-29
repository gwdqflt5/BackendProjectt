const express = require("express");
const router = express.Router();
const delivery_methodController = require("../controller/delivery_method.Controller");

/**
 * @swagger
 * tags:
 *   name: DeliveryMethod
 *   description: API for managing delivery methods
 */

/**
 * @swagger
 * /api/createDelivery:
 *   post:
 *     summary: Create a new delivery method
 *     tags: [DeliveryMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Express Delivery"
 *     responses:
 *       201:
 *         description: Successfully created delivery method
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/createDelivery", delivery_methodController.createDelivery);

/**
 * @swagger
 * /api/getDelivery:
 *   get:
 *     summary: Get all delivery methods
 *     tags: [DeliveryMethod]
 *     responses:
 *       200:
 *         description: List of delivery methods
 *       500:
 *         description: Internal server error
 */
router.get("/getDelivery", delivery_methodController.getDelivery);

/**
 * @swagger
 * /api/getDeliveryById/{id}:
 *   get:
 *     summary: Get a delivery method by ID
 *     tags: [DeliveryMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The delivery method ID
 *     responses:
 *       200:
 *         description: Delivery method found
 *       404:
 *         description: Delivery method not found
 *       500:
 *         description: Internal server error
 */
router.get("/getDeliveryById/:id", delivery_methodController.getDeliveryById);

/**
 * @swagger
 * /api/updateDelivery/{id}:
 *   put:
 *     summary: Update a delivery method by ID
 *     tags: [DeliveryMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The delivery method ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Standard Shipping"
 *     responses:
 *       200:
 *         description: Delivery method updated successfully
 *       404:
 *         description: Delivery method not found
 *       500:
 *         description: Internal server error
 */
router.put("/updateDelivery/:id", delivery_methodController.updateDelivery);

/**
 * @swagger
 * /api/deleteDelivery/{id}:
 *   delete:
 *     summary: Delete a delivery method by ID
 *     tags: [DeliveryMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The delivery method ID
 *     responses:
 *       204:
 *         description: Delivery method deleted successfully
 *       404:
 *         description: Delivery method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteDelivery/:id", delivery_methodController.deleteDelivery);

module.exports = router;
