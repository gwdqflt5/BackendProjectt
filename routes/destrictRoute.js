const express = require("express");
const district = express.Router();
const districtController = require("../controller/district.controller");

/**
 * @swagger
 * tags:
 *   name: Districts
 *   description: District management API
 */

/**
 * @swagger
 * /api/districts:
 *   post:
 *     summary: Create a new district
 *     tags: [Districts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: District created
 *       500:
 *         description: Server error
 */
district.post("/", districtController.createDistrict);

/**
 * @swagger
 * /api/districts:
 *   get:
 *     summary: Get all districts
 *     tags: [Districts]
 *     responses:
 *       200:
 *         description: List of districts
 *       500:
 *         description: Server error
 */
district.get("/", districtController.getDistricts);

/**
 * @swagger
 * /api/districts/{id}:
 *   get:
 *     summary: Get district by ID
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: District details
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
district.get("/:id", districtController.getDistrictById);

/**
 * @swagger
 * /api/districts/{id}:
 *   put:
 *     summary: Update district by ID
 *     tags: [Districts]
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
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: District updated
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
district.put("/:id", districtController.updateDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   delete:
 *     summary: Delete district by ID
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: District deleted
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
district.delete("/:id", districtController.deleteDistrict);

module.exports = district;
