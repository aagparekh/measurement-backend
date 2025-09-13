const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    customer_name: {
      type: String,
      required: true,
    },
    customer_measurement: {
      chest: {
        type: Number,
        default: 0,
        // required: true
      },
      under_chest: {
        type: Number,
        default: 0,
        // required: true
      },
      upper_chest: {
        type: Number,
        default: 0,
      },
      stomach: {
        type: Number,
        default: 0,
      },
      dart_point: {
        type: Number,
        default: 0,
      },
      sleeves_len: {
        type: Number,
        default: 0,
      },
      upper_sleeves: {
        type: Number,
        default: 0,
      },
      lower_sleeves: {
        type: Number,
        default: 0,
      },
      neck_deep: {
        type: Number,
        default: 0,
      },
      shoulder: {
        type: Number,
        default: 0,
      },
      yoke_len: {
        type: Number,
        default: 0,
      },
      top_len: {
        type: Number,
        default: 0,
      },
      plazo_len: {
        type: Number,
        default: 0,
      },
      waist: {
        type: Number,
        default: 0,
      },
      hip: {
        type: Number,
        default: 0,
      },
      thigh: {
        type: Number,
        default: 0,
      },
      knee: {
        type: Number,
        default: 0,
      },
      armhole: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
