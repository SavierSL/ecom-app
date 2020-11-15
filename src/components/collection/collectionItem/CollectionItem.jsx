import React from "react";
import Button from "../../customButton/Button";
import classes from "../collectionItem/CollectionItem.scss";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart/CartActions";
const collectionItem = (props) => {
  const { imageUrl, name, price } = props.item;
  const { addItem } = props;
  return (
    <div className="container">
      <div
        className="bg"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="detail-container">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <div className="add">
        <Button onClick={() => addItem(props.item)}>ADD TO CART</Button>
      </div>
    </div>
  );
};
const mapsDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapsDispatchToProps)(collectionItem);
