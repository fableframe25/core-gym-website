interface Trainer {
  name: string;
  specialty: string;
  image: string;
  experience: string;
}

export function TrainersSection() {
  const teamMembers: Trainer[] = [
    {
      name: "ISDAR JIMMY",
      specialty: "FEMALE BODYEULPING",
      image: "/professional-female-fitness-trainer-athletic.jpg",
      experience: "5+ Years"
    },
    {
      name: "MIGUEL WIOMO",
      specialty: "MALE BODYBUILDING",
      image: "/professional-male-fitness-trainer-muscular.jpg",
      experience: "8+ Years"
    },
    {
      name: "WAAZ AINUL",
      specialty: "CALISTHENICS",
      image: "/professional-black-male-fitness-trainer-experience.jpg",
      experience: "7+ Years"
    },
    {
      name: "EVER JOHN",
      specialty: "FUNCTIONAL TRAINING",
      image: "/professional-female-yoga-fitness-instructor.jpg",
      experience: "6+ Years"
    }
  ];

  return (
    <>
      <section id="trainers" className="py-16 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.08)_0%,transparent_50%)]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span 
                className="text-black px-6 py-2 text-xs font-black uppercase tracking-widest"
                style={{
                  backgroundColor: '#F97316',
                  borderRadius: '12px 12px 15px 5px / 10px 10px 15px 8px',
                  display: 'inline-block',
                  lineHeight: '1.5',
                  clipPath: 'polygon(0% 0%, 95% 0%, 100% 30%, 100% 100%, 5% 100%, 0% 70%)'
                }}
              >
                Aesthetic Gym
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tight leading-[0.95] uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', fontWeight: 900, letterSpacing: '0.02em' }}>
              OUR BEST PROFESSIONAL<br />
              FITNESS <span className="text-orange-500" style={{ fontWeight: 900 }}>TRAINERS</span>
            </h2>
          </div>

          {/* Trainers Grid */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 max-w-7xl mx-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-[85vw] sm:w-[300px] md:w-auto snap-center first:ml-[7.5vw] last:mr-[7.5vw] md:first:ml-0 md:last:mr-0"
              >
                <div className="relative flex flex-col items-center">
                  {/* Name */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-1 text-center tracking-tight uppercase antialiased" style={{ fontFamily: '"Arial Black", "Helvetica Bold", sans-serif', fontWeight: 900, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                    {member.name}
                  </h3>
                  
                  {/* Specialty */}
                  <p className="text-white text-xs font-bold uppercase tracking-wider mb-3 text-center antialiased" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                    {member.specialty}
                  </p>

                  {/* Circular Image */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-4">
                    {/* Orange Border Ring - Outer container with orange background */}
                    <div className="absolute inset-0 rounded-full bg-orange-500 p-[5px]">
                      {/* Image Container */}
                      <div className="w-full h-full overflow-hidden rounded-full bg-black">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Experience Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-black shadow-lg z-10">
                      {member.experience}
                    </div>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mt-2">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`rounded-full transition-all duration-300 ${
                          i === index 
                            ? 'w-2.5 h-2.5 bg-white' 
                            : 'w-2.5 h-2.5 bg-white/30'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-sloaw 3s ease-in-out infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}