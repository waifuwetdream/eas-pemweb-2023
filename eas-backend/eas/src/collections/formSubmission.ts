import { CollectionConfig } from 'payload/types'

const formSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'school',
      type: 'text',
      required: true,
    },
    // You can add more fields as needed
  ],
};

export default formSubmissions;
