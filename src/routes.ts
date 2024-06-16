/**
 * An array of routes that are accessible to the public
 * These routes fo not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/']

/**
 * An array of routes that are Used for authenticaton
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/signup']

/**
 * Prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * Default redirect path ater logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard'
