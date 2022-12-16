const routes = {
  index: '/',
  users: '/users',
} as const

type Routes = typeof routes

export { routes }
export type { Routes }
