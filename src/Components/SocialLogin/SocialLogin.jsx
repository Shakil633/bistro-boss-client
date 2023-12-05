import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import UserAxiosPublic from "../../Hooks/UserAxiosPublic";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSingIn } = useContext(AuthContext);
  const axiosPublic = UserAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSingIn = () => {
    googleSingIn()
      .then((results) => {
        console.log(results.user);

        const userInfo = {
          email: results.user?.email,
          name: results.user?.displayName,
        };

        axiosPublic.post("/users", userInfo)
        .then((res) => {
          console.log(res.data);
          navigate("/");
        });
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSingIn} className="btn  btn-neutral">
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
