import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import App from '@/App.tsx'
import HomePage from '@/pages/HomePage.tsx'

const rootRoute = createRootRoute({
  component: () => <App />,
})

const homeRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  component: HomePage,
})

const routeTree = rootRoute.addChildren([homeRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}