const express = require('express')
const cors = require("cors");

const app = express();
app.use(cors())
const port = 5000;














const customers  = [
    {name:'Hindi',id:1},
    {name:'C',id:2},
    {name:'Node',id:3}
]





app.get('/api/customer',(req,res) => {
    res.send(customers)

})

app.listen(port , () => console.log(`Server started at ${port}`));