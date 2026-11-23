import { defineType, defineField } from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience / CV',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Role / Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'organisation',
      title: 'Organisation / Brand',
      type: 'string',
    }),

    defineField({
      name: 'collaborator',
      title: 'Linked Collaborator',
      type: 'reference',
      to: [{ type: 'collaborator' }],
      description: 'Optional link if the organisation already exists in Collaborators',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City, Country',
    }),

    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),

    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if current / ongoing',
    }),

    defineField({
      name: 'isCurrent',
      title: 'Current Role',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Employment', value: 'employment' },
          { title: 'Freelance / Contract', value: 'freelance' },
          { title: 'Residency', value: 'residency' },
          { title: 'Collaboration', value: 'collaboration' },
          { title: 'Brand Partnership', value: 'brand' },
          { title: 'Education', value: 'education' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      description: 'Key responsibilities, highlights, or context',
    }),

    defineField({
      name: 'relatedProjects',
      title: 'Related Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. Useful for manual ordering on the CV page.',
    }),

    defineField({
      name: 'featured',
      title: 'Featured on CV',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'organisation',
      startDate: 'startDate',
      endDate: 'endDate',
      isCurrent: 'isCurrent',
    },
    prepare({ title, subtitle, startDate, endDate, isCurrent }) {
      const start = startDate ? new Date(startDate).getFullYear() : ''
      const end = isCurrent ? 'Present' : endDate ? new Date(endDate).getFullYear() : ''
      const dateRange = [start, end].filter(Boolean).join(' – ')
      return {
        title: title || 'Untitled Role',
        subtitle: [subtitle, dateRange].filter(Boolean).join(' · '),
      }
    },
  },

  orderings: [
    {
      title: 'Start Date, Newest',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
    {
      title: 'Manual Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
