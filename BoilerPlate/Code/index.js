const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://moons:abcd2345@muncluster.d9qtz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false
    // 추후 에러 방지하는 효과
}).then(()=>console.log('MongoDB Connected..'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {res.send('Hello World!')})

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})


