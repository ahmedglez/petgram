import React, {Fragment} from "react";
import CategoriesList from "../components/CategoriesList";
import Feed from "../container/Feed";


const Home = ({id}) => {
  return (
    <div>
      <Fragment>
        <CategoriesList />
        <Feed categoryId={id} />
      </Fragment>
    </div>
  );
};

export default Home;
