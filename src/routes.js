const opportunityController = require("./controllers/Opportunity");
module.exports = (app) => {
    app.get("/opportunity", opportunityController.index);
    app.get("/sync", opportunityController.sync);
};
