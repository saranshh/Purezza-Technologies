const mongoose = require('mongoose')

const uri = "mongodb+srv://saransh:saransh123@cluster0.jhzcvmt.mongodb.net/"

 const ConnectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("database connected")
    } catch (error) {
        console.log(error )
    }

}

module.exports = ConnectDB
