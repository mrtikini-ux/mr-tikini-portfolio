import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
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
          { title: 'Music', value: 'music' },
          { title: 'Funktion / Events', value: 'funktion' },
          { title: 'Creative Direction', value: 'creative-direction' },
          { title: 'Brand Collaboration', value: 'brand-collaboration' },
          { title: 'Editorial', value: 'editorial' },
          { title: 'Model / Campaign', value: 'model-campaign' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),

    defineField({
      name: 'summary',
      title: 'Project Summary',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),

    defineField({
      name: 'collaborators',
      title: 'Collaborators',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'collaborator' }],
        },
      ],
    }),

    defineField({
      name: 'projectUrl',
      title: 'External Project URL',
      type: 'url',
    }),

    defineField({
      name: 'projectDate',
      title: 'Project Date',
      type: 'date',
    }),

    defineField({
      name: 'featured',
      title: 'Feature on Website',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
})
