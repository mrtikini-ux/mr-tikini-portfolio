import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'kvlkpw2o',
    dataset: 'development',
  },

  server: {
    port: 3333,
  },
})
