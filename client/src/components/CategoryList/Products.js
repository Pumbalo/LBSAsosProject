import styled from "styled-components";
import classes from "./Products.module.css";
import { Link } from "react-router-dom";

import FetchAPI from "../ProductFetch/FetchAPI";

import { useState } from "react";
import { useParams } from "react-router-dom";

import Dropdown from "./Dropdown/Dropdown";
import Redo from "../UI/Icons/Redo";
import Linear from "../UI/Progress/Linear";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  width: 100%;
  height: 100%;
  font-family: var(--font-family);

  span {
    cursor: default;
  }

  span a {
    color: ${(props) => props.theme.fontColor};
    text-decoration: none;
  }

  span a:hover {
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const BottomBar = styled.div`
  margin-top: 100px;
  width: 100%;
  box-shadow: var(--dp14-shadow);
  background-color: ${(props) => props.theme.secondaryBody};
`;

const LoadMoreApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: ${(props) => props.theme.fontColor};
    opacity: 0.8;
    font-family: var(--font-family);
    font-weight: var(--font-regular);
    font-size: 16px;
    letter-spacing: 1px;
    margin: 0;
  }

  button {
    color: ${(props) => props.theme.fontColor};
    font-family: var(--font-family);
    font-weight: var(--font-semibold);
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    outline: none;
    background: transparent;
    border: 1px solid ${(props) => props.theme.fontColor};
    border-radius: 4px;
    padding: 10px 40px;
    margin: 10px 50px;
    min-width: 245px;
  }
`;

const ClearBtn = styled.button`
  outline: none;
  font-family: var(--font-family);
  color: ${(props) => props.theme.fontColor};
  font-size: 16px;
  fill: ${(props) => props.theme.fontColor};
  border: 1px solid ${(props) => props.theme.fontColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  margin-top: 10px;
  background-color: transparent;

  svg {
    margin-right: 10px;
  }
`;

const Products = (props) => {
  const [offset, setOffset] = useState(0);
  const [itemCount, setItemCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [facets, setFacets] = useState();
  const [facetValue, setFacetValue] = useState();
  const [facetKey, setFacetKey] = useState();

  let params = useParams();

  const loadMoreHandler = () => {
    setOffset((offset) => offset + 48);
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 500);
  };

  const loadLessHandler = () => {
    setOffset(offset - 48);
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };

  const clearSortingHandler = () => {
    window.location.reload();
  };

  const pageChangeHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.container}>
      <StyledApp className={classes.container}>
        <div className={classes.top}>
          <div className={classes.location}>
            <span>
              <Link to="/">home</Link> / {params.type}
            </span>
          </div>
          <div className={classes.title}>
            <h1>{params.type}</h1>
          </div>
        </div>
        <BottomBar>
          <div className={classes.btn_container}>
            <ClearBtn type="button" onClick={clearSortingHandler}>
              <Redo /> Clear
            </ClearBtn>
          </div>
          <div className={classes.filter_grid_container}>
            {facets != null
              ? facets.map((filter) => (
                  <div className={classes.item}>
                    {filter.name !== "Price Range" ? (
                      <Dropdown
                        name={filter.name}
                        values={filter.facetValues}
                        facetKey={filter.id}
                        facetValue={(facetValue) => setFacetValue(facetValue)}
                        facetItemKey={(facetKey) => setFacetKey(facetKey)}
                      />
                    ) : null}
                  </div>
                ))
              : null}
          </div>
        </BottomBar>
      </StyledApp>
      <div className={classes.grid_container}>
        <FetchAPI
          offset={offset}
          items={(itemCount) => setItemCount(itemCount)}
          categoryId={params.id}
          facets={(facets) => setFacets(facets)}
          facetValue={facetValue}
          facetKey={facetKey}
        />
      </div>
      {Math.round(itemCount / 48) !== 0 ? (
        <LoadMoreApp className={classes.load_more__container}>
          <p>
            You have viewed page {currentPage} of {Math.round(itemCount / 48)}
          </p>
          <Linear
            current={currentPage}
            total={Math.round(itemCount / 48)}
            className={classes.progress}
          />
          <form onSubmit={pageChangeHandler}>
            {offset !== 0 ? (
              <button onClick={loadLessHandler} type="submit">
                Previous Page
              </button>
            ) : null}
            {currentPage !== Math.round(itemCount / 48) ? (
              <button onClick={loadMoreHandler} type="submit">
                Next Page
              </button>
            ) : null}
          </form>
        </LoadMoreApp>
      ) : null}
    </div>
  );
};

export default Products;
