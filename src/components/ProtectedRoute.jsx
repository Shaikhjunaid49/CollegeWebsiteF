import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuth(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/users/home", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
          localStorage.removeItem("token"); // optional: remove invalid token
        }
      } catch (err) {
        setIsAuth(false);
        localStorage.removeItem("token");
      }
    };

    checkAuth();
  }, []);

  if (isAuth === null) {
    return <div>Loading...</div>; // or a spinner
  }

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
