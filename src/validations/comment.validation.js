const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createComment = {
  body: Joi.object().keys(
      {
		user: Joi.string().custom(objectId),
		content: Joi.string(),
		postId: Joi.string(),
		type: Joi.string(),
	}
  ),
};

const getComments = {
  query: Joi.object().keys(
      {
		user: Joi.object(),
		content: Joi.string(),
		postId: Joi.string(),
		type: Joi.string(),
	}
  ),
};

const getComment = {
  params: Joi.object().keys({
    commentId: Joi.string().custom(objectId),
  }),
};

const updateComment = {
  params: Joi.object().keys({
    commentId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
		user: Joi.string().custom(objectId),
		content: Joi.string(),
		postId: Joi.string(),
		type: Joi.string(),
	})
    .min(1),
};

const deleteComment = {
  params: Joi.object().keys({
    commentId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
};
