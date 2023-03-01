import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import ProductCard from "../UI/ProductCard/ProductCard";
import { useParams, useHistory } from "react-router-dom";

const FetchAPI = (props) => {
  const [product, setProducts] = useState([]);

  let params = useParams();
  let history = useHistory();

  useEffect(() => {
    let min = 0;
    let max = Math.floor(100 / 10);
    let randomOffset = Math.floor(min + Math.random() * (max + 1 - min));
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: randomOffset,
        categoryId: params.id,
        limit: 5,
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "x-rapidapi-key": "202b38878fmsh50dbc4c475e6d98p1c84bbjsnb086cc254106",
        "x-rapidapi-host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [params.productid]);

  const productClickHandler = (event) => {
    // Tar parameters från url.
    let categoryType = params.type;
    let categoryId = params.id;
    // Tar "productId" från produkten man klickar på.
    let productId = event.currentTarget.getAttribute("datakey");
    // Skickar dig till detaljerad produkt sidan.
    history.push(`/category/${categoryType}/${categoryId}/${productId}`);
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      {product.map((product) => (
        <ProductCard
          key={product.id}
          dataKey={product.id}
          img={product.imageUrl}
          name={product.name}
          price={product.price.current.text}
          onClick={productClickHandler}
        />
      ))}
    </Fragment>
  );
};

export default FetchAPI;
