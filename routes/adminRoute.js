const express = require("express");
const admin = express.Router();
const adminController = require("../controller/admin.controller");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management
 */

/**
 * @swagger
 * /api/createAdmin:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin created
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
admin.post("/createAdmin", adminController.createAdmin);

/**
 * @swagger
 * /api/getAdmins:
 *   get:
 *     summary: Get a list of all admins
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: A list of admins
 *       500:
 *         description: Server error
 */
admin.get("/getAdmins", adminController.getAdmins);

/**
 * @swagger
 * /api/getAdminById{id}:
 *   get:
 *     summary: Get an admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The admin ID
 *     responses:
 *       200:
 *         description: Admin details
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
admin.get("/getAdminById:id", adminController.getAdminById);

/**
 * @swagger
 * /api/updateAdmin{id}:
 *   put:
 *     summary: Update an admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The admin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Admin updated
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
admin.put("/updateAdmin:id", adminController.updateAdmin);

/**
 * @swagger
 * /api/deleteAdmin{id}:
 *   delete:
 *     summary: Delete an admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The admin ID
 *     responses:
 *       200:
 *         description: Admin deleted
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
admin.delete("/deleteAdmin:id", adminController.deleteAdmin);

module.exports = admin;
