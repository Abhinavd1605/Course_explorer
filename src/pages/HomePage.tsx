
import React, { useState, useEffect } from 'react';
import CourseCard from '@/components/CourseCard';
import SearchAndFilter from '@/components/SearchAndFilter';
import { coursesData, getAllTags } from '@/data/courses';
import { Course } from '@/types';
import Layout from '@/components/Layout';

const HomePage = () => {
  const [courses, setCourses] = useState<Course[]>(coursesData);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(coursesData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  
  // Initialize tags
  useEffect(() => {
    setAvailableTags(getAllTags());
  }, []);
  
  // Filter courses based on search term and selected tags
  useEffect(() => {
    let result = [...coursesData];
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        course => 
          course.title.toLowerCase().includes(term) || 
          course.description.toLowerCase().includes(term)
      );
    }
    
    // Filter by selected tags
    if (selectedTags.length > 0) {
      result = result.filter(course => 
        selectedTags.every(tag => course.tags.includes(tag))
      );
    }
    
    setFilteredCourses(result);
  }, [searchTerm, selectedTags]);
  
  // Force refresh on favorite toggle
  const handleFavoriteToggle = () => {
    // This will cause a re-render but not affect the filtered courses
  };
  
  return (
    <Layout>
      <div className="pb-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Courses</h1>
          <p className="text-gray-600">Discover and favorite courses to enhance your learning journey</p>
        </div>
        
        <SearchAndFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          availableTags={availableTags}
        />
        
        {filteredCourses.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} onFavoriteToggle={handleFavoriteToggle} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
