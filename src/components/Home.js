import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo192 from "../logo192.png";
import {connect} from 'react-redux'

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card z-depth-2" key={post.id}>
            <img src={logo192} alt="A Pokeball"/>
            <div className="card-content"></div>
            <Link to={"/" + post.id}>
              <span className="center">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStatetoProps)(Home);
