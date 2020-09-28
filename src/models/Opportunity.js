const mongoose = require("../config/database");

const OpportunitySchema = new mongoose.Schema({
    total_value: {
        type: Number,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
});

const Opportunity = mongoose.model("Opportunity", OpportunitySchema);

module.exports = Opportunity;
