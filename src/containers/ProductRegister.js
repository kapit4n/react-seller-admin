import { connect } from "react-redux";
import Product from "../comps/Product";
import { onSave, updateName, updateCode, init } from "../actions/products";

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

const mapDispathcToProps = dispatch => {
  return {
    onSave: event => {
      dispatch(onSave());
      event.preventDefault();
    },

    onCancel: event => {
      dispatch(init());
      event.preventDefault();
    },

    onChangeName: event => {
      dispatch(updateName(event.target.value));
    },

    onChangeCode: event => {
      dispatch(updateCode(event.target.value));
    }
  };
};

const ProductRegister = connect(
  mapStateToProps,
  mapDispathcToProps
)(Product);

export default ProductRegister;
