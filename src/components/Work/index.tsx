
import { ProjectCarousel } from './ProjectCarousel';

export function Work() {
  return (
    <section
      id="work"
      className="min-h-screen bg-navy-900 py-20"
      aria-labelledby="work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="border-l-4 border-pink-500 pl-4 mb-12 sm:mb-16">
          <h2
            id="work-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          >
            Work
          </h2>
        </div>

        {/* Project Carousel */}
        <div className="relative">
          <ProjectCarousel />
          {/* Fallback or Loading Message */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-navy-900 text-white opacity-80"
            style={{ display: 'none' }} // Replace with an actual loading condition
          >
            <p>Loading projects...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
