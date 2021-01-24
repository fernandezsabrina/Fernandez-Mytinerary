const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Database Connected"))
.catch(error => console.log(error))