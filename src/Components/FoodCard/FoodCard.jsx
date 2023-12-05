import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseCart from "../../Hooks/UseCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = UseCart();

  // user ke niya tar email ar modhe data rakhbo
  const { user } = useContext(AuthContext);

  const handleAddedToCard = () => {
    // user jodi login theke tahole tar data database a dibo
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart update the cart items counts
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send  the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img className=" h-[250px] w-full" src={image} alt="" />
        </figure>
        <p className=" absolute right-0 bg-black px-6 py-1  text-white mt-2 mr-3 rounded">
          {price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={handleAddedToCard}
              className="btn btn-outline bg-slate-300 border-0 border-orange-400 border-b-4"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
