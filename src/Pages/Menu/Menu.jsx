import { Helmet } from "react-helmet-async";
import Cover from "../../Shear/Cover/Cover";

import menuIng from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";


import useMenu from "../../Hooks/HookMenu";
import SectionTitle from "../../Components/SectionTitile/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      
      <Cover img={menuIng} title={"Our Menu"}></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory items={dessert} img={dessertImg} title={'dessert'}></MenuCategory>

      {/* pizza menu item */}
      <MenuCategory items={pizza} img={pizzaImg} title={'pizza'}></MenuCategory>
      {/* salad menu item */}
      <MenuCategory items={salad} img={saladImg} title={'salad'}></MenuCategory>
      {/* soup menu item */}
      <MenuCategory items={soup} img={soupImg} title={'soup'}></MenuCategory>
    </div>
  );
};

export default Menu;
