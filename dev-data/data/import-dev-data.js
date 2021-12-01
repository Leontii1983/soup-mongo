const fs = require('fs');

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Course = require('./../../models/courseModel');

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log('DB connection successful!');
})

//READ JSON FILE
//console.log(fs.readFileSync(`${__dirname}/test.json`, 'utf-8'));
const course = JSON.parse(fs.readFileSync(`${__dirname}/test.json`, 'utf-8'));

//IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Course.create(course);
    console.log('Data successfuly loaded!');
  } catch(err) {
    console.log(err);
  }
  process.exit();
}

//DELETE ALL DATA FROM COllECTION
const deleteData = async () => {
  try {
    await Course.deleteMany();
    console.log('Data successfuly deleted!');
    
  } catch(err) {
    console.log(err);
  }
  process.exit();
}

if(process.argv[2] === '--import') {
  importData();
} else if(process.argv[2] === '--delete') {
  deleteData();
}

