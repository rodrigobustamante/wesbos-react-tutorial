import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  // handleClick = () => {
  //   this.props.addToOrder(this.props.index);
  // };
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <div className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          onClick={() => this.props.addToOrder(this.props.index)}
          disabled={!isAvailable}
        >
          {isAvailable ? "Agregar al carro" : "Agotado"}
        </button>
      </div>
    );
  }
}

export default Fish;
