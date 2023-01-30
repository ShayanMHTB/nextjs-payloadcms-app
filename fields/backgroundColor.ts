import { Field } from "payload/types";

export type Type = 'none' | 'orange' | 'red' | 'blue';

const backgroundColor: Field = {
    name: 'backgroundColor',
    type: 'radio',
    label: 'Background Color',
    defaultValue: 'none',
    options: [
        {
            label: 'None',
            value: 'none',
        },
        {
            label: 'Red',
            value: 'red',
        },
        {
            label: 'Blue',
            value: 'blue',
        },
        {
            label: 'Orange',
            value: 'orange',
        },
    ],
    admin: {
        layout: 'horizontal',
    },
};

export default backgroundColor;
