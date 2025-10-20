const mongoose = require('mongoose');
//buat skema produk
const userSchema = new mongoose.Schema({
    //tidak perlu membuat field id, karena mongoose otomatis membuatkan field _id
    username: {
        type: String,   
        required: [ true,'Nama harus diisi' ],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [ true,'Email harus diisi' ],
        unique: true,
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,'Format email harus di isi']

        
    },
    password: {
        type: String,
        required: true,
        minLength:[6,'Password harus di isi'],
        select: false
    },
    address: {
        type: String,
         
    },
    isAdmin:{
        type: Boolean,
        default: false

    },
    createAt:{
        type: Date,
        default: Date.now//memberikan nilai bawaan berupa tanggal sekarang
    }
});


//Buat model dari skema
const Users = mongoose.model('Users',userSchema,'users');
module.exports = Users;