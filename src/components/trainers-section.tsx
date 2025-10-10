interface Trainer {
  name: string;
  specialty: string;
  image: string;
  slot: string;
}

function TrainerCard({ member, index, total }: { member: Trainer; index: number; total: number }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Name */}
      <h3 className="text-2xl sm:text-3xl font-black text-orange-500 mb-1 text-center tracking-tight uppercase antialiased" style={{ fontFamily: '"Arial Black", "Helvetica Bold", sans-serif', fontWeight: 900, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
        {member.name}
      </h3>
      
      {/* Specialty */}
      <p className="text-white text-xs font-bold uppercase tracking-wider mb-3 text-center antialiased" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
        {member.specialty}
      </p>

      {/* Circular Image */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-4">
        {/* Orange Border Ring */}
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
        
        {/* Slot Badge - Replaces Experience */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-black shadow-lg z-10">
          {member.slot}
        </div>
      </div>

      {/* Dots Indicator - Only on Mobile */}
      <div className="flex md:hidden justify-center gap-2 mt-2">
        {[...Array(total)].map((_, i) => (
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
  );
}

export function TrainersSection() {
  const teamMembers: Trainer[] = [
    
    {
      name: "SABYASACHI",
      specialty: "PERSONAL TRAINER",
      image: "/trainer4.jpg",
      slot: "Morning"
    },
    {
      name: "SUBHO",
      specialty: "GENERAL TRAINER",
      image: "/trainer5.jpg",
      slot: "Morning"
    },
    {
      name: "ARUP",
      specialty: "PERSONAL TRAINER",
      image: "/trainer6.jpg",
      slot: "Morning"
    },
    {
      name: "DEEP",
      specialty: "GENERAL TRAINER",
      image: "/trainer7.jpg",
      slot: "Morning"
    },
    {
      name: "MONIMOY",
      specialty: "PERSONAL TRAINER",
      image: "/trainer1.jpg",
      slot: "Evening"
    },
    
    {
      name: "JYOTI",
      specialty: "GENERAL TRAINER",
      image: "/trainer3.jpg",
      slot: "Evening"
    },
    {
      name: "AJOY",
      specialty: "PERSONAL TRAINER",
      image: "/trainer2.jpg",
      slot: "Evening"
    },
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

          {/* Trainers Grid - Mobile: Horizontal Scroll, Desktop: Custom Layout */}
          
          {/* Mobile View - Horizontal Scroll */}
          <div className="flex overflow-x-auto md:hidden gap-8 max-w-7xl mx-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-[85vw] sm:w-[300px] snap-center first:ml-[7.5vw] last:mr-[7.5vw]"
              >
                <TrainerCard member={member} index={index} total={teamMembers.length} />
              </div>
            ))}
          </div>

          {/* Desktop View - Staggered Layout */}
          <div className="hidden md:block max-w-7xl mx-auto">
            {/* First Row - 4 Trainers */}
            <div className="grid grid-cols-4 gap-x-16 lg:gap-x-24 mb-8">
              {teamMembers.slice(0, 4).map((member, index) => (
                <div key={index} className="group relative flex justify-center">
                  <TrainerCard member={member} index={index} total={teamMembers.length} />
                </div>
              ))}
            </div>

            {/* Second Row - 3 Trainers (positioned exactly between top trainers) */}
            <div className="relative -mt-4">
              <div className="grid grid-cols-12 gap-x-8 lg:gap-x-12">
                {/* Trainer 5 - SUBHO (between 1st and 2nd) */}
                <div className="col-start-3 col-span-2 group relative flex justify-center">
                  <TrainerCard member={teamMembers[4]} index={4} total={teamMembers.length} />
                </div>
                
                {/* Trainer 6 - ARUP (between 2nd and 3rd) */}
                <div className="col-start-6 col-span-2 group relative flex justify-center">
                  <TrainerCard member={teamMembers[5]} index={5} total={teamMembers.length} />
                </div>
                
                {/* Trainer 7 - DEEP (between 3rd and 4th) */}
                <div className="col-start-9 col-span-2 group relative flex justify-center">
                  <TrainerCard member={teamMembers[6]} index={6} total={teamMembers.length} />
                </div>
              </div>
            </div>
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