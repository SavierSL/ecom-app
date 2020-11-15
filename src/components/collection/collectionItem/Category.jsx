import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../../redux/shop/ShopSelector";
import Collections from "../collectionData/Collections";

const shopCategory = ({ data }) => {
  return (
    <div className="item-category">
      {data.map(({ id, ...all }) => (
        <Collections key={id} {...all} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  data: selectShopData,
});
export default connect(mapStateToProps)(shopCategory);
