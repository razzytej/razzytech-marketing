import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Marketing for Car Dealers
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Generate hundreds of ready-to-run ads in minutes. Stop paying agencies $5,000/month.
              RazzyTech automates your entire advertising workflow.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700"
              >
                Get Started Free
              </Link>
              <Link
                href="/how-it-works"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:border-gray-400"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Problem With Traditional Marketing Agencies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most car dealers waste thousands every month on slow, expensive agencies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border-2 border-red-100">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold mb-2">Too Expensive</h3>
              <p className="text-gray-600">
                $3,000-$5,000/month for basic ad management. Plus setup fees, retainers, and hidden costs.
              </p>
            </div>
            
            <div className="bg-red-50 p-8 rounded-lg border-2 border-red-100">
              <div className="text-4xl mb-4">🐌</div>
              <h3 className="text-xl font-bold mb-2">Too Slow</h3>
              <p className="text-gray-600">
                Wait 7-10 days for a single campaign. By then, your best inventory is already sold.
              </p>
            </div>
            
            <div className="bg-red-50 p-8 rounded-lg border-2 border-red-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Generic Results</h3>
              <p className="text-gray-600">
                Cookie-cutter ads that don't reflect your unique inventory or dealership brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Introducing RazzyTech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered advertising that's 10x faster and 90% cheaper
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">10 Minutes, Not 10 Days</h3>
              <p className="text-gray-600">
                Generate 500+ ads instantly. No waiting for agency approvals or revisions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI Does The Heavy Lifting</h3>
              <p className="text-gray-600">
                Claude 3.5 Sonnet analyzes your inventory and writes platform-optimized ad copy automatically.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Smart Prioritization</h3>
              <p className="text-gray-600">
                AI identifies aging inventory, hot sellers, and new arrivals—then allocates budget accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Multi-Platform Support</h3>
                <p className="text-gray-600">
                  Scrapes inventory from Convertus, FoxDealer, and D2C Media. Covers 90% of Canadian dealerships.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Meta & Google Ads</h3>
                <p className="text-gray-600">
                  Generates ads for both platforms with correct character limits and best practices built-in.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">CSV Export</h3>
                <p className="text-gray-600">
                  Download campaign-ready files to upload directly to Meta Ads Manager and Google Ads.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Compliance Ready</h3>
                <p className="text-gray-600">
                  OMVIC, AMVIC, and VSA compliant. Includes stock numbers, VINs, and pricing where required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to 10x Your Ad Output?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join dealerships saving thousands every month with AI-powered advertising.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </main>
  )
}
