const {model} = require("mongoose");

const {HoldingsSchema,WatchListSchema} = require('../schema/HoldingsSchema');

const HoldingsModel = new model("holding",HoldingsSchema)

const WatchListModel = new model("watchlist",WatchListSchema)

module.exports = {HoldingsModel,WatchListModel};

