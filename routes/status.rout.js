
const express = require("express");
const router = express.Router();
const statusController = require("../controller/status.controller");

/**
 * @swagger
 * tags:
 *   name: StatusMethod
 *   description: API for managing ticket_status methods
 */

/**
 * @swagger
 * /api/createStatus:
 *   post:
 *     summary: Create a new ticket_status method
 *     tags: [StatusMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: "Express Status"
 *     responses:
 *       201:
 *         description: Successfully created ticket_status method
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

router.post("/createStatus", statusController.createStatus);

/**
 * @swagger
 * /api/getStatus:
 *   get:
 *     summary: Get all ticket_status methods
 *     tags: [StatusMethod]
 *     responses:
 *       200:
 *         description: List of ticket_status methods
 *       500:
 *         description: Internal server error
 */
router.get("/getStatus", statusController.getStatus);
/**
 * @swagger
 * /api/getStatusById/{id}:
 *   get:
 *     summary: Get a ticket_status method by ID
 *     tags: [StatusMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket_status method ID
 *     responses:
 *       200:
 *         description: Status method found
 *       404:
 *         description: Status method not found
 *       500:
 *         description: Internal server error
 */
router.get("/getStatusById/:id", statusController.getStatusById);

/**
 * @swagger
 * /api/updateStatus/{id}:
 *   put:
 *     summary: Update a ticket_status method by ID
 *     tags: [StatusMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket_status method ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: "Standard Shipping"
 *     responses:
 *       200:
 *         description: Status method updated successfully
 *       404:
 *         description: Status method not found
 *       500:
 *         description: Internal server error
 */
router.put("/updateStatus/:id", statusController.updateStatus);

/**
 * @swagger
 * /api/deleteStatus/{id}:
 *   delete:
 *     summary: Delete a ticket_status method by ID
 *     tags: [StatusMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket_status method ID
 *     responses:
 *       204:
 *         description: Status method deleted successfully
 *       404:
 *         description: Status method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteStatus/:id", statusController.deleteStatus);

module.exports = router;
