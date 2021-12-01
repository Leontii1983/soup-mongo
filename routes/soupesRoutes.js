const express = require('express');
const soupeController = require('./../controllers/soupeController');

const { getAllSoupes, getSoupeById, createSoupe, updateSoupe, deleteSoupe } = soupeController;

const router = express.Router();

router
  .route('/')
  .get(getAllSoupes)
  .post(createSoupe);


  router
  .route('/:id')
  .get(getSoupeById)
  .patch(updateSoupe)
  .delete(deleteSoupe);

  module.exports = router;