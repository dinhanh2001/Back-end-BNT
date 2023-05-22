const httpStatus = require('http-status');
const { Books } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a books
 * @param {Object} booksBody
 * @returns {Promise<Books>}
 */
const createBooks = async (booksBody) => {
  const books = await Books.create(booksBody);
  return books;
};

/**
 * Query for bookss
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryBookss = async (filter, options) => {
  const bookss = await Books.paginate(filter, options);
  return bookss;
};

/**
 * Get books by id
 * @param {ObjectId} id
 * @returns {Promise<Books>}
 */
const getBooksById = async (id) => {
  return Books.findById(id);
};

const searchBook = async(param) => {
  console.log(param);
  const books = Books.find(param)
  return books;
}
/**
 * Update books by id
 * @param {ObjectId} booksId
 * @param {Object} updateBody
 * @returns {Promise<Books>}
 */
const updateBooksById = async (booksId, updateBody) => {
  const books = await getBooksById(booksId);
  if (!books) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Books not found');
  }
  Object.assign(books, updateBody);
  await books.save();
  return books;
};

/**
 * Delete books by id
 * @param {ObjectId} booksId
 * @returns {Promise<Books>}
 */
const deleteBooksById = async (booksId) => {
  const books = await getBooksById(booksId);
  if (!books) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Books not found');
  }
  await books.remove();
  return books;
};

module.exports = {
  createBooks,
  queryBookss,
  getBooksById,
  updateBooksById,
  deleteBooksById,
  searchBook,
};
