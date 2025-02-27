const {model} = require("mongoose");

const {WatchListSchema} = require('../schema/WatchListSchema');

const WatchListModel = new model("watchlist",WatchListSchema)

module.exports = {WatchListModel};

