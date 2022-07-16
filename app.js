const express=require("express");
const CourseData=require('./src/model/CourseData');
const app= express();
app.use(express.json());
app.use(express.urlencoded({extented:true}));
// courseList=[
//     {
//     "courseTitle":"React",
//     "courseDescription":"React Course",
//     "courseDuration":"4 Months",
//     "courseDat":"2022-05-06",
//     "courseVenue":"ONLINE"
//     },
//     {
//         "courseTitle":"React",
//         "courseDescription":"React Course",
//         "courseDuration":"8 Months",
//         "courseDat":"2022-07-06",
//         "courseVenue":"ONLINE"
//     },
//     {
//         "courseTitle":"Angular",
//         "courseDescription":"Angular Course",
//         "courseDuration":"12 Months",
//         "courseDat":"2022-07-06",
//         "courseVenue":"ONLINE"
//     },
//     {
//         "courseTitle":"Javascript",
//         "courseDescription":"Javascript Course",
//         "courseDuration":"6 Months",
//         "courseDat":"2022-07-06",
//         "courseVenue":"PHYSICAL"
//     }
// ];

// app.get('/getcourses',function(req,res){
//     res.send(courseList);
// });
// app.post('/addcourse',function(req,res){

//    console.log(req.body);
//    courseList.push(req.body);
//    res.status(200).send(courseList); 
// });

app.get('/getcourses',function(req,res){

    CourseData.find().then(function(courses){
        console.log(courses);
        res.send(courses);
    })
})

app.post('/addcourse',function(req,res){

    var item={
        courseTitle:req.body.courseTitle,
        courseDescription:req.body.courseDescription,
        courseVenue:req.body.courseVenue,
        courseDuration:req.body.courseDuration,
        courseDat:req.body.courseDat
    }
    var course=CourseData(item);
    course.save();

    CourseData.find()
    .then(function(course){
        res.send(course);
    });
})






app.listen(3000);
console.log("Server Ready");