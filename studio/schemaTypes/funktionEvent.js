import { defineType, defineField } from 'sanity'

export const funktionEvent = defineType({
  name: 'funktionEvent',
  title: 'Funktion Events',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
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
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'endDate',
      title: 'End Date (optional)',
      type: 'datetime',
      description: 'Only if the event spans multiple days',
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
          { title: 'Warehouse / Rave', value: 'warehouse' },
          { title: 'Special Event', value: 'special' },
          { title: 'Takeover', value: 'takeover' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'upcoming',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero / Flyer Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'gallery',
      title: 'Event Photography',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),

    defineField({
      name: 'lineup',
      title: 'Lineup',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),

    defineField({
      name: 'promoter',
      title: 'Promoter / Organiser',
      type: 'string',
    }),

    defineField({
      name: 'collaborators',
      title: 'Related Collaborators',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'collaborator' }] }],
    }),

    defineField({
      name: 'ticketUrl',
      title: 'Ticket / Info URL',
      type: 'url',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Event',
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
      media: 'heroImage',
      date: 'date',
    },
    prepare({ title, subtitle, media, date }) {
      const dateStr = date ? new Date(date).toLocaleDateString() : ''
      return {
        title: title || 'Untitled Event',
        subtitle: [subtitle, dateStr].filter(Boolean).join(' · '),
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Event Date, Newest',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Event Date, Oldest',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
})
