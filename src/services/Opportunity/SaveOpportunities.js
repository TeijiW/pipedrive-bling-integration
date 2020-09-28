const dayjs = require("dayjs");
const Opportunity = require("../../models/Opportunity");

module.exports = async (deals) => {
    const todayDate = dayjs().format("YYYY-MM-DD");
    let totalValue = 0;
    deals.forEach((deal) => {
        totalValue += deal.value;
    });
    const databaseOpportunity = await Opportunity.findOne({
        date: todayDate,
    });

    if (databaseOpportunity) {
        await Opportunity.findByIdAndUpdate(databaseOpportunity._id, {
            total_value: totalValue,
        });
    } else {
        await Opportunity.create(
            {
                total_value: totalValue,
                date: todayDate,
            },
            (err, doc) => {
                if (err) console.error(err);
                if (doc) console.log(doc);
            }
        );
    }
};
