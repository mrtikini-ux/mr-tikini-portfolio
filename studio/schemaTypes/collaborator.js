import { defineType, defineField } from 'sanity'

export const collaborator = defineType({
  name: 'collaborator',
  title: 'Collaborator',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'type',
      title: 'Collaborator Type',
      type: 'string',
      options: {
        list: [
          { title: 'Brand', value: 'brand' },
          { title: 'Label', value: 'label' },
          { title: 'Organisation', value: 'organisation' },
          { title: 'Publication', value: 'publication' },
          { title: 'Individual', value: 'individual' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'logo',
      title: 'Logo or Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),

    defineField({
      name: 'collaborationPeriod',
      title: 'Collaboration Period',
      type: 'string',
      description: 'For example: 2018–2024 or Ongoing',
    }),

    defineField({
      name: 'relatedProjects',
      title: 'Related Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
    }),

    defineField({
      name: 'featured',
      title: 'Featured Collaborator',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      media: 'logo',
    },
  },
})
