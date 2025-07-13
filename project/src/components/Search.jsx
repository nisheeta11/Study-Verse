import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import search from '../assets/searchicon.svg';
import coursesData from '../Data/CourseData';

const allCourses = Object.values(coursesData).flat();

const generate3Grams = (input) => {
  const grams = [];
  const query = input.toLowerCase();
  if (query.length < 3) {
    grams.push(query);
  } else {
    for (let i = 0; i <= query.length - 3; i++) {
      grams.push(query.slice(i, i + 3));
    }
  }
  return grams;
};

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (!input.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const grams = generate3Grams(input);

    const matches = allCourses.filter(course => {
      const title = course.title.toLowerCase();
      const description = course.description.toLowerCase();
      return grams.some(gram => title.includes(gram) || description.includes(gram));
    });

    setResults(matches);
    setShowDropdown(true);
  };

  const handleSearchClick = () => {
    const queryLower = query.trim().toLowerCase();
    if (!queryLower) return;

    // Find course with exact title match or partial title match
    const foundCourse = allCourses.find(course =>
      course.title.toLowerCase() === queryLower
    ) || allCourses.find(course =>
      course.title.toLowerCase().includes(queryLower)
    );

    if (foundCourse) {
      navigate(`/course/${foundCourse.id}`);
    } else {
      alert('No matching course found.');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (title) => {
    setQuery(title);
    setShowDropdown(false);
  };

  return (
    <div className="search-container" ref={containerRef}>
      <div className="search-box">
        <div className="input-container">
          <input
            type="text"
            placeholder="Search courses..."
            className="search-input"
            value={query}
            onChange={handleInputChange}
            onFocus={() => query && results.length > 0 && setShowDropdown(true)}
            autoComplete="off"
          />

          {showDropdown && (
            <div className="search-dropdown">
              {results.length > 0 ? (
                results.map(course => (
                  <div
                    key={course.id}
                    className="dropdown-item"
                    onClick={() => handleSelect(course.title)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSelect(course.title);
                    }}
                  >
                    {course.title}
                  </div>
                ))
              ) : (
                <div className="dropdown-item no-results">No matching courses found.</div>
              )}
            </div>
          )}
        </div>

        <button
          className="search-btn"
          onClick={handleSearchClick}
          aria-label="Search"
          type="button"
        >
          <img className="search-icon" src={search} alt="search icon" />
        </button>
      </div>
    </div>
  );
};

export default Search;
