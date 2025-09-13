const Customer = require("../models/Customer");
// Add Customer Measurement
const createCustomerMeasurement = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).send(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get specfic customer measurement
const getSpecificCustomerMeasurement = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ error: "Customer name is required" });
    }

    const customers = await Customer.find({
      customer_name: { $regex: name, $options: "i" },
    });

    if (customers.length == 0) {
      return res.status(404).json({ error: "Customer not found" });
    }

    return res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all customer measurements
const getAllCustomerMeasurement = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get customer measurement by id
const getCustomerMeasurementById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Measurement
const updateCustomerMeasurement = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      {
        $set: {
          customer_measurement: req.body.customer_measurement,
          customer_name: req.body.customer_name,
        },
      },
      {
        new: true,
      }
    );

    if (!updatedCustomer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Measurement
const deleteCustomerMeasurement = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    if (!deletedCustomer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.status(200).json(deletedCustomer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCustomerMeasurement,
  getSpecificCustomerMeasurement,
  updateCustomerMeasurement,
  getAllCustomerMeasurement,
  getCustomerMeasurementById,
  deleteCustomerMeasurement,
};
