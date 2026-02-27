//==============lab 03==================
// Activity 04
const mongose = require ('mongoose')
mongose.connect('mongodb://localhost:27017/university') // connecting string
.then(()=>{console.log("Database is Connected")})
.catch(err=>{console.log("error"),err})

const studentSchema = new mongose.Schema({
    name:{ type: String, required: true},
    age:{type: Number, required: true, min:18, max:60},
    grade:{type:String, required:true}
});
const Student=mongose.model('student',studentSchema);
const newStudent = new Student({
    name:"Eiman",
    age:20,
    grade: 'A'
});
newStudent.save()
.then(() => console.log('Student saved!'))
.catch(err => console.log('Validation Error:', err));







