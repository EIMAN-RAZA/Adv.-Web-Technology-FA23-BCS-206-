const mongo=require('mongoose');
mongo.connect("mongodb://localhost:27017/DBlab");
const Courseschema=new mongo.Schema({
    name:String,
    duration:String
});

const course =mongo.model("course",Courseschema);
studentSchema= new mongo.Schema({
    name:String,
    age:Number,
    grade:String,
    enrolledCourse:{
        type:mongo.Schema.Types.ObjectId,ref:"course"
    }
});

const Student= mongo.model("student",studentSchema);

const newCourse=new course({
    name:"COMPUTER NETWORKING",
    duration:'6 months'
})
newCourse.save()
.then(course=>{
    const newStudent= new Student({
        name:"RAFAY ALI",
        age:20,
        grade:"A+",
        enrolledCourse:course._id
    });
    return newStudent.save();
})
.then(student=>{
    console.log("student with course:",student)
})
.catch(err=>{
    console.log(`erro: ${err}`)

    })


