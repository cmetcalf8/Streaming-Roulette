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
      maxlength: 50,
      minlength: 4,
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
