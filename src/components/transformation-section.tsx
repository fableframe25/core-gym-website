export function TransformationSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((story) => (
            <div key={story} className="bg-gray-50 rounded-lg p-6">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded"></div>
                <div className="w-16 h-16 bg-gray-300 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Amazing Transformation {story}
              </h3>
              <p className="text-gray-600">
                Lost 30 pounds in 6 months with our program!
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
