export function MediaSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Gym Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((image) => (
            <div
              key={image}
              className="aspect-square bg-gray-300 rounded-lg"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
