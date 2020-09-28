const Opportunity = require("../../models/Opportunity");

module.exports = async () => await Opportunity.find({}, "-__v");
