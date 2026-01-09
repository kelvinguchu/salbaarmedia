import { createServerFn } from '@tanstack/react-start'
import { getCookie, setCookie } from '@tanstack/react-start/server'
import * as z from 'zod'

const postThemeValidator = z.union([
  z.literal('light'),
  z.literal('dark'),
  z.literal('system'),
])
export type T = z.infer<typeof postThemeValidator>
const storageKey = 'theme'

export const getThemeServerFn = createServerFn().handler(async () => {
  await Promise.resolve()
  return (getCookie(storageKey) || 'light') as T
})

export const setThemeServerFn = createServerFn({ method: 'POST' })
  .inputValidator(postThemeValidator)
  .handler(async ({ data }) => {
    await Promise.resolve()
    setCookie(storageKey, data)
  })
