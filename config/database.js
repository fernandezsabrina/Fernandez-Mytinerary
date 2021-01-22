const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sabrinafernandez:mongo1733@cluster0.pwzu9.mongodb.net/mytinerary?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Database Connected"))
.catch(error => console.log(error))