const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/to_do_app",
            {
                useNewUrlParser: true,
            }
        );
        console.log('connect thanh cong');
    }
    catch (error) {
        console.log("connect fail! error : " + error);
    }
}

module.exports = { connect };