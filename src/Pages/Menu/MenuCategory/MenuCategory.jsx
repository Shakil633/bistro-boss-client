import { Link } from "react-router-dom";
import Cover from "../../../Shear/Cover/Cover";
import MenuItem from "../../../Shear/MenuItem/MenuItem";

const MenuCategory = ({ items,title,img }) => {
  return (
    <div className=" mt-20 mb-10">
      {title && <Cover img={img} title={title}></Cover>}
      <div className=" grid grid-cols-2 gap-5 mt-10 mb-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

    <Link to={`/order/${title}`}>
    <button className="btn btn-outline border-0 border-b-4"> Order Now</button>
    </Link>
    </div>
  );
};

export default MenuCategory;
