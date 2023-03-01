import { Fragment, React } from "react";

// Navigation
import BottomNavigation from "../Navigation/BottomNavigation";
import TopNavigation from "../Navigation/TopNavigation";

// Image Slider
import ImageSlider from "../ImageSlider/ImageSlider";

// Grid
import Grid from "../Grid/Grid";

// Best Seller
import BestSeller from "../BestSeller/BestSeller";

// Collection Promo
import CollectionPromo from "../CollectionPromo/CollectionPromo";

// Instagram
import Instagram from "../Instagram/Instagram";

// Footer
import Footer from "../Footer/Footer";

const Home = (props) => {
  return (
    <Fragment>
      <TopNavigation />
      <BottomNavigation theme={props.theme} toggleTheme={props.toggleTheme} />
      <ImageSlider />
      <Grid />
      <BestSeller />
      <CollectionPromo />
      <Instagram />
      <Footer />
    </Fragment>
  );
};

export default Home;
