
import "./Courses.css"; 

const CourseCard = ({ image, title, description }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-info">
        <h4 className="course-title">{title}</h4>
        <p className="course-description">{description}</p>
        <button className="btnStartWatching">Start Watching</button>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <div className="courses-container">
      <CourseCard
        image="/react-project-image.png"
        title="Python Tutorials - 100 Days of Code"
        description="Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python."
      />
      <CourseCard
        image="/react-project-image.png"
        title="Ultimate JavaScript Course"
        description="This latest JavaScript course comes with premium curriculum that covers everything from basics to advance."
      />
      <CourseCard
        image="/react-project-image.png"
        title="React JS Tutorials For Beginners"
        description="React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end."
      />
    </div>
  );
};

export default Courses;
