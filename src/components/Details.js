import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, title, company, price, info, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">

                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Modal : {title}</h2>

                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made by : <span className="text-uppercase">{company}</span>
                  </h4>

                  <h4 className="text-blue">
                    <strong>Price : <span>$</span> {price}</strong>
                  </h4>

                  <p className="text-capitalize font-wwight-bold mt-3 mb-0">
                    Some Information about Product:
                  </p>
                  <p className="text-muted lead">{info}</p>

                  {/* button */}
                  <div>
                    <Link to='/'>
                      <ButtonContainer>
                        Back to Products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}