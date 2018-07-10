import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import requireAuth from 'components/requireAuth';

// On this page we use reacts events instead
// which is equivalent to onChange etc

class CommentBox extends Component {

    state = { comment : '' };

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    };

    handleSubmit = event => {

        event.preventDefault();

        // Call an action creator
        // and save the comments

        this.props.saveComment(this.state.comment);

        this.setState({ comment: '' });

    };


    render() {

        return (

            <div>

                <form onSubmit={this.handleSubmit}>
                    <h4> Add a Comment </h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>

                <button className="fetch-comments" onClick= {this.props.fetchComments} > Fetch Comments </button>

            </div>

        );
    }
}




// 1st args mapStateToPropsFunction
// 2nd args actions for the action creators
export default connect(null,actions)(requireAuth(CommentBox));