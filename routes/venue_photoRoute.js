const express = require("express");
const venuePhoto = express.Router();
const venuePhotoController = require("../controller/venue_photo.controller");

/**
 * @swagger
 * tags:
 *   name: VenuePhotos
 *   description: Venue Photos management
 */

/**
 * @swagger
 * /api/createVenuePhoto:
 *   post:
 *     summary: Upload a new venue photo
 *     tags: [VenuePhotos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Venue photo uploaded
 *       500:
 *         description: Server error
 */
venuePhoto.post("/createVenuePhoto", venuePhotoController.createVenuePhoto);

/**
 * @swagger
 * /api/getVenuePhotos:
 *   get:
 *     summary: Get all venue photos
 *     tags: [VenuePhotos]
 *     responses:
 *       200:
 *         description: List of venue photos
 *       500:
 *         description: Server error
 */
venuePhoto.get("/getVenuePhotos", venuePhotoController.getVenuePhotos);

/**
 * @swagger
 * /api/getVenuePhotoById{id}:
 *   get:
 *     summary: Get venue photo by ID
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venue photo details
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
venuePhoto.get("/getVenuePhotoById:id", venuePhotoController.getVenuePhotoById);

/**
 * @swagger
 * /api/updateVenuePhoto{id}:
 *   put:
 *     summary: Update venue photo by ID
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Venue photo updated
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
venuePhoto.put("/updateVenuePhoto:id", venuePhotoController.updateVenuePhoto);

/**
 * @swagger
 * /api/deleteVenuePhoto{id}:
 *   delete:
 *     summary: Delete venue photo by ID
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Venue photo deleted
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
venuePhoto.delete("/deleteVenuePhoto:id", venuePhotoController.deleteVenuePhoto);

module.exports = venuePhoto;
