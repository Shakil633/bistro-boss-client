import SectionTitle from "../../../Components/SectionTitile/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed  text-white my-20 ">
      <div className=" bg-slate-600 bg-opacity-40 pt-2">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>

        <div className=" flex justify-center items-center pb-20 pt-10 px-36 gap-5">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div>
            <p> March 20, 2023</p>
            <p className=" uppercase">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4">Default</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
