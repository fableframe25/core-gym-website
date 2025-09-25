export function TrainersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Expert Trainers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((trainer) => (
            <div
              key={trainer}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Trainer {trainer}</h3>
              <p className="text-gray-600">
                Expert in strength training and nutrition
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
