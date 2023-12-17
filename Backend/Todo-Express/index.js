const express = require('express')
var multer = require('multer')

var app = express()
var upload = multer()

app.use([upload.array(), express.json()])

var tasks = [
    'wake up',
    'eat breakfast',
    'code all day',
    'sleep'
]

app.get('/tasks', (req, res)=>{
    res.json(tasks)
})

app.post('/tasks',(req,res)=>{
    var newTasks = req.body
    tasks.push(newTasks.task);
    res.json(tasks);
})

app.put('/tasks/:id', (req, res)=>{
    var id = req.params.id;
    var updatedTask = req.body.task;
    tasks[id] = updatedTask;
    res.json(tasks)
})

app.listen(3100, ()=>{
    console.log("Server running on port 3100!")
})