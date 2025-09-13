const express = require("express");

const {
  createCustomerMeasurement,
  getSpecificCustomerMeasurement,
  updateCustomerMeasurement,
  deleteCustomerMeasurement,
  getAllCustomerMeasurement,
  getCustomerMeasurementById,
} = require("../controllers/customerControllers");

const router = express.Router();

// Add Measurement
router.post("/", createCustomerMeasurement);

// Get specfic customer measurement
router.get("/search", getSpecificCustomerMeasurement);

// Get all customer measurements
router.get("/", getAllCustomerMeasurement);

// Get customer measurement by id
router.get("/:id", getCustomerMeasurementById);

// Update Measurement
router.put("/:id", updateCustomerMeasurement);

// Delete Measurement
router.delete("/:id", deleteCustomerMeasurement);

module.exports = router;
