import { v4 as uuidv4 } from 'uuid';

export const servicesCardData = [
    {
        id: uuidv4(),
        topImg: "industry-hub",
        icon: "search",
        text: ["Source from", "Industry Hubs"]
    },
    {
        id: uuidv4(),
        topImg: "costom-prods",
        icon: "bascket",
        text: ["Customize Your", "Products"]
    },
    {
        id: uuidv4(),
        topImg: "fast-transfer",
        icon: "send",
        text: ["Fast, reliable shipping", "by ocean or air"]
    },
    {
        id: uuidv4(),
        topImg: "prod-monitoring",
        icon: "administration",
        text: ["Product monitoring", "and inspection"]
    },
]