export function TrainersSection() {
  const teamMembers = [
    {
      name: "Alex Thunder",
      role: "Head Trainer & Strength Coach",
      image: "/professional-male-fitness-trainer-muscular.jpg",
      experience: "8+ Years",
      specialty: "Strength Training & Bodybuilding",
      quote: "Every rep counts, every set matters!",
      achievements: ["NASM Certified", "Powerlifting Champion", "500+ Transformations"]
    },
    {
      name: "Sarah Lightning", 
      role: "Yoga & Flexibility Expert",
      image: "/professional-female-yoga-fitness-instructor.jpg",
      experience: "6+ Years",
      specialty: "Yoga & Mindfulness",
      quote: "Find your inner peace through movement",
      achievements: ["Yoga Alliance Certified", "Meditation Master", "Wellness Coach"]
    },
    {
      name: "Marcus Storm",
      role: "Boxing & HIIT Specialist", 
      image: "/professional-black-male-fitness-trainer-experience.jpg",
      experience: "7+ Years",
      specialty: "Combat Sports & HIIT",
      quote: "Unleash the warrior within you!",
      achievements: ["Olympic Athlete", "Performance Specialist", "Sports Science Degree"]
    },
    {
      name: "Emma Blaze",
      role: "Cardio & Athletic Performance",
      image: "/professional-female-fitness-trainer-athletic.jpg", 
      experience: "5+ Years",
      specialty: "Athletic Training & Cardio",
      quote: "Push your limits, break your barriers",
      achievements: ["Pro Bodybuilder", "Nutrition Expert", "Contest Prep Specialist"]
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-20 left-10 text-4xl animate-pulse text-yellow-400 opacity-30">💪</div>
      <div className="absolute bottom-20 right-10 text-3xl animate-bounce text-yellow-500 opacity-20">🔥</div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Meet Our <span className="text-yellow-400">LEGENDARY</span> Team
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Get a sneak peek at our incredible team of fitness legends who are ready to transform your life. 
          Each trainer brings unique expertise and passion to help you achieve greatness!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden border-2 border-yellow-400/20 hover:border-yellow-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs md:text-sm font-bold z-20">
                  {member.experience}
                </div>
              </div>
              
              <div className="relative z-20 p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-300 font-medium mb-3 text-sm md:text-base">
                  {member.role}
                </p>
                <p className="text-yellow-500 text-xs md:text-sm mb-4 font-semibold">
                  Specialty: {member.specialty}
                </p>
                
                <div className="border-t border-yellow-400/30 pt-4 mb-4">
                  <p className="text-gray-400 italic text-xs md:text-sm leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>
                
                <div className="space-y-1 mb-4">
                  {member.achievements.slice(0, 2).map((achievement, idx) => (
                    <div key={idx} className="text-xs text-gray-500 flex items-center">
                      <span className="w-1 h-1 bg-yellow-400 rounded-full mr-2"></span>
                      {achievement}
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-3xl p-8 md:p-12 border border-yellow-400/30">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-400">
            Ready to Train with the BEST?
          </h3>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our legendary team and unlock your true potential! Every champion needs a great coach, 
            and we have the best in the business waiting for you. Your transformation starts with one decision.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold hover:from-yellow-300 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50">
            Start Your Journey 🚀
          </button>
        </div>
      </div>
    </section>
  );
}