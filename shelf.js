// My Reads Shelf component.

// React and other JavaScript libraries.
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI.
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// My Reads.
import Book from './book';


const styles = {
    shelf: {
        margin: 16
    },

    title: {
        marginBottom: 16
    },

    books: {
        display: 'flex',
        flexWrap: 'wrap'
    }
};


const Shelf = ({ classes, bookHandlers, ...props }) => (
    <div className={ classes.shelf }>
        { props.title && <Typography variant='h5' className={ classes.title }>{ props.title }</Typography> }

        <div className={ classes.books }>
            { props.booksList.map((book, i) => (
                <Book key={ i } categories={ props.categories } { ...book } updateShelf={ bookHandlers } />
            )) }
        </div>
    </div>
);


Shelf.propTypes = {
    booksList: PropTypes.array.isRequired,
    title: PropTypes.string
};


export default withStyles(styles)(Shelf);
