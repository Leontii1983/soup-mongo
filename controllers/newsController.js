const News = require('./../models/newsModel');


const APIFeatures = require('./../utils/apiFeatures');


exports.getAllNews = async (req, res) => {

 try {
   
   //EXECUTE QUERY
   const features = new APIFeatures(News.find(), req.query)
   .filter()
   .sort()
   .limitFields()
   .pagination();

   const news = await features.query;

  //SEND RESPONSE
  res.status(200).json({
    status: 'success',
    result: news.length,
    data: {
      news
    }
  });
 } catch(err) {
   res.status(404).json({
     status: 'fail',
     message: err
   })
 }
};

exports.getNewsById = async (req, res) => {
  
  try {
    const news = await News.findById(req.params.id)
    res.status(200).json({
    status: 'success',
    data: {
      news
    }
  });
  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }

  
};

exports.createNews = async (req, res) => {
  try {
    const news = await News.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      news: news
    }
  });

  } catch(err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!'
    })
  }

};

exports.updateNews = async (req, res) => {
  try {
    const news = await New.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'success',
      data: {
        news
      }
    })

  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
      
    })
  }

  
};

exports.deleteNews = async (req, res) => {
  try {
    const soupe = await News.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    })
  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
      
    })

  }
   
};

