const axios = require("axios");

const api_token = process.env.PIPEDRIVE_KEY;
if (!api_token) throw new Error("PIPEDRIVE_KEY is mandatory");

const GetDealProducts = async (id) => {
    if (id) {
        const response = await axios(
            `https://none58.pipedrive.com/api/v1/deals/${id}/products`,
            {
                params: {
                    start: 0,
                    api_token,
                    include_product_data: 1,
                },
            }
        );
        const { data } = response.data;
        if (data && data.length < 1) return undefined;
        return data;
    }
    return null;
};

module.exports = GetDealProducts;
