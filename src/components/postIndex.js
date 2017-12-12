import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostIndex extends Component {
  // function called one time as soon as the component loads.
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    return <div>Index of all post available</div>;
  }
}

// shorcut to wire up action creator to component. Rather than creating
// a second function to mapDispatchToProps, we can directly pass in
// our fetchPost to our connect components
export default connect(null, { fetchPost })(PostIndex);
