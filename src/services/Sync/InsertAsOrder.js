const axios = require("axios");
const js2xmlparser = require("js2xmlparser");

const apikey = process.env.BLING_KEY;
if (!apikey) throw new Error("BLING_KEY is mandatory");

const formatDeal = (deal) => {
    const { products } = deal;
    const insertModel = {
        cliente: {
            nome: (deal.org_id && deal.org_id.name) || deal.person_id.name,
            fone: deal.person_id.phone[0],
            email: deal.person_id.email[0],
        },
        parcelas: [
            {
                data: deal.won_time,
                vlr: deal.value,
            },
        ],
        obs_internas: "Order generated by pipedrive-bling integration",
        itens: {}, //ITEMS
    };
    if (products && products.length > 0) {
        const formattedProducts = products.map((product) => ({
            codigo: product.product.code,
            descricao: product.name,
            un: "Un",
            qtde: product.quantity,
            vlr_unit: product.item_price,
            vlr_desconto: product.discount_percentage,
        }));
        insertModel.itens.item = formattedProducts;
    } else {
        insertModel.itens = undefined;
    }
    return insertModel;
};

const InsertAsOrder = async (deal) => {
    const formattedDeal = formatDeal(deal);
    const xmlDeal = js2xmlparser.parse("pedido", formattedDeal);
    return await axios.post(
        `https://bling.com.br/Api/v2/pedido/json?apikey=${apikey}&xml=${xmlDeal}`
    );
};

module.exports = InsertAsOrder;
