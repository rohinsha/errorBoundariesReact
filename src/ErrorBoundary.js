import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  errorBoundariesReact;

  static getDerivedStateFromError(error) {
    console.log(error + "dsds");
    // Update state so the next render will show the fallback UI.
    return { error: error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
  }

  render() {
    if (this.state.error) {
      // Create a custom fallback UI here
      return <h1>There seems to be a problem.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
// class ErrorBoundaries extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: false
//     };
//   }
//   static getDerivedStatefromError(error) {
//     console.log(error + "sdsdsjjjjjjjjjjjjjjjjj");
//     return {
//       error: error
//     };
//   }

//   render() {
//     if (this.state.error) return <h2>hellooo</h2>;
//     return this.props.children;
//   }
// }

// export default ErrorBoundaries;
