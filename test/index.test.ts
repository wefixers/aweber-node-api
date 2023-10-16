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

it('should build the correct url', async () => {
  expect(aweber._getURL('https://api.aweber.com/1.0/', 'http://aweber.com/1.0/')).toBe('https://api.aweber.com/1.0/')

  expect(aweber._getURL('')).toBe(`https://api.aweber.com/1.0/accounts/${aweber.accountId}`)
})

// behold the magic of testing on live services!
it('should list all lists', async () => {
  await expect(aweber.getLists({ start: 0, size: 1 })).resolves.toBeTypeOf('object')
})
