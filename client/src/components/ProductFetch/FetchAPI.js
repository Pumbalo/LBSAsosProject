import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import ProductCard from "../UI/ProductCard/ProductCard";
import { useParams, useHistory } from "react-router-dom";

import Loading from "../UI/Progress/Circular";

import classes from "./FetchAPI.module.css";

import Axios from "axios";

const FetchAPI = (props) => {
  Axios.defaults.withCredentials = false;

  // Sätter initial loading state till false
  const [isLoading, setIsLoading] = useState(false);

  let linkParams = useParams();
  let history = useHistory();
  const [product, setProducts] = useState([]);
  let facetValue = props.facetValue;
  let facetKey = props.facetKey;

  // Sätter initial parameters
  const [params, setParams] = useState({
    store: "US",
    categoryId: props.categoryId,
    limit: 48,
    country: "US",
    sort: "freshness",
    currency: "USD",
    sizeSchema: "US",
    lang: "en-US",
  });

  useEffect(() => {
    // skapar ett nytt objekt 'requestParam' som sedan tar all data från params samt lägger
    // till offset & limit: Detta är tex produkt 0-48, eller produkt 100-142, osv.
    let requestParam = {
      ...params,
      offset: props.offset,
    };
    // om FacetKey inte är undefined.
    if (facetKey) {
      // Lägger till Key och Value från "sorting dropdown"
      requestParam = {
        [facetKey]: facetValue,
        ...params,
      };
      // Sätter param till requestParam så de sparar värdet ifall användaren sorterar på olika sätt.
      setParams({ ...requestParam });
    }

    // Sätter standard värden på api call.
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: requestParam,
      headers: {
        "x-rapidapi-key": "8dde4b0400mshe33118a17798972p174f30jsne26022450645",
        "x-rapidapi-host": "asos2.p.rapidapi.com",
      },
    };
    // Axios fetchar api
    axios
      .request(options)
      .then(function (response) {
        setProducts(response.data.products);
        props.items(response.data.itemCount);
        props.facets(response.data.facets);
        setIsLoading(true);
      })
      .catch(function (error) {
        console.error(error);
      });
    // Detta körs endast ifall props.limit eller facetKey har fått nytt värde.
  }, [props.offset, facetKey]);

  const productClickHandler = (event) => {
    // Tar parameters från url.
    let categoryType = linkParams.type;
    let categoryId = linkParams.id;
    // Tar "productId" från produkten man klickar på.
    let productId = event.currentTarget.getAttribute("datakey");
    // Skickar dig till detaljerad produkt sidan.
    history.push(`/category/${categoryType}/${categoryId}/${productId}`);
  };

  return (
    <div>
      <div className={classes.container}>
        {isLoading ? (
          <Fragment>
            {product.map((product) => (
              <ProductCard
                key={product.id}
                datakey={product.id}
                img={product.imageUrl}
                name={product.name}
                price={product.price.current.text}
                onClick={productClickHandler}
                productId={product.id}
              />
            ))}
          </Fragment>
        ) : (
          <Loading className={classes.loading} title="Loading Products" />
        )}
      </div>
    </div>
  );
};

export default FetchAPI;
