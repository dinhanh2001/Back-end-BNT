const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createBooks = {
  body: Joi.object().keys(
      {
		maSach: Joi.string(),
		ten: Joi.string(),
		gia: Joi.number(),
		nxb: Joi.string(),
	}
  ),
};

const getBooks = {
  query: Joi.object().keys(
      {
		maSach: Joi.string(),
		ten: Joi.string(),
		gia: Joi.number(),
		nxb: Joi.string(),
	}
  ),
};

const getBook = {
  params: Joi.object().keys({
    booksId: Joi.string().custom(objectId),
  }),
};

const searchBook = {
  params: Joi.object().keys({
    maSach: Joi.string(),
		ten: Joi.string(),
		gia: Joi.number(),
		nxb: Joi.string(),
  })
}
const updateBooks = {
  params: Joi.object().keys({
    booksId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
		maSach: Joi.string(),
		ten: Joi.string(),
		gia: Joi.number(),
		nxb: Joi.string(),
	})
    .min(1),
};

const deleteBooks = {
  params: Joi.object().keys({
    booksId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createBooks,
  getBooks,
  getBook,
  updateBooks,
  deleteBooks,
  searchBook,
};
