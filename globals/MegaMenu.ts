import { GlobalConfig } from "payload/types";
import link from "../fields/link";

const MegamMenu: GlobalConfig = {
    slug: 'mega-menu',
    fields: [
        {
            name: 'nav',
            label: 'Navigation',
            type: 'array',
            labels: {
                singular: 'Link',
                plural: 'Links',
            },
            fields: [
                link,
            ],
        },
    ],
};

export default MegamMenu;
