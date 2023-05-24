const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const booksSchema = mongoose.Schema(
  {
		maSach: {
			type: String,
			required: true,
			trim: true,
			unique: true
		},
		ten: {
			type: String,
			required: true,
			trim: true,
		},
		gia: {
			type: Number,
			required: true,
			trim: true,
		},
		nxb: {
			type: String,
			required: true,
			trim: true,
		},
	},
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
booksSchema.plugin(toJSON);
booksSchema.plugin(paginate);

/**
 * @typedef Books
 */
const Books = mongoose.model('Books', booksSchema);

module.exports = Books;
