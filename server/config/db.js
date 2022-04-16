const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.
        underline); // cyan from colors module
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB