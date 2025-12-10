export default function InventoryPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Inventory
        </h1>
        <p className="text-xl text-gray-600">
          View and manage your vehicle inventory
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-8 text-center">
        <p className="text-gray-600 mb-4">
          Inventory management coming soon. For now, use the full platform:
        </p>
        <a
          href="http://localhost:3000/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 font-semibold"
        >
          Open Full Dashboard →
        </a>
      </div>
    </div>
  )
}
