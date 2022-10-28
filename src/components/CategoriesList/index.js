/* eslint-disable camelcase */

import React, { Fragment, useEffect, useState } from "react";
import { Category } from "../Category";
import { CategoriesListContainer, CategoriesListUl } from "./styles";
import Item from "antd/lib/list/Item";
import { useQuery, gql } from "@apollo/client";

const withCategories = gql`
  query getCategories {
    categories {
      id
      name
      emoji
      cover
      path
    }
  }
`;

const CategoriesList = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { loading, error, data } = useQuery(withCategories);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = document.body.scrollTop > 300;
      setShowFixed(newShowFixed);
    };
    document.body.addEventListener("scroll", onScroll);
  }, []);

  const renderList = (fixed) => (
    <CategoriesListContainer fixed={fixed}>
      <CategoriesListUl>
        {data.categories.map((category) => (
          <Item key={category.id}>
            <Category
              cover={category.cover}
              path={category.path}
              emoji={category.emoji}
            />
          </Item>
        ))}
      </CategoriesListUl>
    </CategoriesListContainer>
  );

  if (error) {
    console.log(
      "🚀 ~ file: index.js ~ line 55 ~ CategoriesList ~ error",
      error
    );
    return <h2>Internal Server Error</h2>;
  }

  if (loading === true) {
    return (
      <CategoriesListContainer fixed={showFixed}>
        <CategoriesListUl>
          {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            <Item key={index}>
              <Category />
            </Item>
          ))}
        </CategoriesListUl>
      </CategoriesListContainer>
    );
  }

  return (
    <CategoriesListContainer fixed={showFixed}>
      <CategoriesListUl>
        {data.categories.map((category) => (
          <Item key={category.id}>
            <Category
              cover={category.cover}
              path={category.path}
              emoji={category.emoji}
            />
          </Item>
        ))}
      </CategoriesListUl>
    </CategoriesListContainer>
  );
};

export { CategoriesList };
