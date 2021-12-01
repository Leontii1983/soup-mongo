const Soupe = require('./../models/soupeModel');


const APIFeatures = require('./../utils/apiFeatures');


exports.getAllSoupes = async (req, res) => {

 try {
   
   //EXECUTE QUERY
   const features = new APIFeatures(Soupe.find(), req.query)
   .filter()
   .sort()
   .limitFields()
   .pagination();

   const soupes = await features.query;

  //SEND RESPONSE
  res.status(200).json({
    status: 'success',
    result: soupes.length,
    data: {
      soupes
    }
  });
 } catch(err) {
   res.status(404).json({
     status: 'fail',
     message: err
   })
 }
};

exports.getSoupeById = async (req, res) => {
  
  try {
    const soupe = await Soupe.findById(req.params.id)
    res.status(200).json({
    status: 'success',
    data: {
      soupe
    }
  });
  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }

  
};

exports.createSoupe = async (req, res) => {
  try {
    const newSoupe = await Soupe.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      soupes: newSoupe
    }
  });

  } catch(err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!'
    })
  }

};

exports.updateSoupe = async (req, res) => {
  try {
    const soupe = await Soupe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'success',
      data: {
        soupe
      }
    })

  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
      
    })
  }

  
};

exports.deleteSoupe = async (req, res) => {
  try {
    const soupe = await Soupe.findByIdAndDelete(req.params.id);
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

