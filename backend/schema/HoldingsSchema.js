const {Schema} = require("mongoose");

const HoldingsSchema = new Schema ({
    name:String,
    qty:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String,
});

const WatchListSchema = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown:Boolean,
})

module.exports = {HoldingsSchema,WatchListSchema};