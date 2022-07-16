const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://Nav-ee-n:boxergiant6996@cluster0.myc0x.mongodb.net/CourseDB?retryWrites=true&w=majority')
const Schema=mongoose.Schema;
const CourseSchema=new Schema({courseTitle:String,
  courseDescription:String,
  courseDuration:String,
  courseDat:String,
  courseVenue:String});

  var CourseData=mongoose.model("courseset",CourseSchema);
  module.exports=CourseData;