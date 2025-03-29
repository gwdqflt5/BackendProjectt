const express = require("express");
const router = express.Router();
const seatController = require("../controller/seat.Controller");

/**
 * @swagger
 * tags:
 *   name: Seats
 *   description: Seat management
 */

/**
 * @swagger
 * /api/createSeat:
 *   post:
 *     summary: Create a new seat
 *     tags: [Seats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: integer
 *                 example: 1
 *               row_number:
 *                 type: integer
 *                 example: 5
 *               number:
 *                 type: integer
 *                 example: 12
 *               venue_id:
 *                 type: integer
 *                 example: 3
 *               seat_type_id:
 *                 type: integer
 *                 example: 2
 *               location_in_schema:
 *                 type: object
 *                 properties:
 *                   type:
 *                     type: string
 *                     example: "Point"
 *                   coordinates:
 *                     type: array
 *                     items:
 *                       type: number
 *                     example: [40.7128, -74.0060]
 *     responses:
 *       201:
 *         description: Seat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/createSeat", seatController.createSeat);

/**
 * @swagger
 * /api/getSeats:
 *   get:
 *     summary: Get all seats
 *     tags: [Seats]
 *     responses:
 *       200:
 *         description: List of seats
 *       500:
 *         description: Server error
 */
router.get("/getSeats", seatController.getSeats);

/**
 * @swagger
 * /api/getSeatById/{id}:
 *   get:
 *     summary: Get a seat by ID
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The seat ID
 *     responses:
 *       200:
 *         description: Seat details
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
router.get("/getSeatById/:id", seatController.getSeatById);

/**
 * @swagger
 * /api/updateSeat/{id}:
 *   put:
 *     summary: Update a seat by ID
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The seat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: integer
 *               row_number:
 *                 type: integer
 *               number:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               seat_type_id:
 *                 type: integer
 *                 properties:
 *                   type:
 *                     type: string
 *                   coordinates:
 *                     type: array
 *                     items:
 *                       type: number
 *     responses:
 *       200:
 *         description: Seat updated
 *       404:
 *         description: Seat not found
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put("/updateSeat/:id", seatController.updateSeat);

/**
 * @swagger
 * /api/deleteSeat/{id}:
 *   delete:
 *     summary: Delete a seat by ID
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The seat ID
 *     responses:
 *       200:
 *         description: Seat deleted
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
router.delete("/deleteSeat/:id", seatController.deleteSeat);

module.exports = router;
