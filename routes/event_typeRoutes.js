const express = require("express");
const router = express.Router();
const event_type_methodController = require("../controller/event_type.Controller"); // Yo‘lni tekshiring!

/**
 * @swagger
 * tags:
 *   name: Event_typeMethod
 *   description: API for managing event_type methods
 */

/**
 * @swagger
 * /api/createEvent_type:
 *   post:
 *     summary: Create a new event_type method
 *     tags: [Event_typeMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Express Event_type"
 *     responses:
 *       201:
 *         description: Successfully created event_type method
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/createEvent_type", event_type_methodController.createEvent_type);

/**
 * @swagger
 * /api/getEvent_type:
 *   get:
 *     summary: Get all event_type methods
 *     tags: [Event_typeMethod]
 *     responses:
 *       200:
 *         description: List of event_type methods
 *       500:
 *         description: Internal server error
 */
router.get("/getEvent_type", event_type_methodController.getEvent_type);

/**
 * @swagger
 * /api/getEvent_typeById/{id}:
 *   get:
 *     summary: Get a event_type method by ID
 *     tags: [Event_typeMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The event_type method ID
 *     responses:
 *       200:
 *         description: Event_type method found
 *       404:
 *         description: Event_type method not found
 *       500:
 *         description: Internal server error
 */
router.get("/getEvent_typeById/:id", event_type_methodController.getEvent_typeById);

/**
 * @swagger
 * /api/updateEvent_type/{id}:
 *   put:
 *     summary: Update a event_type method by ID
 *     tags: [Event_typeMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The event_type method ID
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
 *         description: Event_type method updated successfully
 *       404:
 *         description: Event_type method not found
 *       500:
 *         description: Internal server error
 */
router.put("/updateEvent_type/:id", event_type_methodController.updateEvent_type);

/**
 * @swagger
 * /api/deleteEvent_type/{id}:
 *   delete:
 *     summary: Delete a event_type method by ID
 *     tags: [Event_typeMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The event_type method ID
 *     responses:
 *       204:
 *         description: Event_type method deleted successfully
 *       404:
 *         description: Event_type method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteEvent_type/:id", event_type_methodController.deleteEvent_type);

module.exports = router;
