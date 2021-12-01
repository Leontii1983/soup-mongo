const express = require('express');
const newsController = require('./../controllers/newsController');

const { getAllNews, getNewsById, createNews, updateNews, deleteNews } = newsController;

const router = express.Router();

router
  .route('/')
  .get(getAllNews)
  .post(createNews);


  router
  .route('/:id')
  .get(getNewsById)
  .patch(updateNews)
  .delete(deleteNews);

  module.exports = router;