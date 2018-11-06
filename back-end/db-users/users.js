import mongoose from "mongoose"

const Schema = mongoose.Schema;

let user = new Schema({
    firstname: {type: Sring},
    lastname: {type: String},
    password: {type: String},
    email: {type: email},
    gender: {type: gender},
    avarta: {type: Image},
    baskets: [{
        id: {type: id},
        basket: {type: []},
        amount: {type: []},
        status: {type: status}, // Đang đóng gói, đang gửi, đã gửi
        checkOut: {type: checkOut} // Thanh toán, chưa thanh toán
    }]
})