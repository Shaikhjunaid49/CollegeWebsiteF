// src/components/CourseCard.jsx
const CourseCard = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
      <img className="w-full h-40 object-cover" src={image} alt={title} />
      <div className="p-5">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Enroll Now
        </button>
      </div>
    </div>
    
  );
};

export default CourseCard;
