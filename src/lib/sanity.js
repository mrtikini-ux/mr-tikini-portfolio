import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'kvlkpw2o'
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'development'
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2025-02-19'

/**
 * Public read client.
 * For private datasets (development), set SANITY_API_READ_TOKEN in the environment.
 * Never commit tokens to the repository.
 */
export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: dataset === 'production',
  token: import.meta.env.SANITY_API_READ_TOKEN || undefined,
})

const builder = imageUrlBuilder(sanity)

export function urlFor(source) {
  return builder.image(source)
}

/**
 * Helper for simple published document queries.
 */
export async function getPublished(type, extraFilter = '') {
  const filter = extraFilter ? ` && ${extraFilter}` : ''
  return sanity.fetch(
    `*[_type == $type && published == true${filter}] | order(_updatedAt desc)`,
    { type }
  )
}
