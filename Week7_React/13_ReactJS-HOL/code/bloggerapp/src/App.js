import React, { useState } from 'react';
import './App.css';


const BookDetails = () => {
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const synopsis = "This is a captivating story about adventure, discovery, and the human spirit. It follows the journey of a young hero who overcomes great odds to find their true destiny in a world full of magic and mystery.";

  return (
      <div className="detail-card">
        <h2>Book Details: The Lost Artifact</h2>
        <p>Author: Jane Doe</p>
        <hr />
        <h3>Synopsis</h3>

        <p>
          {showFullSynopsis
              ? synopsis
              : `${synopsis.substring(0, 100)}...`}
        </p>
        <button className="btn" onClick={() => setShowFullSynopsis(!showFullSynopsis)}>
          {showFullSynopsis ? 'Show Less' : 'Read More'}
        </button>
      </div>
  );
};

const BlogDetails = () => {
  const isNewPost = true;
  const comments = ['Great article!', 'Very insightful, thanks for sharing.'];


  return (
      <div className="detail-card">
        <h2>
          Blog Post: The Future of React

          {isNewPost && <span className="new-badge">New!</span>}
        </h2>
        <p>Posted on: August 2, 2025</p>
        <hr />
        <h3>Comments</h3>

        {(() => {
          if (comments.length > 0) {
            return (
                <ul>
                  {comments.map((comment, index) => (
                      <li key={index}>{comment}</li>
                  ))}
                </ul>
            );
          } else {
            return <p>No comments yet. Be the first to comment!</p>;
          }
        })()}
      </div>
  );
};


const CourseDetails = () => {
  const difficulty = 'Intermediate';

  const renderCourseContent = () => {
    switch (difficulty) {
      case 'Beginner':
        return <p>This course covers the basics. No prior knowledge needed.</p>;
      case 'Intermediate':
        return <p>This course is for those with some experience. We will dive deeper into core concepts.</p>;
      case 'Advanced':
        return <p>This course is for experts. We will cover complex topics and advanced techniques.</p>;
      default:
        return <p>Course difficulty not specified.</p>;
    }
  };

  return (
      <div className="detail-card">
        <h2>Course Details: Mastering JavaScript</h2>
        <p>Instructor: John Smith</p>
        <hr />
        <h3>Difficulty: {difficulty}</h3>
        {/*
        SWITCH STATEMENT (inside a function):
        Ideal for handling multiple distinct conditions based on a single value.
        The function `renderCourseContent` is called to get the correct JSX.
      */}
        {renderCourseContent()}
      </div>
  );
};


function App() {
  const [activeView, setActiveView] = useState('book'); // 'book', 'blog', or 'course'

  const components = {
    book: <BookDetails />,
    blog: <BlogDetails />,
    course: <CourseDetails />,
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Blogger App</h1>
          <nav>
            <button className={`nav-btn ${activeView === 'book' ? 'active' : ''}`} onClick={() => setActiveView('book')}>Book Details</button>
            <button className={`nav-btn ${activeView === 'blog' ? 'active' : ''}`} onClick={() => setActiveView('blog')}>Blog Details</button>
            <button className={`nav-btn ${activeView === 'course' ? 'active' : ''}`} onClick={() => setActiveView('course')}>Course Details</button>
          </nav>
        </header>
        <main className="container">

          {components[activeView]}
        </main>
      </div>
  );
}

export default App;
