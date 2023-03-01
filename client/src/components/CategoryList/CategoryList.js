import Footer from "../Footer/Footer";
import BottomNavigation from "../Navigation/BottomNavigation";
import TopNavigation from "../Navigation/TopNavigation";
import Products from "./Products";

const CategoryList = (props) => {
  return (
    <div>
      <TopNavigation />
      <BottomNavigation theme={props.theme} toggleTheme={props.toggleTheme} />
      <Products />
      <Footer />
    </div>
  );
};

export default CategoryList;
