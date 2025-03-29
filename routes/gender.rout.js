const express = require("express");
const router = express.Router();
const genderController = require("../controller/gender.controller");

/**
 * @swagger
 * tags:
 *   name: Gender
 *   description: API for managing gender methods
 */

/**
 * @swagger
 * /api/createGender:
 *   post:
 *     summary: Create a new gender method
 *     tags: [GenderMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Gender Example"
 *     responses:
 *       201:
 *         description: Successfully created gender method
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/createGender", genderController.createGender);

/**
 * @swagger
 * /api/getGender:
 *   get:
 *     summary: Get all gender methods
 *     tags: [GenderMethod]
 *     responses:
 *       200:
 *         description: List of gender methods
 *       500:
 *         description: Internal server error
 */
router.get("/getGender", genderController.getGender);

/**
 * @swagger
 * /api/getGenderById/{id}:
 *   get:
 *     summary: Get a gender method by ID
 *     tags: [GenderMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The gender method ID
 *     responses:
 *       200:
 *         description: Gender method found
 *       404:
 *         description: Gender method not found
 *       500:
 *         description: Internal server error
 */
router.get("/getGenderById/:id", genderController.getGenderById);

/**
 * @swagger
 * /api/updateGender/{id}:
 *   put:
 *     summary: Update a gender method by ID
 *     tags: [GenderMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The gender method ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Gender"
 *     responses:
 *       200:
 *         description: Gender method updated successfully
 *       404:
 *         description: Gender method not found
 *       500:
 *         description: Internal server error
 */
router.put("/updateGender/:id", genderController.updateGender);

/**
 * @swagger
 * /api/deleteGender/{id}:
 *   delete:
 *     summary: Delete a gender method by ID
 *     tags: [GenderMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The gender method ID
 *     responses:
 *       204:
 *         description: Gender method deleted successfully
 *       404:
 *         description: Gender method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteGender/:id", genderController.deleteGender);

module.exports = router;
