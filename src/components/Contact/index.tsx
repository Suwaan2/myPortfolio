import { Github, Instagram } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Let's talk!
            </h2>
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070"
              alt="Contact illustration"
              className="w-full max-w-xs sm:max-w-md mx-auto"
            />
          </div>

          {/* Right Section */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <p className="text-gray-400 mb-4 lg:mb-0">© 2024 Suan KC</p>
          <div className="flex justify-center lg:justify-end space-x-4">
            <a
              href="https://github.com/Suwaan2"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/kcsuwaan/"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
