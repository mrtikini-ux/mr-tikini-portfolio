import { defineType, defineField } from 'sanity'

export const media = defineType({
  name: 'media',
  title: 'Media',
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
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Photography', value: 'photography' },
          { title: 'Video', value: 'video' },
          { title: 'Press Coverage', value: 'press' },
          { title: 'Appearance', value: 'appearance' },
          { title: 'Interview', value: 'interview' },
          { title: 'Feature', value: 'feature' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover / Thumbnail',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'gallery',
      title: 'Photography Gallery',
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
      hidden: ({ parent }) => parent?.mediaType !== 'photography',
    }),

    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo, or other official video link',
      hidden: ({ parent }) => parent?.mediaType !== 'video',
    }),

    defineField({
      name: 'embedUrl',
      title: 'Embed URL',
      type: 'url',
      description: 'Official embed URL if available',
      hidden: ({ parent }) => parent?.mediaType !== 'video',
    }),

    defineField({
      name: 'externalUrl',
      title: 'External / Press URL',
      type: 'url',
      description: 'Link to the original article, feature, or appearance',
    }),

    defineField({
      name: 'publication',
      title: 'Publication / Platform',
      type: 'string',
      description: 'e.g. Magazine name, website, or channel',
    }),

    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),

    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'text',
      rows: 3,
      description: 'Photographers, directors, writers, or other credits',
    }),

    defineField({
      name: 'relatedProjects',
      title: 'Related Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),

    defineField({
      name: 'relatedCollaborators',
      title: 'Related Collaborators',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'collaborator' }] }],
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
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'mediaType',
      media: 'coverImage',
      date: 'date',
    },
    prepare({ title, subtitle, media, date }) {
      const dateStr = date ? new Date(date).toLocaleDateString() : ''
      return {
        title: title || 'Untitled Media',
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
      title: 'Title A–Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
