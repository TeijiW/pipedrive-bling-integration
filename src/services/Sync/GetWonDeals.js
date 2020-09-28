const axios = require("axios");

const api_token = process.env.PIPEDRIVE_KEY;
if (!api_token) throw new Error("PIPEDRIVE_KEY is mandatory");

const GetWonDeals = async () => {
    const response = await axios("https://none58.pipedrive.com/api/v1/deals", {
        params: {
            status: "won",
            start: 0,
            api_token,
        },
    });
    const { data } = response.data;
    return data;
};

module.exports = GetWonDeals;
