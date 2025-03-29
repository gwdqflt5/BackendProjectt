const express = require("express");
const router = express.Router();
const langController = require("../controller/lang.Controller");

/**
 * @swagger
 * tags:
 *   name: LangMethod
 *   description: API for managing lang methods
 */

/**
 * @swagger
 * /api/createLang:
 *   post:
 *     summary: Create a new lang method
 *     tags: [LangMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Express Lang"
 *     responses:
 *       201:
 *         description: Successfully created lang method
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/createLang", langController.createLang);

/**
 * @swagger
 * /api/getLang:
 *   get:
 *     summary: Get all lang methods
 *     tags: [LangMethod]
 *     responses:
 *       200:
 *         description: List of lang methods
 *       500:
 *         description: Internal server error
 */
router.get("/getLang", langController.getLang);

/**
 * @swagger
 * /api/getLangById/{id}:
 *   get:
 *     summary: Get a lang method by ID
 *     tags: [LangMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The lang method ID
 *     responses:
 *       200:
 *         description: Lang method found
 *       404:
 *         description: Lang method not found
 *       500:
 *         description: Internal server error
 */
router.get("/getLangById/:id", langController.getLangById);

/**
 * @swagger
 * /api/updateLang/{id}:
 *   put:
 *     summary: Update a lang method by ID
 *     tags: [LangMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The lang method ID
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
 *         description: Lang method updated successfully
 *       404:
 *         description: Lang method not found
 *       500:
 *         description: Internal server error
 */
router.put("/updateLang/:id", langController.updateLang);

/**
 * @swagger
 * /api/deleteLang/{id}:
 *   delete:
 *     summary: Delete a lang method by ID
 *     tags: [LangMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The lang method ID
 *     responses:
 *       204:
 *         description: Lang method deleted successfully
 *       404:
 *         description: Lang method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteLang/:id", langController.deleteLang);

module.exports = router;
