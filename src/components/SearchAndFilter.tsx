
import React from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface SearchAndFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  availableTags: string[];
}

const SearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  selectedTags,
  setSelectedTags,
  availableTags
}: SearchAndFilterProps) => {
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder="Search courses by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10 py-6 w-full rounded-lg border-gray-300 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
        />
        {searchTerm && (
          <button 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={clearSearch}
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-gray-700">Filter by tags:</h3>
          {(selectedTags.length > 0 || searchTerm) && (
            <button 
              className="text-sm text-brand-purple hover:text-brand-indigo"
              onClick={clearAllFilters}
            >
              Clear all filters
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {availableTags.map(tag => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className={`
                cursor-pointer 
                ${selectedTags.includes(tag) 
                  ? 'bg-brand-purple hover:bg-brand-purple/90' 
                  : 'hover:bg-gray-100'
                }
              `}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
              {selectedTags.includes(tag) && (
                <X className="ml-1" size={14} />
              )}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
