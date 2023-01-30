import { CollectionConfig } from "payload/types";
import slug from "../fields/slug";

export type Type = {
    title: string
    slug: string
};

const Category: CollectionConfig = {
    slug: "categories",
    fields: [
        {
            name: 'text',
            label: 'Category',
            type: 'text',
            required: true
        },
        slug,
    ],
};

export default Category;
