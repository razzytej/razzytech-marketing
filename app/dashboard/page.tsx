'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { isAuthenticated, logout } from '@/lib/auth'

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login')
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              RazzyTech
            </Link>
            <div className="flex gap-4">
              <span className="text-gray-600 px-4 py-2">
                Welcome, <strong>test</strong>
              </span>
              <button
                onClick={logout}
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            RazzyTech Platform Access
          </h1>
          <p className="text-xl text-gray-600">
            Access your full platform features
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Main Dashboard */}
          <a
            href="http://localhost:3000/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-600 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                📊
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                <p className="text-gray-600">View inventory overview</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Access your main dashboard with 182 vehicles. View stats, manage inventory, and monitor your dealership.
            </p>
            <div className="flex items-center text-green-600 font-semibold">
              Open Dashboard →
            </div>
          </a>

          {/* Campaign Builder */}
          <a
            href="http://localhost:3000/campaigns/new"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                ✨
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Campaign Builder</h2>
                <p className="text-gray-600">AI-powered ad generation</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Create hundreds of ads in minutes. AI generates Meta and Google Ads from your inventory automatically.
            </p>
            <div className="flex items-center text-blue-600 font-semibold">
              Create Campaign →
            </div>
          </a>
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">🎉 Platform Status</h3>
          <p className="text-blue-800 mb-3">
            Your RazzyTech platform is running locally at <code className="bg-blue-100 px-2 py-1 rounded">http://localhost:3000</code>
          </p>
          <ul className="text-blue-800 space-y-2">
            <li>✅ Dashboard with 182 vehicles</li>
            <li>✅ Campaign Builder (AI-powered)</li>
            <li>✅ Inventory from Basant Motors (D2C Media)</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/" className="text-green-600 hover:underline">
              ← Back to Marketing Site
            </Link>
            <a 
              href="http://localhost:3000/api/test-ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Test AI Generation →
            </a>
            <Link href="/pricing" className="text-green-600 hover:underline">
              View Pricing →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
