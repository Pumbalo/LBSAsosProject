import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import Product from "../Product";
import { useParams } from "react-router-dom";

import Loading from "../../UI/Progress/Circular";
import classes from "./FetchAPI.module.css";
import Axios from "axios";
const FetchAPI = (props) => {
  Axios.defaults.withCredentials = false;

  // Sätter initial loading state till false
  const [isLoading, setIsLoading] = useState(false);

  const [product, setProduct] = useState({});
  let linkParams = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v3/detail",
      params: {
        id: linkParams.productid,
        lang: "en-US",
        store: "US",
        sizeSchema: "US",
        currency: "USD",
      },
      headers: {
        "x-rapidapi-key": "8dde4b0400mshe33118a17798972p174f30jsne26022450645",
        "x-rapidapi-host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setProduct(response.data);
        setIsLoading(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Fragment>
          <Product
            name={product?.name}
            price={product?.price?.current?.value}
            brand={product?.brand?.description?.replace(/(<([^>]+)>)/gi, "")}
            brandName={product?.brand?.name}
            aboutMe={product?.info?.aboutMe?.replace(/(<([^>]+)>)/gi, " ")}
            careInfo={product?.info?.careInfo?.replace(/(<([^>]+)>)/gi, "")}
            sizeAndFit={product?.info?.sizeAndFit?.replace(/(<([^>]+)>)/gi, "")}
            media={product?.media?.images}
            mainImg={product?.media?.images[0]}
            sizes={product?.variants}
            categoryType={linkParams.type}
          />
        </Fragment>
      ) : (
        <div className={classes.loading_container}>
          <Loading title={`Loading Product`} />
        </div>
      )}
    </div>
  );
};

export default FetchAPI;
