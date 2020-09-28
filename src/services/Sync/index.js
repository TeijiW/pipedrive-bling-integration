const getWonDeals = require("./GetWonDeals");
const getDealProducts = require("./GetDealProducts");
const InsertAsOrder = require("./InsertAsOrder");
const saveOpportunities = require("../Opportunity/SaveOpportunities");

const Sync = async () => {
    try {
        const data = await getWonDeals();
        data.forEach(async (deal) => {
            deal.products = await getDealProducts(deal.id);
            await InsertAsOrder(deal);
        });
        await saveOpportunities(data);
    } catch (err) {
        console.error("An error occurred: ", err);
    }
};

module.exports = { Sync };
