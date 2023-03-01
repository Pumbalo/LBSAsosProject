import { Fragment } from "react";
import Footer from "../Footer/Footer";
import BottomNavigation from "../Navigation/BottomNavigation";
import TopNavigation from "../Navigation/TopNavigation";
import ProductContent from "./ProductContent";
import InformationContent from "./InformationContent";
import OtherProducts from "./OtherProducts";

const Product = (props) => {
  return (
    <Fragment>
      <TopNavigation />
      <BottomNavigation theme={props.theme} toggleTheme={props.toggleTheme} />
      <ProductContent
        name={props.name}
        price={props.price}
        brandName={props.brandName}
        media={props.media}
        catWalk={props.catWalk}
        mainImg={props.mainImg}
        sizes={props.sizes}
        categoryType={props.categoryType}
      />
      <InformationContent
        brand={props.brand}
        aboutMe={props.aboutMe}
        sizeAndFit={props.sizeAndFit}
        careInfo={props.careInfo}
      />
      <OtherProducts />
      <Footer />
    </Fragment>
  );
};

export default Product;
