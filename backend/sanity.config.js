import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemas} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio_backend',
  projectId: 'bj75xn58',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
