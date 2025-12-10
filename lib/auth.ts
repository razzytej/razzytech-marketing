// Simple authentication utility
// In production, use proper auth like NextAuth.js

export const VALID_CREDENTIALS = {
  username: 'test',
  password: 'test'
}

export function setAuthCookie(loggedIn: boolean) {
  if (typeof document !== 'undefined') {
    if (loggedIn) {
      document.cookie = 'razzytech_auth=true; path=/; max-age=86400' // 24 hours
    } else {
      document.cookie = 'razzytech_auth=; path=/; max-age=0'
    }
  }
}

export function isAuthenticated(): boolean {
  if (typeof document !== 'undefined') {
    return document.cookie.includes('razzytech_auth=true')
  }
  return false
}

export function logout() {
  setAuthCookie(false)
  if (typeof window !== 'undefined') {
    window.location.href = '/login'
  }
}
