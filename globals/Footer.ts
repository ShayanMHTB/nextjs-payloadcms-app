import { GlobalConfig } from "payload/types";
import link from "../fields/link";

const Footer: GlobalConfig = {
    slug :'footer',
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
    ]
}

export default Footer;
