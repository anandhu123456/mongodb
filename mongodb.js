const mongoose = require('mongoose');

let mongodb_url="mongodb+srv://anandhu:harikannan@anandhu.1z1yyza.mongodb.net/firstdb?retryWrites=true&w=majority&appName=anandhu"
let compass_url='mongodb://localhost:27017/sampledb'

mongoose.connect(compass_url).then(()=>{
    console.log(("db connected"))
})
.catch((err)=>{
    console.log(err);
});