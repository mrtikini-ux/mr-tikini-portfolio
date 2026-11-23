
import { defineType, defineField } from 'sanity'

export const mix = defineType({
  name: 'mix',
  title: 'Mixes & Radio',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Mix / Show Title',
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
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'DJ Mix', value: 'dj-mix' },
          { title: 'Radio Show', value: 'radio-show' },
          { title: 'Guest Mix', value: 'guest-mix' },
          { title: 'Live Recording', value: 'live-recording' },
          { title: 'Podcast Appearance', value: 'podcast' },
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
      name: 'artwork',
      title: 'Cover Artwork',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'recordedDate',
      title: 'Recording Date',
      type: 'date',
    }),

    defineField({
      name: 'publishedDate',
      title: 'Publication Date',
      type: 'date',
    }),

    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'For example: 01:15:30',
    }),

    defineField({
      name: 'platform',
      title: 'Primary Platform',
      type: 'string',
      options: {
        list: [
          { title: 'SoundCloud', value: 'soundcloud' },
          { title: 'Mixcloud', value: 'mixcloud' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Spotify', value: 'spotify' },
          { title: 'Apple Music', value: 'apple-music' },
          { title: 'Bandcamp', value: 'bandcamp' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),

    defineField({
      name: 'listeningUrl',
      title: 'Listen URL',
      type: 'url',
    }),

    defineField({
      name: 'embedUrl',
      title: 'Embed URL',
      type: 'url',
      description: 'Use the official embed URL supplied by the platform.',
    }),

    defineField({
      name: 'tracklist',
      title: 'Tracklist',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'position',
              title: 'Track Number',
              type: 'number',
            },
            {
              name: 'artist',
              title: 'Artist',
              type: 'string',
            },
            {
              name: 'trackTitle',
              title: 'Track Title',
              type: 'string',
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'trackTitle',
              subtitle: 'artist',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'guests',
      title: 'Featured Artists / Guests',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'relatedProject',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }],
    }),

    defineField({
      name: 'relatedEvent',
      title: 'Related Event',
      type: 'string',
      description: 'Event or radio programme associated with this recording.',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Mix',
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
      subtitle: 'platform',
      media: 'artwork',
    },
  },
})
