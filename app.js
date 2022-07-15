const express=require("express");
const app= express();
courseList=[
    {
    "courseTitle":"React",
    "courseDescription":"React Course",
    "courseDuration":"4 Months",
    "courseDat":"2022-05-06",
    "courseVenue":"ONLINE"
    },
    {
        "courseTitle":"React",
        "courseDescription":"React Course",
        "courseDuration":"8 Months",
        "courseDat":"2022-07-06",
        "courseVenue":"ONLINE"
    },
    {
        "courseTitle":"Angular",
        "courseDescription":"Angular Course",
        "courseDuration":"12 Months",
        "courseDat":"2022-07-06",
        "courseVenue":"ONLINE"
    },
    {
        "courseTitle":"Javascript",
        "courseDescription":"Javascript Course",
        "courseDuration":"6 Months",
        "courseDat":"2022-07-06",
        "courseVenue":"PHYSICAL"
    }
]

app.get('/getcourses',function(req,res){
    res.send(courseList);
})
app.post('/addcourse',function(req,res){
    
})
app.listen(3000);