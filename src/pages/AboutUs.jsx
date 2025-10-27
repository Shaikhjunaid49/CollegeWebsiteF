import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Nav />
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-blue-700 mb-2">About Rajiv Gandhi College</h1>
            <p className="text-gray-600 text-lg">
              Located in Viduit Nagar, Anand Nagar, Nanded — Empowering students with quality education and practical skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Rajiv Gandhi College aims to deliver excellent academic learning along with holistic personality development.
                We focus on nurturing innovative thinking, leadership qualities, and a spirit of community service among our students.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                To be one of the leading educational institutions in Maharashtra that produces skilled professionals and responsible citizens contributing to national development.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Excellence in Education</li>
                <li>Integrity and Discipline</li>
                <li>Inclusiveness and Equality</li>
                <li>Innovation and Research</li>
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Contact Us</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-blue-600" /> Viduit Nagar, Anand Nagar, Nanded, Maharashtra</p>
                <p className="flex items-center gap-3"><FaPhoneAlt className="text-blue-600" /> +91 98765 43210</p>
                <p className="flex items-center gap-3"><FaEnvelope className="text-blue-600" /> info@rajivgandhicollege.edu.in</p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Follow Us</h3>
                <div className="flex gap-4 text-white">
                  <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700"><FaFacebookF /></a>
                  <a href="#" className="bg-blue-400 p-3 rounded-full hover:bg-blue-500"><FaTwitter /></a>
                  <a href="#" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700"><FaInstagram /></a>
                  <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-900"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center bg-blue-700 text-white py-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-3">Why Choose Rajiv Gandhi College?</h2>
            <p className="max-w-3xl mx-auto text-lg">
              With a legacy of academic excellence, dedicated faculty, and modern facilities, Rajiv Gandhi College continues to be a preferred destination for students aspiring for higher education and personal growth.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
