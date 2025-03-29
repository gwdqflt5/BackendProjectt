const express = require("express");
const router = express.Router();
const ticket_statusController = require("../controller/ticket.controller");

/**
 * @swagger
 * tags:
 *   name: TicketMethod
 *   description: API for managing ticket methods
 */

/**
 * @swagger
 * /api/createTicket:
 *   post:
 *     summary: Create a new ticket method
 *     tags: [TicketMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: integer
 *                 example: 1
 *               seat_id:
 *                 type: integer
 *                 example: 15
 *               price:
 *                 type: number
 *                 format: decimal
 *                 example: 49.99
 *               service_fee:
 *                 type: number
 *                 format: decimal
 *                 example: 5.99
 *               status_id:
 *                 type: integer
 *                 example: 2
 *               ticket_type:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Successfully created ticket method
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/createTicket", ticket_statusController.createTicket);

/**
 * @swagger
 * /api/getTicket:
 *   get:
 *     summary: Get all ticket methods
 *     tags: [TicketMethod]
 *     responses:
 *       200:
 *         description: List of ticket methods
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   event_id:
 *                     type: integer
 *                     example: 1
 *                   seat_id:
 *                     type: integer
 *                     example: 15
 *                   price:
 *                     type: number
 *                     format: decimal
 *                     example: 49.99
 *                   service_fee:
 *                     type: number
 *                     format: decimal
 *                     example: 5.99
 *                   status_id:
 *                     type: integer
 *                     example: 2
 *                   ticket_type:
 *                     type: integer
 *                     example: 1
 *       500:
 *         description: Internal server error
 */
router.get("/getTicket", ticket_statusController.getTicket);

/**
 * @swagger
 * /api/getTicketById/{id}:
 *   get:
 *     summary: Get a ticket method by ID
 *     tags: [TicketMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket method ID
 *     responses:
 *       200:
 *         description: Ticket method found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 event_id:
 *                   type: integer
 *                   example: 1
 *                 seat_id:
 *                   type: integer
 *                   example: 15
 *                 price:
 *                   type: number
 *                   format: decimal
 *                   example: 49.99
 *                 service_fee:
 *                   type: number
 *                   format: decimal
 *                   example: 5.99
 *                 status_id:
 *                   type: integer
 *                   example: 2
 *                 ticket_type:
 *                   type: integer
 *                   example: 1
 *       404:
 *         description: Ticket method not found
 *       500:
 *         description: Internal server error
 */
router.get("/getTicketById/:id", ticket_statusController.getTicketById);

/**
 * @swagger
 * /api/updateTicket/{id}:
 *   put:
 *     summary: Update a ticket method by ID
 *     tags: [TicketMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket method ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: integer
 *                 example: 1
 *               seat_id:
 *                 type: integer
 *                 example: 15
 *               price:
 *                 type: number
 *                 format: decimal
 *                 example: 49.99
 *               service_fee:
 *                 type: number
 *                 format: decimal
 *                 example: 5.99
 *               status_id:
 *                 type: integer
 *                 example: 2
 *               ticket_type:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Ticket method updated successfully
 *       404:
 *         description: Ticket method not found
 *       500:
 *         description: Internal server error
 */
router.put("/updateTicket/:id", ticket_statusController.updateTicket);

/**
 * @swagger
 * /api/deleteTicket/{id}:
 *   delete:
 *     summary: Delete a ticket method by ID
 *     tags: [TicketMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket method ID
 *     responses:
 *       204:
 *         description: Ticket method deleted successfully
 *       404:
 *         description: Ticket method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteTicket/:id", ticket_statusController.deleteTicket);

module.exports = router;
