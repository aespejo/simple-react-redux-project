import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import { selectBook } from '../actions/index';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item" 
                    key={book.title}
                    onClick={()=>this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">{this.renderList()}</ul>
        );
    }
}

// this function serves as a glue/bridge between react and redux
function mapStateToProps(state) {
    // return will show up as a props inside the BookList component
    return {
        books: state.books
    }
}

// anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should passed 
    // to all reducers in our web app
    return bindActionCreators({selectBook:selectBook}, dispatch)
}

// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
