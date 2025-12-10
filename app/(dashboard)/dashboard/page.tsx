export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Dashboard
        </h1>
        <p className="text-xl text-gray-600">
          Welcome to your RazzyTech platform
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
              <h2 className="text-2xl font-bold text-gray-900">Full Dashboard</h2>
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
        <h3 className="font-semibold text-blue-900 mb-2">Platform Status</h3>
        <p className="text-blue-800 mb-3">
          Your RazzyTech platform is running locally at <code className="bg-blue-100 px-2 py-1 rounded">http://localhost:3000</code>
        </p>
        <ul className="text-blue-800 space-y-2">
          <li>✅ Dashboard with 182 vehicles</li>
          <li>✅ Campaign Builder (AI-powered)</li>
          <li>✅ Inventory from Basant Motors (D2C Media)</li>
        </ul>
      </div>
    </div>
  )
}
