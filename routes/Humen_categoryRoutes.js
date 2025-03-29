const express = require("express");
const router = express.Router();
const human_categoryController = require("../controller/human_category.Controller");

/**
 * @swagger
 * tags:
 *   name: Humen_categoryMethod
 *   description: API for managing humen_category methods
 */

/**
 * @swagger
 * /api/createHumen_category:
 *   post:
 *     summary: Create a new humen_category method
 *     tags: [Humen_categoryMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Express Humen_category"
 *     responses:
 *       201:
 *         description: Successfully created humen_category method
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/createHumen_category", human_categoryController.createHumen_category);

/**
 * @swagger
 * /api/getHumen_category:
 *   get:
 *     summary: Get all humen_category methods
 *     tags: [Humen_categoryMethod]
 *     responses:
 *       200:
 *         description: List of humen_category methods
 *       500:
 *         description: Internal server error
 */
router.get("/getHumen_category", human_categoryController.getHumen_category);

/**
 * @swagger
 * /api/getHumen_categoryById/{id}:
 *   get:
 *     summary: Get a humen_category method by ID
 *     tags: [Humen_categoryMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The humen_category method ID
 *     responses:
 *       200:
 *         description: Humen_category method found
 *       404:
 *         description: Humen_category method not found
 *       500:
 *         description: Internal server error
 */
router.get("/getHumen_categoryById/:id", human_categoryController.getHumen_categoryById);

/**
 * @swagger
 * /api/updateHumen_category/{id}:
 *   put:
 *     summary: Update a humen_category method by ID
 *     tags: [Humen_categoryMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The humen_category method ID
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
 *         description: Humen_category method updated successfully
 *       404:
 *         description: Humen_category method not found
 *       500:
 *         description: Internal server error
 */
router.put("/updateHumen_category/:id", human_categoryController.updateHumen_category);

/**
 * @swagger
 * /api/deleteHumen_category/{id}:
 *   delete:
 *     summary: Delete a humen_category method by ID
 *     tags: [Humen_categoryMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The humen_category method ID
 *     responses:
 *       204:
 *         description: Humen_category method deleted successfully
 *       404:
 *         description: Humen_category method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteHumen_category/:id", human_categoryController.deleteHumen_category);

module.exports = router;
