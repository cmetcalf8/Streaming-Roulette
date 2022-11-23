const { Schema, Types } = require('mongoose');

const favSchema = new Schema(
  {
    favTitle: {
      type: String,
      required: true,
      default: 'Unnamed favorite',
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = favSchema;
