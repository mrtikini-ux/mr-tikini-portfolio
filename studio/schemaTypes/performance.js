import { defineType, defineField } from 'sanity'

export const performance = defineType({
  name: 'performance',
  title: 'Performances',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Event / Performance Title',
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
      name: 'date',
      title: 'Performance Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
    }),

    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),

    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),

    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Club Night', value: 'club' },
          { title: 'Festival', value: 'festival' },
          { title: 'Concert / Live Event', value: 'concert' },
          { title: 'Radio', value: 'radio' },
          { title: 'Private Event', value: 'private' },
          { title: 'Brand Event', value: 'brand' },
          { title: 'Funktion', value: 'funktion' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'artwork',
      title: 'Event Artwork',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'photographs',
      title: 'Performance Photography',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'promoter',
      title: 'Promoter / Organiser',
      type: 'string',
    }),

    defineField({
      name: 'lineup',
      title: 'Other Artists / Lineup',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),

    defineField({
      name: 'relatedProject',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }],
    }),

    defineField({
      name: 'eventUrl',
      title: 'Event Website / Link',
      type: 'url',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Performance',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'venue',
      media: 'artwork',
      date: 'date',
    },
    prepare({ title, subtitle, media, date }) {
      const dateStr = date ? new Date(date).toLocaleDateString() : ''
      return {
        title: title || 'Untitled Performance',
        subtitle: [subtitle, dateStr].filter(Boolean).join(' · '),
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Date, Newest',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Date, Oldest',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
})
