// Mock authentication utilities
// In production, replace with real Auth.js (NextAuth v5) implementation

export interface User {
  id: string
  email: string
  name: string
  role: string
}

// Mock admin credentials
export const MOCK_ADMIN = {
  email: "admin@softzyne.com",
  password: "admin123",
}

export function validateCredentials(email: string, password: string): User | null {
  if (email === MOCK_ADMIN.email && password === MOCK_ADMIN.password) {
    return {
      id: "1",
      email: MOCK_ADMIN.email,
      name: "Admin User",
      role: "admin",
    }
  }
  return null
}

// Check if user is authenticated (mock implementation)
export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem("isAuthenticated") === "true"
}

// Set authentication status
export function setAuthenticated(value: boolean): void {
  if (typeof window === "undefined") return
  if (value) {
    localStorage.setItem("isAuthenticated", "true")
  } else {
    localStorage.removeItem("isAuthenticated")
  }
}
