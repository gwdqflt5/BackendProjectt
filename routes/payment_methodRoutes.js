const express = require("express");
const router = express.Router();

// Controller to'g'ri yo'lda import qilinmoqda
const paymentMethodController = require("../controller/payment_method.controller");

/**
 * @swagger
 * tags:
 *   name: PaymentMethod
 *   description: API for managing payment methods
 */

/**
 * @swagger
 * /api/createPaymentMethod:
 *   post:
 *     summary: Create a new payment method
 *     tags: [PaymentMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Express Payment"
 *     responses:
 *       201:
 *         description: Successfully created payment method
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/createPaymentMethod", paymentMethodController.createPaymentMethod);

/**
 * @swagger
 * /api/getPaymentMethods:
 *   get:
 *     summary: Get all payment methods
 *     tags: [PaymentMethod]
 *     responses:
 *       200:
 *         description: List of payment methods
 *       500:
 *         description: Internal server error
 */
router.get("/getPaymentMethods", paymentMethodController.getPaymentMethods);

/**
 * @swagger
 * /api/getPaymentMethodById/{id}:
 *   get:
 *     summary: Get a payment method by ID
 *     tags: [PaymentMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The payment method ID
 *     responses:
 *       200:
 *         description: Payment method found
 *       404:
 *         description: Payment method not found
 *       500:
 *         description: Internal server error
 */
router.get("/getPaymentMethodById/:id", paymentMethodController.getPaymentMethodById);

/**
 * @swagger
 * /api/updatePaymentMethod/{id}:
 *   put:
 *     summary: Update a payment method by ID
 *     tags: [PaymentMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The payment method ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Payment Method"
 *     responses:
 *       200:
 *         description: Payment method updated successfully
 *       404:
 *         description: Payment method not found
 *       500:
 *         description: Internal server error
 */
router.put("/updatePaymentMethod/:id", paymentMethodController.updatePaymentMethod);

/**
 * @swagger
 * /api/deletePaymentMethod/{id}:
 *   delete:
 *     summary: Delete a payment method by ID
 *     tags: [PaymentMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The payment method ID
 *     responses:
 *       204:
 *         description: Payment method deleted successfully
 *       404:
 *         description: Payment method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deletePaymentMethod/:id", paymentMethodController.deletePaymentMethod);

module.exports = router;