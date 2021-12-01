const mongoose = require('mongoose');
const slugify = require('slugify');

const soupeSchema = new mongoose.Schema({

    name : {
        type: String
    },
    weight:{
        type: Number
    },
    description:{
        type:  String
    },
    ingridients:{
        type: String
    },
        
    

});

const Soupe = mongoose.model('Soupe', soupeSchema);

module.exports = Soupe;