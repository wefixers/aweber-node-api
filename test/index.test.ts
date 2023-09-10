import { expect, it } from 'vitest'

import { AweberClient } from '../src'

/**
 * The aweber stream client.
 */
const aweber = new AweberClient({
  // @ts-expect-error, i am too lazy to fix this
  accountId: import.meta.env.VITE_AWEBER_ACCOUNT_ID,
  // @ts-expect-error, i am too lazy to fix this
  clientId: import.meta.env.VITE_AWEBER_CLIENT_ID,
  // @ts-expect-error, i am too lazy to fix this
  clientSecret: import.meta.env.VITE_AWEBER_CLIENT_SECRET,
  // @ts-expect-error, i am too lazy to fix this
  refreshToken: import.meta.env.VITE_AWEBER_REFRESH_TOKEN,
})

// behold the magic of testing on live services!
it('should list all lists', async () => {
  await expect(aweber.getLists({ start: 0, size: 1 })).resolves.toBeTypeOf('object')
})
