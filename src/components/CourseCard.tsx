import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Course } from '@/types';
import { toggleFavorite, isFavorite } from '@/utils/localStorage';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface CourseCardProps {
  course: Course;
  onFavoriteToggle?: () => void;
}

const CourseCard = ({ course, onFavoriteToggle }: CourseCardProps) => {
  const [favorite, setFavorite] = useState<boolean>(isFavorite(course.id));

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newStatus = toggleFavorite(course.id);
    setFavorite(newStatus);
    
    if (onFavoriteToggle) {
      onFavoriteToggle();
    }
    
    toast(newStatus ? "Added to favorites" : "Removed from favorites", {
      description: course.title,
      duration: 2000
    });
  };

  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div 
          className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handleFavoriteClick}
        >
          <Heart 
            size={20} 
            className={favorite ? "fill-brand-purple text-brand-purple" : "text-gray-500"} 
          />
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center mb-2">
          <Badge className="bg-brand-indigo hover:bg-brand-indigo/90">{course.level}</Badge>
          <span className="ml-auto text-sm text-gray-500">{course.duration}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{course.description}</p>
        
        <div className="mt-2">
          <p className="text-sm text-gray-700 mb-2">Instructor: {course.instructor}</p>
          <div className="flex flex-wrap gap-1">
            {course.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="outline" className="text-xs bg-gray-100">
                {tag}
              </Badge>
            ))}
            {course.tags.length > 3 && (
              <Badge variant="outline" className="text-xs bg-gray-100">
                +{course.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
