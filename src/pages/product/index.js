import React, { Component } from 'react';

import api from '../../services/api'

import { Link } from 'react-router-dom'

import { Container } from './styles'

export default class Product extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`products/${id}`);

    this.setState({ product: response.data });
  };

  render() {
    const { product } = this.state;

    return (
      <Container >
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          <p>
            <span>URL: <a href={product.url}>{product.url}</a></span> 
            <span>
              <Link className="get-out" to={"/"}>Sair</Link>
            </span>
          </p>

        </div>
      </Container>
    );
  }
}
