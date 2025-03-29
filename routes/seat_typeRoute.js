const express = require("express");
const seatType = express.Router();
const seatTypeController = require("../controller/seat_type.controller");

/**
 * @swagger
 * tags:
 *   name: SeatType
 *   description: Seat Type management
 */

/**
 * @swagger
 * /api/createSeatType:
 *   post:
 *     summary: Create a new seat type
 *     tags: [SeatType]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Seat type created
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
seatType.post("/createSeatType", seatTypeController.createSeatType);

/**
 * @swagger
 * /api/getSeatTypes:
 *   get:
 *     summary: Get a list of all seat types
 *     tags: [SeatType]
 *     responses:
 *       200:
 *         description: A list of seat types
 *       500:
 *         description: Server error
 */
seatType.get("/getSeatTypes", seatTypeController.getSeatTypes);

/**
 * @swagger
 * /api/getSeatTypeById{id}:
 *   get:
 *     summary: Get a seat type by ID
 *     tags: [SeatType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The seat type ID
 *     responses:
 *       200:
 *         description: Seat type details
 *       404:
 *         description: Seat type not found
 *       500:
 *         description: Server error
 */
seatType.get("/getSeatTypeById:id", seatTypeController.getSeatTypeById);

/**
 * @swagger
 * /api/updateSeatType{id}:
 *   put:
 *     summary: Update a seat type by ID
 *     tags: [SeatType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The seat type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seat type updated
 *       404:
 *         description: Seat type not found
 *       500:
 *         description: Server error
 */
seatType.put("/updateSeatType:id", seatTypeController.updateSeatType);

/**
 * @swagger
 * /api/deleteSeatType{id}:
 *   delete:
 *     summary: Delete a seat type by ID
 *     tags: [SeatType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The seat type ID
 *     responses:
 *       200:
 *         description: Seat type deleted
 *       404:
 *         description: Seat type not found
 *       500:
 *         description: Server error
 */
seatType.delete("/deleteSeatType:id", seatTypeController.deleteSeatType);

module.exports = seatType;
