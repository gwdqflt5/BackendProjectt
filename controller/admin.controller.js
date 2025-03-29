const { Admin } = require("../models");
const { validateAdmin } = require("../validations/adminValidation");

exports.createAdmin = async (req, res) => {
  try {
    const { error } = validateAdmin(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const newAdmin = await Admin.create(req.body);
    return res.status(201).json(newAdmin);
  } catch (error) {
    console.error("Error creating admin:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    return res.status(200).json(admins);
  } catch (error) {
    console.error("Error fetching admins:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    return res.status(200).json(admin);
  } catch (error) {
    console.error("Error fetching admin by ID:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateAdmin = async (req, res) => {
  try {
    const { error } = validateAdmin(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    await admin.update(req.body);
    return res.status(200).json(admin);
  } catch (error) {
    console.error("Error updating admin:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    await admin.destroy();
    return res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error("Error deleting admin:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
