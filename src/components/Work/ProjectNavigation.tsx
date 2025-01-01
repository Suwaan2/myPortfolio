import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectNavigationProps {
  currentIndex: number;
  totalProjects: number;
  onPrev: () => void;
  onNext: () => void;
}

export function ProjectNavigation({ 
  currentIndex, 
  totalProjects, 
  onPrev, 
  onNext 
}: ProjectNavigationProps) {
  return (
    <div className="flex items-center justify-between sm:justify-center space-x-4 mb-8">
      {/* Previous Button */}
      <button
        onClick={onPrev}
        className="p-3 bg-navy-800 hover:bg-navy-700 text-white rounded-lg transition-colors"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Index Text */}
      <span className="text-white font-medium text-lg sm:text-xl">
        {String(currentIndex + 1).padStart(2, '0')}/{String(totalProjects).padStart(2, '0')}
      </span>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="p-3 bg-navy-800 hover:bg-navy-700 text-white rounded-lg transition-colors"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
