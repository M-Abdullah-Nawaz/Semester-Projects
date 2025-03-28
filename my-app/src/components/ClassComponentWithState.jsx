import React, { Component } from "react";

class ClassComponentWithState extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, isLoading: false, loaded: false, error: false };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`https://fakestoreapi.com/products/${this.props.productId}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
          isLoading: false,
          loaded: true,
        });
      })
      .catch(() => {
        this.setState({ error: true, isLoading: false });
      });
  }

  render() {
    return this.state.error ? (
      <div>There was an error</div>
    ) : this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      this.state.loaded && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>id: {this.state.data.id}</span>
          <span>title: {this.state.data.title}</span>
          <span>price: {this.state.data.price}</span>
        </div>
      )
    );
  }
}

export default ClassComponentWithState;
