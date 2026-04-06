import {CalendarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const events = defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  icon: CalendarIcon,
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
      name: 'eventDate',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    })
  ],
  preview: {
    select: {
      title: 'title',
      date: 'eventDate',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
