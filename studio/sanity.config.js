import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes/index.js'

export default defineConfig({
  name: 'default',
  title: 'MR TIKINI — Content Studio',

  projectId: 'kvlkpw2o',
  dataset: 'development',

  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: '2025-02-19',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
