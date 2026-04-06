import {ConfettiIcon} from '@sanity/icons'
import {defineField, defineType, defineArrayMember} from 'sanity'

export const posts = defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon: ConfettiIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Page Content',
      of: [
        defineArrayMember({
          name: 'form',
          type: 'object',
          title: 'Form Block',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({
              name: 'description',
              type: 'array',
              title: 'Description',
              of: [{ type: 'block' }]
            }),
            defineField({
              name: 'formType',
              type: 'string',
              title: 'Form Type',
              initialValue: 'contact', // Optional: sets a default
              options: {
                list: [
                  { title: 'Contact', value: 'contact' },
                  { title: 'Event Submission', value: 'eventSubmission' },
                ],
                layout: 'radio', // dropdown or radio
                direction: 'horizontal',
              },
              // validation: (Rule) => Rule.required().error('Please select a form type'),
            })
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'formType'
            },
            prepare(selection) {
              return {...selection}
            },
          },
        }),
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
