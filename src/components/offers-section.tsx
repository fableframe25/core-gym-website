export function OffersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Membership Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Basic", "Premium", "VIP"].map((plan, index) => (
            <div
              key={plan}
              className="bg-white rounded-lg shadow-md p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">{plan}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-6">
                ${(index + 1) * 29}/mo
              </p>
              <ul className="space-y-2 mb-8">
                <li>✓ Gym Access</li>
                <li>✓ Group Classes</li>
                {index > 0 && <li>✓ Personal Training</li>}
                {index > 1 && <li>✓ Nutrition Consulting</li>}
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
