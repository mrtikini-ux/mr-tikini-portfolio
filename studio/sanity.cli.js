import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'kvlkpw2o',
    dataset: 'development',
  },

  // Hostname for hosted Studio: https://mr-tikini.sanity.studio
  // Change this value only if the hostname is already taken.
  studioHost: 'mr-tikini',

  server: {
    port: 3333,
  },
})
