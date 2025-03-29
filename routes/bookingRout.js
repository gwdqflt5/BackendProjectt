const express = require("express");
const router = express.Router();
const bookingController = require("../controller/booking.controller");

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking management
 */

/**
 * @swagger
 * /api/createBooking:
 *   post:
 *     summary: Create a new booking
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               payment_method_id:
 *                 type: integer
 *               delivery_method_id:
 *                 type: integer
 *               discount_coupon_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Booking created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/createBooking", bookingController.createBooking);

/**
 * @swagger
 * /api/getBookings:
 *   get:
 *     summary: Get a list of all bookings
 *     tags: [Booking]
 *     responses:
 *       200:
 *         description: A list of bookings
 *       500:
 *         description: Server error
 */
router.get("/getBookings", bookingController.getBookings);

/**
 * @swagger
 * /api/getBookingById/{id}:
 *   get:
 *     summary: Get a booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The booking ID
 *     responses:
 *       200:
 *         description: Booking details
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.get("/getBookingById/:id", bookingController.getBookingById);

/**
 * @swagger
 * /api/updateBooking/{id}:
 *   put:
 *     summary: Update a booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               payment_method_id:
 *                 type: integer
 *               delivery_method_id:
 *                 type: integer
 *               discount_coupon_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Booking updated
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.put("/updateBooking/:id", bookingController.updateBooking);

/**
 * @swagger
 * /api/deleteBooking/{id}:
 *   delete:
 *     summary: Delete a booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The booking ID
 *     responses:
 *       200:
 *         description: Booking deleted
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.delete("/deleteBooking/:id", bookingController.deleteBooking);

module.exports = router;
