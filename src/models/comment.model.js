const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const commentSchema = mongoose.Schema(
  {

    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim : true
    },
    postsId : {
        type: mongoose.SchemaTypes.ObjectId,
        required:true
    }

  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Token = mongoose.model('Comment', commentSchema);

module.exports = Token;
