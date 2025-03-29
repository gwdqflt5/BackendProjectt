const { District, Region } = require("../models");

exports.createDistrict = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const { name, region_id } = req.body;
    if (!name || !region_id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newDistrict = await District.create({ name, region_id });
    return res.status(201).json(newDistrict);
  } catch (error) {
    console.error("Error creating district:", error.message);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
exports.getDistricts = async (req, res) => {
  try {
    const districts = await District.findAll();
    return res.status(200).json(districts);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getDistrictById = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id, {
      include: [
        {
          model: Region,
          as: "region",
        },

      ],
    });
    if (!district) {
      return res.status(404).json({ message: "District not found" });
    }
    return res.status(200).json(district);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update district by ID
exports.updateDistrict = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, region_id } = req.body;

    const district = await District.findByPk(id);
    if (!district) {
      return res.status(404).json({ message: "District not found" });
    }

    district.name = name || district.name;
    district.region_id = region_id || district.region_id;
    await district.save();

    return res.status(200).json(district);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete district by ID
exports.deleteDistrict = async (req, res) => {
  try {
    const { id } = req.params;

    const district = await District.findByPk(id);
    if (!district) {
      return res.status(404).json({ message: "District not found" });
    }

    await district.destroy();
    return res.status(200).json({ message: "District deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
