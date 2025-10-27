// src/pages/Courses.jsx
import CourseCard from "../components/CourseCard";
import BCAImage from "../assets/BCA.png"; // Add your images
import BCSImage from "../assets/BCS.png";
import MSCImage from "../assets/MSC.png";
import MCAImage from "../assets/MCA.png";

const courses = [
  { id: 1, title: "BCA", description: "Bachelor of Computer Applications", image: BCAImage },
  { id: 2, title: "BCS", description: "Bachelor of Computer Science", image: BCSImage },
  { id: 3, title: "MSC", description: "Master of Science", image: MSCImage },
  { id: 4, title: "MCA", description: "Master of Computer Applications", image: MCAImage },
];

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map(course => (
          <CourseCard 
            key={course.id} 
            title={course.title} 
            description={course.description} 
            image={course.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
