const express = require("express");
const router = express.Router();
const ticket_statusController = require("../controller/ticket_status.Controller");

/**
 * @swagger
 * tags:
 *   name: Ticket_statusMethod
 *   description: API for managing ticket_status methods
 */

/**
 * @swagger
 * /api/createTicket_status:
 *   post:
 *     summary: Create a new ticket_status method
 *     tags: [Ticket_statusMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Express Ticket_status"
 *     responses:
 *       201:
 *         description: Successfully created ticket_status method
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/createTicket_status", ticket_statusController.createTicket_status);

/**
 * @swagger
 * /api/getTicket_status:
 *   get:
 *     summary: Get all ticket_status methods
 *     tags: [Ticket_statusMethod]
 *     responses:
 *       200:
 *         description: List of ticket_status methods
 *       500:
 *         description: Internal server error
 */
router.get("/getTicket_status", ticket_statusController.getTicket_status);

/**
 * @swagger
 * /api/getTicket_statusById/{id}:
 *   get:
 *     summary: Get a ticket_status method by ID
 *     tags: [Ticket_statusMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket_status method ID
 *     responses:
 *       200:
 *         description: Ticket_status method found
 *       404:
 *         description: Ticket_status method not found
 *       500:
 *         description: Internal server error
 */
router.get("/getTicket_statusById/:id", ticket_statusController.getTicket_statusById);

/**
 * @swagger
 * /api/updateTicket_status/{id}:
 *   put:
 *     summary: Update a ticket_status method by ID
 *     tags: [Ticket_statusMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket_status method ID
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
 *         description: Ticket_status method updated successfully
 *       404:
 *         description: Ticket_status method not found
 *       500:
 *         description: Internal server error
 */
router.put("/updateTicket_status/:id", ticket_statusController.updateTicket_status);

/**
 * @swagger
 * /api/deleteTicket_status/{id}:
 *   delete:
 *     summary: Delete a ticket_status method by ID
 *     tags: [Ticket_statusMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket_status method ID
 *     responses:
 *       204:
 *         description: Ticket_status method deleted successfully
 *       404:
 *         description: Ticket_status method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteTicket_status/:id", ticket_statusController.deleteTicket_status);

module.exports = router;
