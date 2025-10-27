import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch("http://localhost:5000/teachers/getTeachers");
        const data = await res.json();
        setTeachers(data);
      } catch (err) {
        console.error("Error fetching teachers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Loading teachers...
      </div>
    );
  }

  return (
    <>
    <Nav />
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-indigo-600">
        Our Faculty Members
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {teachers.map((teacher) => (
          <div
            key={teacher._id}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {/* Random avatar using name */}
              <img
                src={`https://api.dicebear.com/9.x/initials/svg?seed=${teacher.name}`}
                alt={teacher.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-500"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {teacher.name}
              </h2>
              <p className="text-indigo-600 font-medium mt-1">
                {teacher.subject}
              </p>
              <p className="text-gray-500 text-sm mt-1">{teacher.email}</p>
              <p className="text-gray-400 text-sm mt-1">
                📞 {teacher.phone || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Teachers;
