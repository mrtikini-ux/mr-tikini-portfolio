import { defineType, defineField } from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Japanese', value: 'ja' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'introHeading',
      title: 'Introduction Heading',
      type: 'string',
    }),

    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'leadImage',
      title: 'Lead Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),

    defineField({
      name: 'disciplines',
      title: 'Creative Disciplines',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'featuredCollaborators',
      title: 'Featured Collaborators',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'collaborator' }],
        },
      ],
    }),

    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
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
      name: 'translation',
      title: 'Linked Translation',
      type: 'reference',
      to: [{ type: 'about' }],
      description: 'Link the equivalent About page in the other language.',
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
      language: 'language',
      media: 'leadImage',
    },
    prepare({ title, language, media }) {
      return {
        title,
        subtitle: language === 'ja' ? 'Japanese' : 'English',
        media,
      }
    },
  },
})
