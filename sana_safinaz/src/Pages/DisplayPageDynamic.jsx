import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
import { ShopContext } from "../Components/Context/Context";
import "./CSS/DisplayPageDynamic.css";

const DisplayPageDynamic = () => {
  const location = useLocation();
  const path = location.pathname;
  const lastSegment = path.substring(path.lastIndexOf("/") + 1);
  const { products } = useContext(ShopContext);
  const filterProducts = products.filter(
    (product) => product.sub_category === lastSegment
  );
  return (
    <div className="dynamic-display-main">
      {!filterProducts.length === 0 ? (
        <div className="no-products">
          <h2>Product not available</h2>
        </div>
      ) : (
        <div>
          {filterProducts // ✅ Filter products correctly
            .map((product, key) => (
              <div key={key}>
                <Banner
                  className="Banner"
                  banner={product.back_image}
                  height="550px"
                  title={""}
                />
                <div className="Main-Body">
                  <Link
                    to={`/item-detail/${product.id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Item
                      className="Item"
                      image={product.img1}
                      title={product.name}
                      price={product.new_price}
                    />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DisplayPageDynamic;
