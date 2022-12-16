const routes = {
  index: '/',
} as const

type Routes = typeof routes

export { routes }
export type { Routes }
