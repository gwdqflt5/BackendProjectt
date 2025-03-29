const express = require("express");
const router = express.Router();
const countryController = require("../controller/countrty.controller");

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Shopping country management
 */

/**
 * @swagger
 * /api/createCountry:
 *   post:
 *     summary: Create a new shopping country
 *     tags: [Country]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *                 example: davlat
 *     responses:
 *       201:
 *         description: Country created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/createCountry", countryController.createCountry);

/**
 * @swagger
 * /api/getCountry:
 *   get:
 *     summary: Get all countrys
 *     tags: [Country]
 *     responses:
 *       200:
 *         description: List of countrys
 *       500:
 *         description: Server error
 */
router.get("/getCountry", countryController.getCountry);

/**
 * @swagger
 * /api/getCountryById/{id}:
 *   get:
 *     summary: Get a country by ID
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The country ID
 *     responses:
 *       200:
 *         description: Country details
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.get("/getCountryById/:id", countryController.getCountryById);

/**
 * @swagger
 * /api/updateCountry/{id}:
 *   put:
 *     summary: Update a country by ID
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The country ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
  *               country:
 *                 type: string
 *                 example: davlat
 *     responses:
 *       200:
 *         description: Country updated
 *       404:
 *         description: Country not found
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put("/updateCountry/:id", countryController.updateCountry);

/**
 * @swagger
 * /api/deleteCountry/{id}:
 *   delete:
 *     summary: Delete a country by ID
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The country ID
 *     responses:
 *       200:
 *         description: Country deleted
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.delete("/deleteCountry/:id", countryController.deleteCountry);

module.exports = router;
