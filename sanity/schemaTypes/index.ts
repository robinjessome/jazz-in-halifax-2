import { type SchemaTypeDefinition } from 'sanity'
import {blockContentType} from './blockContentType'
import {pages} from './pages'
import {posts} from './posts'
import {events} from './events'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    events,
    pages,
    posts
  ],
}
