import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './../pages/post';
import PropTypes from 'prop-types';
import { getPosts } from './../pages/post/redux-actions';

/*
 *  Post Route
 */
class PostRoute extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <Post />
        );
    }
}

PostRoute.propTypes = {
    getPosts: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts())
    };
};

export default connect(null, mapDispatchToProps)(PostRoute);