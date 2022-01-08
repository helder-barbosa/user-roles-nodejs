const express = require('express')
const app = express()
const { authPage, authCourse } = require('./middleware')

app.use(express.json())

app.get('/home', (req, res) => {
  res.json("Home Page")
})

app.get('/course/grades', authPage(['teacher', 'admin']), (req, res) => {
  res.json({
    Jack: 95,
    Anna: 100,
    Mike: 85,
    Frank: 75,
    Rose: 85
  })
})

app.get('/course/:number', authCourse, (req, res) => {
  const courseNumber = req.params.number
  res.json(`You Have Permission to see Course ${courseNumber}`)
})

app.listen(3001, () => {
  console.log('Server Running...')
})