import { useEffect, useState } from "react";
import "./App.css";
import { FaHome } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Courses from "./Components/CourseCard.jsx";
import Footer from "./Components/Footer.jsx";


function Header() {
  const [searchText, setSearchText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSearchClick = () => {
    setIsVisible(true);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <h1>&lt;/&gt; CodeThunder</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Tutorial</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Notes</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">My Gear</a></li>
            <li><a href="#">Work With Us</a></li>
            <div className="auth-buttons">
              <button className="login">Login</button>
              <button className="signup">Signup</button>
            </div>
          </ul>
        </nav>
      </header>
      <div className="subHeader">
        <div className="homeLogo">
          <FaHome />
        </div>
        <nav className="nav">
          <ul className="language-list">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JS</a></li>
            <li><a href="#">C</a></li>
            <li><a href="#">C++</a></li>
            <li><a href="#">JAVA</a></li>
            <li><a href="#">PYTHON</a></li>
            <li><a href="#">PHP</a></li>
            <li><a href="#">REACT JS</a></li>
          </ul>
        </nav>
        <div className="search-container">
          {isVisible && (
            <input
              className="search-input"
              type="text"
              value={searchText} 
              onChange={handleInputChange}
              placeholder="Search..."
            />
          )}
          <IoIosSearch className="search-icon" onClick={handleSearchClick} />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  const courses = [
    "Artificial Intelligence",
    "Data Science",
    "Blockchain",
    "Cyber Security",
    "Cloud Computing",
  ];
  const typingSpeed = 25;
  const deletingSpeed = 25;
  const delayBetweenCourses = 2000;

  const [currentCourse, setCurrentCourse] = useState("");
  const [courseIndex, setCourseIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullCourseName = courses[courseIndex];

      if (!isDeleting && currentIndex < fullCourseName.length) {
        setCurrentCourse(prev => prev + fullCourseName.charAt(currentIndex));
        setCurrentIndex(prev => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        setCurrentCourse(fullCourseName.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
      } else if (!isDeleting && currentIndex === fullCourseName.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenCourses);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCourseIndex(prev => (prev + 1) % courses.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentCourse, currentIndex, isDeleting, courseIndex, courses]);

  return (
    <div className="main-content">
      <h2>
        Welcome to <span className="highlight">CodeThunder</span>
      </h2>
      <h3>
        <span className="flexLearn">Learn </span>
        <span className="highlight">
          {currentCourse}
          <span className="blinking-cursor"></span>
        </span>
      </h3>
      <p>
        Confused on which course to take? I have got you covered. Browse courses
        and find out the best course for you. It's free! Code With Harry is my
        attempt to teach basics and those coding techniques to people in short
        time which took me ages to learn.
      </p>
      <div className="buttons">
        <button className="free-courses">Free Courses</button>
        <button className="explore-blog">Explore Blog</button>
      </div>
    </div>
  );
}

function RecommendedCourses() {
  return (
    <div className="recommended-courses">
      <h3>Recommended Courses</h3>
      {/* You can add course components here */}
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <RecommendedCourses />
      <Courses/>
      <Footer/>
    </div>
  );
}

export default App;
