
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Heart, BookmarkIcon } from 'lucide-react';
import StreakTracker from './StreakTracker';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <BookOpen className="h-8 w-8 text-brand-purple" />
                <span className="font-bold text-xl text-gray-900">CourseExplorer</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <StreakTracker />
              
              <nav className="flex space-x-2">
                <Link 
                  to="/" 
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === '/' 
                      ? 'bg-brand-purple text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Courses
                </Link>
                <Link 
                  to="/favorites" 
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 ${
                    location.pathname === '/favorites' 
                      ? 'bg-brand-purple text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Heart size={16} />
                  Favorites
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <footer className="bg-white py-6 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} CourseExplorer. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
