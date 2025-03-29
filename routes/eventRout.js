const express = require("express");
const router = express.Router();
const eventController = require("../controller/event.controller");

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Event management
 */

/**
 * @swagger
 * /api/createEvent:
 *   post:
 *     summary: Create a new event
 *     tags: [Event]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               start_time:
 *                 type: string
 *                 format: time
 *               finish_date:
 *                 type: string
 *                 format: date
 *               finish_time:
 *                 type: string
 *                 format: time
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: integer
 *               human_category_id:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Event created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/createEvent", eventController.createEvent);

/**
 * @swagger
 * /api/getEvents:
 *   get:
 *     summary: Get a list of all events
 *     tags: [Event]
 *     responses:
 *       200:
 *         description: A list of events
 *       500:
 *         description: Server error
 */
router.get("/getEvents", eventController.getEvents);

/**
 * @swagger
 * /api/getEventById/{id}:
 *   get:
 *     summary: Get an event by ID
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The event ID
 *     responses:
 *       200:
 *         description: Event details
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.get("/getEventById/:id", eventController.getEventById);

/**
 * @swagger
 * /api/updateEvent/{id}:
 *   put:
 *     summary: Update an event by ID
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               start_time:
 *                 type: string
 *                 format: time
 *               finish_date:
 *                 type: string
 *                 format: date
 *               finish_time:
 *                 type: string
 *                 format: time
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: integer
 *               human_category_id:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Event updated
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.put("/updateEvent/:id", eventController.updateEvent);

/**
 * @swagger
 * /api/deleteEvent/{id}:
 *   delete:
 *     summary: Delete an event by ID
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The event ID
 *     responses:
 *       200:
 *         description: Event deleted
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.delete("/deleteEvent/:id", eventController.deleteEvent);

module.exports = router;
