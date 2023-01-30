import { GlobalConfig } from "payload/types";
import link from "../fields/link";

const SocialMedia: GlobalConfig = {
    slug :'social-media',
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
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'label',
                            label: 'Label',
                            type: 'text',
                            required: true,
                            admin: {
                                width: '50%',
                            },
                        },
                        {
                            name: 'url',
                            label: 'URL',
                            type: 'text',
                            required: true,
                            admin: {
                                width: '50%',
                            },
                        },
                    ],
                },
            ],
        },
    ],
};

export default SocialMedia;
