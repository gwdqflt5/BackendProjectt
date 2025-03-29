const express = require("express");
const router = express.Router();
const ticketTypeController = require("../controller/ticket.type.controller");

/**
 * @swagger
 * tags:
 *   name: TicketType
 *   description: API for managing ticket types
 */

/**
 * @swagger
 * /api/createTicketType:
 *   post:
 *     summary: Create a new ticket type
 *     tags: [TicketType]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: VIP
 *               color:
 *                 type: string
 *                 example: "#FF5733"
 *               ticket_id:
 *                 type: number
 *                 example: 0
 *     responses:
 *       201:
 *         description: Successfully created ticket type
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/createTicketType", ticketTypeController.createTicketType);

/**
 * @swagger
 * /api/getTicketTypes:
 *   get:
 *     summary: Get all ticket types
 *     tags: [TicketType]
 *     responses:
 *       200:
 *         description: List of ticket types
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
 *                   name:
 *                     type: string
 *                     example: VIP
 *                   color:
 *                     type: string
 *                     example: "#FF5733"
 *       500:
 *         description: Internal server error
 */
router.get("/getTicketTypes", ticketTypeController.getTicketTypes);

/**
 * @swagger
 * /api/getTicketTypeById/{id}:
 *   get:
 *     summary: Get a ticket type by ID
 *     tags: [TicketType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket type ID
 *     responses:
 *       200:
 *         description: Ticket type found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: VIP
 *                 color:
 *                   type: string
 *                   example: "#FF5733"
 *       404:
 *         description: Ticket type not found
 *       500:
 *         description: Internal server error
 */
router.get("/getTicketTypeById/:id", ticketTypeController.getTicketTypeById);

/**
 * @swagger
 * /api/updateTicketType/{id}:
 *   put:
 *     summary: Update a ticket type by ID
 *     tags: [TicketType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: VIP
 *               color:
 *                 type: string
 *                 example: "#FF5733"
 *               ticket_id:
 *                 type: number
 *                 example: 1
 *     responses:
 *       200:
 *         description: Ticket type updated successfully
 *       404:
 *         description: Ticket type not found
 *       500:
 *         description: Internal server error
 */
router.put("/updateTicketType/:id", ticketTypeController.updateTicketType);

/**
 * @swagger
 * /api/deleteTicketType/{id}:
 *   delete:
 *     summary: Delete a ticket type by ID
 *     tags: [TicketType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket type ID
 *     responses:
 *       204:
 *         description: Ticket type deleted successfully
 *       404:
 *         description: Ticket type not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteTicketType/:id", ticketTypeController.deleteTicketType);

module.exports = router;
