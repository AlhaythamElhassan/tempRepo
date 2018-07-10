import React, { Component } from 'react';
import { connect } from 'react-redux';



export default (ChildComponent) => {

// We wrap our child component in the ComposedComponent class
// now the ComposedComponent has access to all of the
    class ComposedComponent extends Component {

        // All of the below three methods are used
        // we deciding whether an app will be rendered to the
        // screen

        // Our component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {

            if(!this.props.auth) {
                // console.log("signed out ");
                this.props.history.push('/');
            } else {
                console.log("signed in ")
            }
        }

        render() {
            // the ...this.props is used when we pass from parent to child
            // requireAuth is the parent
            // CommentBox is the child
            // pass from requireAuth to CommentBox
            return <ChildComponent {...this.props} />;
        }

    }


    function mapStateToProps(state) {
        return { auth: state.auth };
    }

    return connect (mapStateToProps)(ComposedComponent);

};




// image we are in commentBox.js
