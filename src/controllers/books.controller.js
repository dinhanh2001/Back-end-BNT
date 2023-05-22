const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { booksService } = require('../services');

const createBooks = catchAsync(async (req, res) => {
  const books = await booksService.createBooks(req.body);
  res.status(httpStatus.CREATED).send(books);
});

const getBooks = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['maSach', 'ten', 'gia', 'nxb']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await booksService.queryBookss(filter, options);
  res.send(result);
});

const getBook = catchAsync(async (req, res) => {
  const books = await booksService.getBooksById(req.params.booksId);
  if (!books) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Books not found');
  }
  res.send(books);
});

const searchBook = catchAsync(async (req, res) => {
  // console.log(req);
  const books = await booksService.searchBook(req.query);
  res.send(books);
})
const updateBooks = catchAsync(async (req, res) => {
  const books = await booksService.updateBooksById(req.params.booksId, req.body);
  res.send(books);
});

const deleteBooks = catchAsync(async (req, res) => {
  await booksService.deleteBooksById(req.params.booksId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createBooks,
  getBooks,
  getBook,
  updateBooks,
  deleteBooks,
  searchBook,
};
