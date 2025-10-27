import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/courses/getCourses");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      <Nav />
      <div className="p-8 bg-[#faf9f6] min-h-screen">
        <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Available Courses
        </h1>

        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {courses.map((course) => {
            const imagePath = `/images/${course.title}.png`;

            return (
              <div
                key={course._id}
                className="bg-white shadow-md rounded-lg p-6 md:flex items-start gap-8 hover:shadow-lg transition"
              >
                {/* Left: Image */}
                <img
                  src={imagePath}
                  alt={course.title}
                  className="w-full md:w-1/3 h-64 object-contain bg-[#f8f8f8] rounded-md"
                  onError={(e) => (e.target.src = "/images/default.png")}
                />

                {/* Right: Content */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">
                    {course.title}
                  </h2>
                  <p className="text-lg font-medium text-gray-600 mb-4">
                    {course.subtitle || "B.Sc (CS)"}
                  </p>

                  <div className="text-gray-700 space-y-3 leading-relaxed">
                    <p>
                      <span className="font-semibold">Introduction:</span>{" "}
                      {course.description}
                    </p>
                    <p>
                      <span className="font-semibold">Eligibility:</span>{" "}
                      {course.eligibility ||
                        "Should have passed 10+2 with required marks."}
                    </p>
                    <p>
                      <span className="font-semibold">Duration:</span>{" "}
                      {course.duration}
                    </p>
                    {course.syllabus && (
                      <p>
                        <span className="font-semibold">Syllabus:</span>{" "}
                        {course.syllabus}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
