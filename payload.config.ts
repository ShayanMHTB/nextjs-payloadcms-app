import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';

// Collections
import Page from './collections/Page';
import Media from './collections/Media';
import FormSubmission from './collections/FormSubmission';
import Study from './collections/Study';
import Category from './collections/Category';

// Globals
import MegamMenu from './globals/MegaMenu';
import SocialMedia from './globals/SocialMedia';
import Footer from './globals/Footer';



dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
    FormSubmission,
    Study,
    Category,
  ],
  globals: [
    MegamMenu,
    SocialMedia,
    Footer,
  ]
});
