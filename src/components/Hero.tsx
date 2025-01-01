import myImage from './go.png';

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-navy-900 flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row justify-between items-center w-full space-y-8 lg:space-y-0">
        {/* Text Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          >
            Hey, I'm <span className="text-pink-500">Suan KC</span>
          </h1>
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            a <span className="text-pink-500">self-taught</span> coder
            <br />& front-end developer.
          </h2>
          <a
            href="#work"
            className="mt-8 inline-block px-6 sm:px-8 py-3 bg-pink-500 text-white text-sm sm:text-base rounded-lg hover:bg-pink-600 transition-colors duration-200"
            aria-label="View my portfolio"
          >
            See my work
          </a>
        </div>

        {/* Image */}
        <div className="w-2/3 sm:w-1/2 lg:w-1/2">
          <img
            src={myImage}
            alt="Illustration of Suan KC as a developer"
            className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:ml-auto rounded-full"
          />
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#6366f1_0%,_transparent_35%)] opacity-20"></div>
    </section>
  );
}
