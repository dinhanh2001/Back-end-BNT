const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const ObjectId = mongoose.SchemaTypes.ObjectId

const commentSchema = mongoose.Schema(
  {
		user: {
			type: ObjectId,
			required: true,
			trim: true,
		},
		content: {
			type: String,
			required: true,
			trim: true,
		},
		postId: {
			type: ObjectId,
			required: true,
			trim: true,
		},
		type: {
			type: String,
			required: true,
			trim: true,
			default: 'hide',
			enum: "hide, show"
		},
	},
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);
commentSchema.plugin(paginate);

/**
 * @typedef Comment
 */
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
