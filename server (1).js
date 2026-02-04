const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from the backend!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/about', (req, res) => {
    res.send('learnig backend')
})

app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: "Babacar" },
        { id: 2, name: "Gueye" }
    ])
})


app.post('/api/login', (req, res) => {
    if((req.body.email = "test@example.com") &&
        (req.body.password = "123456")
    ){
         res.json({"message": "Login successful"})
    }
    else{
        res.json({"message": "Check again your mail or your password"})
    }
})

const user = {
    email: "admin@test.com",
    password: "admin123"
};

app.post('/api/login', (req, res) => {
    if((req.body.email = "admin@test.com") &&
    (req.body.password = "admin123")){
        res.status(200).json({ message: "Login successful " })
    }
    else{
        res.status(401).json({ message: "Invalid credentials" })
    }
})