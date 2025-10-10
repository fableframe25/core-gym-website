export function OffersSection() {

  const plans = [
    {
      name: "BASIC",
      price: 29,
      period: "mo",
      features: ["Gym Access", "Group Classes", "Basic Equipment"],
      popular: false,
      gradient: "from-gray-800 to-gray-900"
    },
    {
      name: "PREMIUM",
      price: 59,
      period: "mo",
      features: ["Everything in Basic", "Personal Training", "Nutrition Plan", "Premium Equipment"],
      popular: true,
      gradient: "from-orange-600 to-orange-800"
    },
    {
      name: "VIP",
      price: 99,
      period: "mo",
      features: ["Everything in Premium", "1-on-1 Coaching", "Custom Meal Plans", "24/7 Access", "Locker & Towels"],
      popular: false,
      gradient: "from-black to-gray-900"
    }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Faded Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-4xl lg:text-6xl xl:text-8xl font-black text-white/5 tracking-widest select-none transform rotate-12">
          MEMBERSHIP
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-12 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-4xl xl:text-5xl font-black tracking-wider mb-4">
            <span className="block text-white">CHOOSE YOUR</span>
            <span className="block text-orange-500">MEMBERSHIP</span>
          </h2>
          <p className="text-sm lg:text-base text-gray-300 max-w-2xl mx-auto px-4">
            Transform your life with our premium fitness plans designed for every goal
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            // Different heights for each card - responsive
            const cardHeights = ['h-72 lg:h-80', 'h-80 lg:h-96', 'h-76 lg:h-88']; // Basic, Premium, VIP
            const cardHeight = cardHeights[index];
            
            return (
              <div
                key={plan.name}
                className={`relative group ${cardHeight} ${
                  plan.popular ? 'transform scale-105 md:scale-110' : ''
                } transition-all duration-500 hover:scale-105`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`
                  relative bg-black 
                  rounded-2xl p-6 lg:p-8 h-full
                  border border-gray-700/50
                  shadow-2xl
                  hover:border-orange-500/50
                  transition-all duration-500
                  group-hover:shadow-orange-500/20
                  ${plan.popular ? 'shadow-orange-500/30 border-orange-500/30' : ''}
                `}>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      {/* Plan Name */}
                      <h3 className="text-2xl lg:text-3xl font-black tracking-wider mb-4 text-white">
                        {plan.name}
                      </h3>

                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-4xl lg:text-5xl font-black text-orange-500">${plan.price}</span>
                          <span className="text-xl text-gray-400 font-bold">/{plan.period}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-300 font-medium text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button className={`
                      w-full py-3 px-6 rounded-xl font-black tracking-wider text-base
                      transition-all duration-300 transform hover:scale-105
                      ${plan.popular 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30' 
                        : 'bg-gray-800 hover:bg-orange-600 text-white border border-gray-600 hover:border-orange-500'
                      }
                    `}>
                      CHOOSE {plan.name}
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-orange-500/10 rounded-full blur-xl" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-orange-600/10 rounded-full blur-lg" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 lg:mt-12">
          <p className="text-gray-400 mb-4 text-sm lg:text-base">Need help choosing? Contact our team!</p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-black tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30 text-sm lg:text-base">
            GET PERSONALIZED PLAN
          </button>
        </div>
      </div>
    </section>
  );
}
