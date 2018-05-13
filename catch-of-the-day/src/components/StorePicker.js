import React from "react";
import { getFunName } from '../helpers';
class StorePicker extends React.Component {

  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  storeName = React.createRef();
  goToStore = event => {
    console.log(this.storeName);
    event.preventDefault();
    const storeName = this.storeName.value.value;
    this.props.history.push(`/store/${storeName}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Ingresa una tienda</h2>
        <input type="text" required placeholder="Nombre de la tienda" ref={this.storeName} defaultValue={getFunName()} />
        <button type="submit">Ingresar a la tienda</button>
      </form>
    );
  }
}

export default StorePicker;
