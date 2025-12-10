import Link from 'next/link'

export default function Pricing() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Pay a fraction of what agencies charge. No contracts. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small dealerships</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$299</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Up to 100 vehicles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Unlimited campaigns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Meta & Google Ads</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>CSV export</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
              >
                Get Started
              </Link>
            </div>

            {/* Professional (Recommended) */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-4 border-green-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-gray-600 mb-6">For growing dealerships</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$599</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Up to 500 vehicles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Unlimited campaigns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Meta & Google Ads</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>CSV export</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Custom branding</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large dealer groups</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Unlimited vehicles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Unlimited campaigns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Meta & Google Ads</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>CSV export</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Dedicated support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Custom integrations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Multi-location support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Compare to Traditional Agencies
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Traditional Agency</th>
                  <th className="p-4 text-center bg-green-600">RazzyTech Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Monthly Cost</td>
                  <td className="p-4 text-center text-red-600">$3,000-$5,000</td>
                  <td className="p-4 text-center text-green-600 font-bold">$599</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Campaign Turnaround</td>
                  <td className="p-4 text-center">7-10 days</td>
                  <td className="p-4 text-center font-bold">10 minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Number of Ads</td>
                  <td className="p-4 text-center">20-50 per month</td>
                  <td className="p-4 text-center font-bold">Unlimited</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Contract Length</td>
                  <td className="p-4 text-center">6-12 months</td>
                  <td className="p-4 text-center font-bold">Month-to-month</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Setup Fees</td>
                  <td className="p-4 text-center">$500-$2,000</td>
                  <td className="p-4 text-center font-bold">$0</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Annual Savings</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center font-bold text-green-600">$30,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes. No contracts, no commitments. Cancel with one click from your dashboard.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Do you offer a free trial?</h3>
              <p className="text-gray-600">
                We offer a free demo to qualified dealerships. Contact us to schedule one.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">What if I have more than 500 vehicles?</h3>
              <p className="text-gray-600">
                Contact us for Enterprise pricing. We support dealerships of all sizes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Do you handle the actual ad placement?</h3>
              <p className="text-gray-600">
                Not yet. We provide campaign-ready CSV files that you upload to Meta and Google Ads. 
                Full API integration coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Start Saving Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join dealerships saving $30,000+ per year on advertising.
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
