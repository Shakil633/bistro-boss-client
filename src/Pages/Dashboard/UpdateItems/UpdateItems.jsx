import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitile/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { LuUtensils } from "react-icons/lu";
import UserAxiosPublic from "../../../Hooks/UserAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// image used korar jonno
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItems = () => {
  const {name,category,recipe,price,_id} = useLoaderData();

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = UserAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    //image upload to imagebb and the get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);

    if (res.data.success) {
      //now send the menu item data to the server with the image url

      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);

      if (menuRes.data.modifiedCount > 0) {
        console.log(menuRes.data);
        //show success popup
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${data.name} is update to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Update an Item"}
        subHeading={"Refresh Item"}
      ></SectionTitle>

    
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Recipe Name*</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                placeholder="Recipe Name"
                {...register("name", { required: true, maxLength: 20 })}
                className="input input-bordered w-full"
              />
            </div>
            <div className=" flex gap-5">
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select
                  defaultValue={category}
                  {...register("gender", { required: true, maxLength: 20 })}
                  className="select select-bordered w-full"
                >
                  <option disabled value={"default"}>
                    Select a Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drink">Drink</option>
                </select>
              </div>
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  defaultValue={price}
                  {...register("price", { required: true, maxLength: 20 })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details</span>
              </label>
              <textarea defaultValue={recipe}
                {...register("recipe", { required: true, maxLength: 20 })}
                className="textarea textarea-bordered h-24"
                placeholder="Text Here"
              ></textarea>
            </div>
            <div className=" mt-5">
              <input
                {...register("image")}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>

            <button className="btn mt-5">
              Update Menu Item <LuUtensils />
            </button>
          </form>
        </div>
      </div>
    
  );
};

export default UpdateItems;
