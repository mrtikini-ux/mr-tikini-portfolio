import { defineType, defineField } from 'sanity'

export const release = defineType({
  name: 'release',
  title: 'Releases & Productions',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Release Title',
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
      name: 'type',
      title: 'Release Type',
      type: 'string',
      options: {
        list: [
          { title: 'Original Production', value: 'original' },
          { title: 'Remix', value: 'remix' },
          { title: 'Compilation', value: 'compilation' },
          { title: 'DJ Mix', value: 'dj-mix' },
          { title: 'Guest Appearance', value: 'guest-appearance' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'artist',
      title: 'Primary Artist',
      type: 'string',
      initialValue: 'Tikini',
    }),

    defineField({
      name: 'featuredArtists',
      title: 'Featured Artists',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),

    defineField({
      name: 'artwork',
      title: 'Release Artwork',
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
      name: 'label',
      title: 'Record Label',
      type: 'string',
    }),

    defineField({
      name: 'catalogueNumber',
      title: 'Catalogue Number',
      type: 'string',
    }),

    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    }),

    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          { title: 'Digital', value: 'digital' },
          { title: 'Vinyl', value: 'vinyl' },
          { title: 'CD', value: 'cd' },
          { title: 'Cassette', value: 'cassette' },
          { title: 'Multiple Formats', value: 'multiple' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),

    defineField({
      name: 'tracklist',
      title: 'Track Listing',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'position',
              title: 'Track Number',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Track Title',
              type: 'string',
            },
            {
              name: 'artists',
              title: 'Track Artists',
              type: 'string',
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'artists',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'credits',
      title: 'Production and Release Credits',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'listeningLinks',
      title: 'Listening and Purchase Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Bandcamp', value: 'bandcamp' },
                  { title: 'Spotify', value: 'spotify' },
                  { title: 'Apple Music', value: 'apple-music' },
                  { title: 'SoundCloud', value: 'soundcloud' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Beatport', value: 'beatport' },
                  { title: 'Other', value: 'other' },
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'relatedCollaborators',
      title: 'Related Collaborators',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'collaborator' }],
        },
      ],
    }),

    defineField({
      name: 'relatedProject',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }],
    }),

    defineField({
      name: 'featured',
      title: 'Featured Release',
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
      subtitle: 'artist',
      media: 'artwork',
      date: 'releaseDate',
    },
    prepare({ title, subtitle, media, date }) {
      const dateStr = date ? new Date(date).toLocaleDateString() : ''
      return {
        title: title || 'Untitled Release',
        subtitle: [subtitle, dateStr].filter(Boolean).join(' · '),
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Release Date, Newest',
      name: 'releaseDateDesc',
      by: [{ field: 'releaseDate', direction: 'desc' }],
    },
    {
      title: 'Title A–Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
