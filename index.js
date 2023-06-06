// import express from 'express';

// const app = express();
// app.use(express.json());

// app.get('/students',(req,res)=>{
//     const students = ["Yogita","Gauri","Sayali"];

//     res.json(students);
// })

// app.post('/student',(req,res)=>{

//     const name = req.body.name;
//     const roll = req.body.roll;


//     res.json({
//         status:'success',
//         message:`Student ${name} created with roll ${roll} `
//     });
// })

// app.listen(5000,()=>{
//     console.log("Listen on port 5000")
// })


import express from 'express';

const app = express();
app.use(express.json());

const students = [];

//GET /students

app.get('/students',(req,res)=>{
  res.json(students)
})

//POST /student
app.post('/student',(req,res)=>{
    const obj = {
        'name':req.body.name,
        'email':req.body.email,
        'roll':req.roll
    }

 students.push(obj);

res.json({
    success:true,
    message:'Student added successfully',
    data:obj
})

});

//GET /student?email=email
app.get('/student',(req,res)=>{
    const email = req.query.email;

    const student = students.map((s)=>{
        if(s.email === email)
        {
              return s;
        }
        return;
    })

    res.json({
        success:true,
        data:null
    })
})

app.listen(5000,()=>{
    console.log("Listen on port 5000")
})