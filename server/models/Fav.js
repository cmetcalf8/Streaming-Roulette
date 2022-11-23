const { Schema, Types } = require('mongoose');

const favSchema = new Schema(
  {
    favId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
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
