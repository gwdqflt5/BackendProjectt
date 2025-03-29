const express = require("express");
const router = express.Router();
const flatController = require("../controller/flat.controller");

/**
 * @swagger
 * tags:
 *   name: Flat
 *   description: Flat management
 */

/**
 * @swagger
 * /api/createFlat:
 *   post:
 *     summary: Create a new flat
 *     tags: [Flat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: number
 *               condition:
 *                  type: string
 *     responses:
 *       201:
 *         description: Flat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/createFlat", flatController.createFlat);

/**
 * @swagger
 * /api/getFlats:
 *   get:
 *     summary: Get a list of all flats
 *     tags: [Flat]
 *     responses:
 *       200:
 *         description: A list of flats
 *       500:
 *         description: Server error
 */
router.get("/getFlats", flatController.getFlats);

/**
 * @swagger
 * /api/getFlatById/{id}:
 *   get:
 *     summary: Get a flat by ID
 *     tags: [Flat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The flat ID
 *     responses:
 *       200:
 *         description: Flat details
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.get("/getFlatById/:id", flatController.getFlatById);

/**
 * @swagger
 * /api/updateFlat/{id}:
 *   put:
 *     summary: Update a flat by ID
 *     tags: [Flat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The flat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: number
 *               condition:
 *                  type: string
 *     responses:
 *       200:
 *         description: Flat updated
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.put("/updateFlat/:id", flatController.updateFlat);

/**
 * @swagger
 * /api/deleteFlat/{id}:
 *   delete:
 *     summary: Delete a flat by ID
 *     tags: [Flat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The flat ID
 *     responses:
 *       204:
 *         description: Flat deleted
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.delete("/deleteFlat/:id", flatController.deleteFlat);

module.exports = router;
