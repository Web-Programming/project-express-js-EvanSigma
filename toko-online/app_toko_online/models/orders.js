const mongoose = require('mongoose');
const router = express.Router();
const express = require('express');
const orderController = require('../../controllers/ControllerOrder');
const auth = require('../../middleware/auth');

//buat skema orders
 router.post("/",auth,orderController.create);
//url read all --GET
router.get("/",auth,orderController.all);
//url read one-detail --GET
router.get("/:id",auth,orderController.detailOrder);
//url update --PUT
router.put("/:id",auth,orderController.update);
//url delete --DELETE
router.delete("/:id",auth,orderController.remove);

module.exports=router;

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [ {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            default: 1,
            min: 1
        },
        priceAtorder: {
            type: Number,
            required: true
        },
        totalAmount: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'shipped', 'delivered', 'cancelled'],
            default: 'pending'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },

    } ],
});