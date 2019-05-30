import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProducts, addCaffeine } from "../../actions";

import Product from "../Product";

import "./style.scss";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    // this.state = { counter: 0 };
    this.renderProducts = this.renderProducts.bind(this);
    this.startover = this.startover.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  renderProducts() {
    const { products } = this.props;
    console.log("eee", products);
    return products.map((item, index) => {
      //console.log(item)
      return <Product key={item.name + index} data={item} />;
    });
  }

  startover() {
    const { addCaffeine } = this.props;
    localStorage.setItem("caffeine", 0);
    addCaffeine(0);
  }
  render() {
    const { isFetching, products, caffeine } = this.props;

    return (
      <div className="content">
        {isFetching && !products.length ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                color: "#fff",
                fontWeight: 700
              }}
            >
              {caffeine >= 500
                ? `Warning You have exceeded the caffeine dose, ${caffeine}mg`
                : `Caffeine ${caffeine}mg in your body `}

              {caffeine >= 500 ? (
                <a
                  className="product-slider__cart"
                  onClick={() => {
                    this.startover();
                  }}
                >
                  {"Start over"}
                </a>
              ) : null}
            </div>
            <div className="list">{this.renderProducts()}</div>
          </div>
        )}
      </div>
    );
  }
}

ProductList.defaultProps = {
  fetchProducts: () => void 0,
  products: [],
  isFetching: true
};

ProductList.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array,
  isFetching: PropTypes.bool
};

/*
const test = (data) => {
    console.log('test', data)
    return data
}
*/

const mapStateToProps = state => ({
  products: state.emporium.products,
  isFetching: state.isFetching,
  caffeine: state.emporium.caffeine
});

export default connect(
  mapStateToProps,
  { fetchProducts, addCaffeine }
)(ProductList);
