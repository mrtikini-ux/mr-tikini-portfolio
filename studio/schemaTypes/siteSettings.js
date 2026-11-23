import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'siteName',
      title: 'Website Name',
      type: 'string',
      initialValue: 'MR TIKINI',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'logo',
      title: 'Website Logo',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),

    defineField({
      name: 'defaultLanguage',
      title: 'Default Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Japanese', value: 'ja' },
        ],
      },
      initialValue: 'en',
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Accounts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  'Instagram',
                  'SoundCloud',
                  'Mixcloud',
                  'YouTube',
                  'Spotify',
                  'Facebook',
                  'X',
                  'TikTok',
                  'Other',
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'Profile URL',
              type: 'url',
            }),
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
      name: 'contactDetails',
      title: 'Contact Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Enquiry Type',
              type: 'string',
              options: {
                list: [
                  'Professional',
                  'DJ Bookings',
                  'Collaborations',
                  'Press',
                  'Other',
                ],
              },
            }),
            defineField({
              name: 'email',
              title: 'Email Address',
              type: 'string',
            }),
            defineField({
              name: 'label',
              title: 'Display Label',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'defaultSeoTitle',
      title: 'Default SEO Title',
      type: 'string',
    }),

    defineField({
      name: 'defaultSeoDescription',
      title: 'Default SEO Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'defaultSeoImage',
      title: 'Default Social Sharing Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'footerCopyright',
      title: 'Footer Copyright',
      type: 'string',
    }),

    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Link Label',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Website identity and global settings',
      }
    },
  },
})
