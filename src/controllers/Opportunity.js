const getOpportunities = require("../services/Opportunity/GetOpportunities");
const { Sync } = require("../services/Sync");

const index = async (req, res) => {
    try {
        const opportunities = await getOpportunities();
        return res.send(opportunities);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Error" });
    }
};

const sync = async (req, res) => {
    try {
        await Sync();
        return res.status(200).json({ message: "all deals were synchronized" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Error" });
    }
};
module.exports = { index, sync };
