import React from 'react';
import { connect } from 'react-redux';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError || this.props.error === true) {
      return <h1>Something went wrong :(.</h1>;
    }

    return this.props.children;
  }
}
const mapStateToProps = state => {
  return {
    error: state.products.error
  };
};
export default connect(mapStateToProps)(ErrorBoundary);
