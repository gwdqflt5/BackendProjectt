const express = require("express");
const router = express.Router();
const venue_typevenueController = require("../controller/venue_typevenue.Controller");

/**
 * @swagger
 * tags:
 *   name: Venue_typevenueMethod
 *   description: API for managing venue_typevenue methods
 */

/**
 * @swagger
 * /api/createVenue_typevenue:
 *   post:
 *     summary: Create a new venue_typevenue method
 *     tags: [Venue_typevenueMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Express Venue_typevenue"
 *     responses:
 *       201:
 *         description: Successfully created venue_typevenue method
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/createVenue_typevenue", venue_typevenueController.createVenue_typevenue);

/**
 * @swagger
 * /api/getVenue_typevenue:
 *   get:
 *     summary: Get all venue_typevenue methods
 *     tags: [Venue_typevenueMethod]
 *     responses:
 *       200:
 *         description: List of venue_typevenue methods
 *       500:
 *         description: Internal server error
 */
router.get("/getVenue_typevenue", venue_typevenueController.getVenue_typevenue);

/**
 * @swagger
 * /api/getVenue_typevenueById/{id}:
 *   get:
 *     summary: Get a venue_typevenue method by ID
 *     tags: [Venue_typevenueMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venue_typevenue method ID
 *     responses:
 *       200:
 *         description: Venue_typevenue method found
 *       404:
 *         description: Venue_typevenue method not found
 *       500:
 *         description: Internal server error
 */
router.get("/getVenue_typevenueById/:id", venue_typevenueController.getVenue_typevenueById);

/**
 * @swagger
 * /api/updateVenue_typevenue/{id}:
 *   put:
 *     summary: Update a venue_typevenue method by ID
 *     tags: [Venue_typevenueMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venue_typevenue method ID
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
 *         description: Venue_typevenue method updated successfully
 *       404:
 *         description: Venue_typevenue method not found
 *       500:
 *         description: Internal server error
 */
router.put("/updateVenue_typevenue/:id", venue_typevenueController.updateVenue_typevenue);

/**
 * @swagger
 * /api/deleteVenue_typevenue/{id}:
 *   delete:
 *     summary: Delete a venue_typevenue method by ID
 *     tags: [Venue_typevenueMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venue_typevenue method ID
 *     responses:
 *       204:
 *         description: Venue_typevenue method deleted successfully
 *       404:
 *         description: Venue_typevenue method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteVenue_typevenue/:id", venue_typevenueController.deleteVenue_typevenue);

module.exports = router;
