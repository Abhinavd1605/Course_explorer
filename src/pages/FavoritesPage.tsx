
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookmarkIcon } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import { coursesData } from '@/data/courses';
import { Course } from '@/types';
import { getFavorites } from '@/utils/localStorage';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const FavoritesPage = () => {
  const [favoriteCourses, setFavoriteCourses] = useState<Course[]>([]);
  
  // Load favorite courses
  const loadFavorites = () => {
    const favoriteIds = getFavorites();
    const favorites = coursesData.filter(course => favoriteIds.includes(course.id));
    setFavoriteCourses(favorites);
  };
  
  useEffect(() => {
    loadFavorites();
  }, []);
  
  // Reload favorites when a course is unfavorited
  const handleFavoriteToggle = () => {
    loadFavorites();
  };
  
  return (
    <Layout>
      <div className="pb-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Favorite Courses</h1>
          <p className="text-gray-600">Your bookmarked courses for easy access</p>
        </div>
        
        {favoriteCourses.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex justify-center items-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <BookmarkIcon className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No favorites yet</h3>
            <p className="text-gray-500 mb-6">You haven't added any courses to your favorites</p>
            <Button asChild>
              <Link to="/" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse Courses
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteCourses.map(course => (
              <CourseCard key={course.id} course={course} onFavoriteToggle={handleFavoriteToggle} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FavoritesPage;
