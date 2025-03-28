import React, { Component } from "react";
import { createRef } from "react";

class ClassComponentWithoutState extends Component {
  constructor(props) {
    super(props);
    this.divRef = createRef();
  }

  componentDidMount() {
    fetch(`https://fakestoreapi.com/products/${this.props.productId}`)
      .then((res) => res.json())
      .then((json) => {
        this.divRef.current.innerHTML = `
       <div>
         <h2>${json.title}</h2>
         <img src="${json.image}" alt="${json.title}" width="150" />
         <p><strong>Price:</strong> $${json.price}</p>
         <p><strong>Category:</strong> ${json.category}</p>
         <p><strong>Description:</strong> ${json.description}</p>
       </div>
     `;
      });
  }

  render() {
    return <div ref={this.divRef}>Hello, World</div>;
  }
}

export default ClassComponentWithoutState;
