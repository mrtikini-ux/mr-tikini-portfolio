
import { defineType, defineField } from 'sanity'

export const musicProfile = defineType({
  name: 'musicProfile',
  title: 'Music Profile',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Profile Title',
      type: 'string',
      initialValue: 'Tikini',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'djName',
      title: 'DJ / Artist Name',
      type: 'string',
      initialValue: 'Tikini',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),

    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    defineField({
      name: 'portrait',
      title: 'Artist Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'heroImage',
      title: 'Music Page Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'genres',
      title: 'Genres and Sounds',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'basedIn',
      title: 'Based In',
      type: 'string',
      initialValue: 'Tokyo, Japan',
    }),

    defineField({
      name: 'socialLinks',
      title: 'Music and Social Links',
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
                  { title: 'SoundCloud', value: 'soundcloud' },
                  { title: 'Mixcloud', value: 'mixcloud' },
                  { title: 'Spotify', value: 'spotify' },
                  { title: 'Apple Music', value: 'apple-music' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Bandcamp', value: 'bandcamp' },
                  { title: 'Instagram', value: 'instagram' },
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
      name: 'pressKit',
      title: 'Press Kit Download',
      type: 'file',
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
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
      title: 'djName',
      subtitle: 'basedIn',
      media: 'portrait',
    },
  },
})
