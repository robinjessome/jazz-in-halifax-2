import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType, defineArrayMember} from 'sanity'

export const pages = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: DocumentTextIcon,
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
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
