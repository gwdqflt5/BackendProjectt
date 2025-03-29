const express = require("express");
const router = express.Router();
const regionController = require("../controller/region.Controller");

/**
 * @swagger
 * tags:
 *   name: RegionMethod
 *   description: api for managing region methods
 */

/**
 * @swagger
 * /api/createRegion:
 *   post:
 *     summary: Create a new region method
 *     tags: [RegionMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Express Region"
 *     responses:
 *       201:
 *         description: Successfully created region method
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/createRegion", regionController.createRegion);

/**
 * @swagger
 * /api/getRegion:
 *   get:
 *     summary: Get all region methods
 *     tags: [RegionMethod]
 *     responses:
 *       200:
 *         description: List of region methods
 *       500:
 *         description: Internal server error
 */
router.get("/getRegion", regionController.getRegion);

/**
 * @swagger
 * /api/getRegionById/{id}:
 *   get:
 *     summary: Get a region method by ID
 *     tags: [RegionMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The region method ID
 *     responses:
 *       200:
 *         description: Region method found
 *       404:
 *         description: Region method not found
 *       500:
 *         description: Internal server error
 */
router.get("/getRegionById/:id", regionController.getRegionById);

/**
 * @swagger
 * /api/updateRegion/{id}:
 *   put:
 *     summary: Update a region method by ID
 *     tags: [RegionMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The region method ID
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
 *         description: Region method updated successfully
 *       404:
 *         description: Region method not found
 *       500:
 *         description: Internal server error
 */
router.put("/updateRegion/:id", regionController.updateRegion);

/**
 * @swagger
 * /api/deleteRegion/{id}:
 *   delete:
 *     summary: Delete a region method by ID
 *     tags: [RegionMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The region method ID
 *     responses:
 *       204:
 *         description: Region method deleted successfully
 *       404:
 *         description: Region method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteRegion/:id", regionController.deleteRegion);

module.exports = router;
