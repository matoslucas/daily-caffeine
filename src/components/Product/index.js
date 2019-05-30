import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCaffeine } from "../../actions";

import Details from "./Details";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.getPropValue = this.getPropValue.bind(this)
    this.drink = this.drink.bind(this)
  }
  /*
    componentDidMount() {
        const { location } = this.props
        console.log(this.props,
            '====',
            resolve('location.search', this.props))
    }
    */
  showDetails(props) {
    return resolve("location.search", props);
  }

  getPropValue(value) {
    const { data, product } = this.props;

    if (data) return data[value];
    if (product) return product[value];
  }

  drink(value) {
    
    const { addCaffeine } = this.props
    const total = parseInt(localStorage.getItem("caffeine")) + parseInt(value);
    localStorage.setItem("caffeine", total);
    addCaffeine(total)
  }

  renderProduct() {
    const caffeine = this.getPropValue("caffeine");

    return (
      <div
        className={
          this.showDetails(this.props)
            ? "product-slider__item_detail"
            : "product-slider__item"
        }
      >
        <div className="product-img">
          <div className="product-img__item" id="img1">
            <img
              src={require("../../img/" + this.getPropValue("name") + ".png")}
              alt="caffe"
              className="product-img__img"
            />
          </div>
        </div>

        <div className="product-slider__card">
          <img
            src={require("../../img/cafeBg.jpg")}
            alt="caffe"
            className="product-slider__cover"
          />
          <div className="product-slider__content">
            <h1 className="product-slider__title">
              {this.getPropValue("name")}
            </h1>
            <span className="product-slider__price">{caffeine + " mg"}</span>
            {this.showDetails(this.props) ? (
              <Details data={this.getPropValue("description")} />
            ) : null}

            <div className="product-slider__bottom">
              <a
                className="product-slider__cart"
                onClick={() => {
                  this.drink(caffeine);
                }}
              >
                {"Drink"}
              </a>

              <button className="product-slider__fav js-fav">
                <span className="heart" /> {this.getPropValue("description")}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
      //console.log(this.props)
    return this.showDetails(this.props) ? (
      <div className="list">{this.renderProduct()}</div>
    ) : (
      this.renderProduct()
    );
  }
}

Product.defaultProps = {
  product: {}
};

Product.propTypes = {
  product: PropTypes.object
};

/*
const test = (data) => {
    console.log('test', data)
    return data
}
*/

const filterByProductName = (name, products) => {
  return products.filter(p => p.name === name)[0];
};

const resolve = (path, obj) => {
  return path.split(".").reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, obj);
};

const mapStateToProps = (state, ownProps) => ({
  product: filterByProductName(
    resolve("match.params.id", ownProps),
    state.emporium.products
  )
  //products: state.emporium.products,
});
// export default Product
export default connect(mapStateToProps,  { addCaffeine })(Product);
