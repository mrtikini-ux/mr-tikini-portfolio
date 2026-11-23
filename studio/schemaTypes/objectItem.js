import { defineType, defineField } from 'sanity'

export const objectItem = defineType({
  name: 'objectItem',
  title: 'Objects',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Music & Sound', value: 'music-sound' },
          { title: 'Tech & Gadgets', value: 'tech-gadgets' },
          { title: 'Bikes & Mobility', value: 'bikes-mobility' },
          { title: 'Style & Design', value: 'style-design' },
          { title: 'Everyday Life', value: 'everyday-life' },
          { title: 'Cars & Driving', value: 'cars-driving' },
          { title: 'Photography', value: 'photography' },
          { title: 'Food & Cooking', value: 'food-cooking' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'itemType',
      title: 'Item Type',
      type: 'string',
      options: {
        list: [
          { title: 'Product', value: 'product' },
          { title: 'Brand', value: 'brand' },
          { title: 'Creator', value: 'creator' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief editorial note or recommendation reason',
    }),

    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 6,
    }),

    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'gallery',
      title: 'Additional Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),

    defineField({
      name: 'brandName',
      title: 'Brand / Maker',
      type: 'string',
    }),

    defineField({
      name: 'collaborator',
      title: 'Linked Collaborator',
      type: 'reference',
      to: [{ type: 'collaborator' }],
      description: 'Optional link if this brand/creator already exists in Collaborators',
    }),

    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      description: 'Official product, brand, or creator page',
    }),

    defineField({
      name: 'affiliateUrl',
      title: 'Affiliate URL (optional)',
      type: 'url',
      description: 'Only use when an affiliate link is intentionally provided. Amazon Japan tracking ID: mrtikini22-22',
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
      itemType: 'itemType',
    },
    prepare({ title, subtitle, media, itemType }) {
      return {
        title: title || 'Untitled Object',
        subtitle: [itemType, subtitle].filter(Boolean).join(' · '),
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Published Date, Newest',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Title A–Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
