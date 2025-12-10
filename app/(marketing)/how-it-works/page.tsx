import Link from 'next/link'

export default function HowItWorks() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              How RazzyTech Works
            </h1>
            <p className="text-xl text-gray-600">
              From inventory to ads in 3 simple steps. No technical knowledge required.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Connect Your Inventory</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Simply provide your dealership website URL. RazzyTech automatically detects your platform 
                  (Convertus, FoxDealer, or D2C Media) and syncs your entire inventory.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">Supported Platforms:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Convertus / TAdvantage (AutoTrader Canada network)</li>
                    <li>✓ FoxDealer (Independent dealers)</li>
                    <li>✓ D2C Media / Dealer.com (Major Canadian provider)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">AI Generates Your Campaigns</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Click "Create Campaign" and our AI does the rest. It analyzes your inventory, 
                  categorizes vehicles by age and demand, then writes compelling ad copy for each one.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">AI-Powered Features:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Identifies aging inventory (60+ days old) for priority advertising</li>
                    <li>• Highlights hot sellers (31-60 days) with proven demand</li>
                    <li>• Showcases new arrivals (0-30 days) to build excitement</li>
                    <li>• Allocates budget strategically based on inventory age</li>
                    <li>• Writes platform-specific copy (Meta 125 chars, Google 90 chars)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Download & Launch</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Download your campaign as CSV files formatted for Meta Ads Manager and Google Ads. 
                  Upload and launch in minutes—no agency needed.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">What You Get:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Meta Ads CSV with headlines, body copy, and images</li>
                    <li>✓ Google Ads CSV with headlines, descriptions, and landing pages</li>
                    <li>✓ Campaign summary with budget allocation recommendations</li>
                    <li>✓ VIN, stock numbers, and compliance data included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Comparison */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Traditional Agency vs RazzyTech
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-red-600">Traditional Agency</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-red-600">📅</span>
                  <span><strong>Day 1-2:</strong> Initial consultation and onboarding</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">📊</span>
                  <span><strong>Day 3-5:</strong> Inventory review and strategy planning</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">✍️</span>
                  <span><strong>Day 6-8:</strong> Ad copy writing and revisions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">👀</span>
                  <span><strong>Day 9-10:</strong> Client approval and final tweaks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">🚀</span>
                  <span><strong>Day 11+:</strong> Campaign launch</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">💰</span>
                  <span><strong>Cost:</strong> $3,000-$5,000/month + setup fees</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg shadow-lg border-2 border-green-600">
              <h3 className="text-2xl font-bold mb-6 text-green-600">RazzyTech</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-green-600">⚡</span>
                  <span><strong>Minute 1:</strong> Enter dealership URL</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">🤖</span>
                  <span><strong>Minute 2-5:</strong> AI analyzes inventory automatically</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✨</span>
                  <span><strong>Minute 6-8:</strong> AI generates all ad copy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">📥</span>
                  <span><strong>Minute 9:</strong> Download campaign CSVs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">🎯</span>
                  <span><strong>Minute 10:</strong> Upload to Meta/Google and launch</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">💰</span>
                  <span><strong>Cost:</strong> See pricing page →</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to try RazzyTech? Get started with a free demo.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700"
          >
            Schedule a Demo
          </Link>
        </div>
      </section>
    </main>
  )
}
