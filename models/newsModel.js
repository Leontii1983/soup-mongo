const mongoose = require('mongoose');
const slugify = require('slugify');

const newsSchema = new mongoose.Schema({

    name : {
        type: String
    },
    description:{
        type: Number
    },
   
    images:{
        type: String
    },
    date:{
        type: String
    },
        
    

});

const News = mongoose.model('News', newsSchema);

module.exports = News;