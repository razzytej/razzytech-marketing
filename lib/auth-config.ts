import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

// In production, this would come from a database
// For now, we'll use a hardcoded user with hashed password
const DEMO_USERS = [
  {
    id: '1',
    email: 'demo@razzytech.com',
    // Password: 'demo123' (hashed with bcrypt)
    passwordHash: '$2a$10$YourHashedPasswordHere', // Will be replaced with actual hash
    name: 'Demo User',
  },
]

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials')
        }

        // Find user by email
        const user = DEMO_USERS.find((u) => u.email === credentials.email)

        if (!user) {
          throw new Error('Invalid credentials')
        }

        // In a real app, verify password hash
        // const isPasswordValid = await bcrypt.compare(credentials.password, user.passwordHash)

        // For demo: accept 'demo123' as password
        const isPasswordValid = credentials.password === 'demo123'

        if (!isPasswordValid) {
          throw new Error('Invalid credentials')
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
}
