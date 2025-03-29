const express = require("express");
const router = express.Router();
const venueController = require("../controller/venue.controller");

/**
 * @swagger
 * tags:
 *   name: Venue
 *   description: Venue management
 */

/**
 * @swagger
 * /api/createVenue:
 *   post:
 *     summary: Create a new venue
 *     tags: [Venue]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               regionId:
 *                 type: integer
 *               districtId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Venue created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/createVenue", venueController.createVenue);

/**
 * @swagger
 * /api/getVenues:
 *   get:
 *     summary: Get a list of all venues
 *     tags: [Venue]
 *     responses:
 *       200:
 *         description: A list of venues
 *       500:
 *         description: Server error
 */
router.get("/getVenues", venueController.getVenues);

/**
 * @swagger
 * /api/getVenueById/{id}:
 *   get:
 *     summary: Get a venue by ID
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venue ID
 *     responses:
 *       200:
 *         description: Venue details
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.get("/getVenueById/:id", venueController.getVenueById);

/**
 * @swagger
 * /api/updateVenue/{id}:
 *   put:
 *     summary: Update a venue by ID
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string

 *               regionId:
 *                 type: integer
 *               districtId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Venue updated
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.put("/updateVenue/:id", venueController.updateVenue);

/**
 * @swagger
 * /api/deleteVenue/{id}:
 *   delete:
 *     summary: Delete a venue by ID
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venue ID
 *     responses:
 *       200:
 *         description: Venue deleted
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.delete("/deleteVenue/:id", venueController.deleteVenue);

module.exports = router;
