/* eslint-disable camelcase */

import React, { Fragment, useEffect, useState } from "react";
import { Category } from "../Category";
import Loading_Pic from "../../assets/gift/category_animation_loader.avif";
import {
  CategoriesListContainer,
  CategoriesListUl,
  CategoriesListItem,
} from "./styles";
import Item from "antd/lib/list/Item";
import { Spin } from "antd";

const CategoriesList = () => {
  const [showFixed, setShowFixed] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window
      .fetch("https://petgram-server-ahmed.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

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
        {categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))}
      </CategoriesListUl>
    </CategoriesListContainer>
  );

  const loadingList = () => (
    <CategoriesListContainer>
      <CategoriesListUl>
        {[0, 1, 2, 3, 4].map((category) => (
          <CategoriesListItem key={category.id}>
            <Category cover={Loading_Pic} emoji='' />
          </CategoriesListItem>
        ))}
      </CategoriesListUl>
    </CategoriesListContainer>
  );

  if (loading === true) {
    return loadingList();
  }

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};

export { CategoriesList };
