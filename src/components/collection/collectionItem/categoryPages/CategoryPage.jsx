import React from "react";
import CollectionItem from "../CollectionItem";
import { connect } from "react-redux";
import { selectShopId } from "../../../../redux/shop/ShopSelector";
import classes from "../categoryPages/CategoryPage.scss";

const categoryPage = ({ match, collection }) => {
  console.log(match.params.categoryId);

  const { items, title } = collection[0];

  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownprops) => ({
  collection: selectShopId(ownprops.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(categoryPage);
