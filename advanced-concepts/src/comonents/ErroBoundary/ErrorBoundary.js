import React from 'react';

class ErrorBoundary extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error) {
    // Update the state so the next render will show the fallback UI.

    return { hasError : true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to error reporting service.
    // logErrorToMyService(error, info);

    // Also you can set the state to show the fallback UI.
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
