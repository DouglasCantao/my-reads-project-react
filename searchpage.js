// React.
import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI components.
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// Material-UI icons.
import SearchIcon from '@material-ui/icons/Search';
import BackIcon from '@material-ui/icons/ArrowBack';

// My Reads.
import Shelf from './shelf';
import * as API from './booksapi';


const SearchLink = props => <Link to="/search" {...props} />;
const HomeLink = props => <Link to="/" {...props} />;


class SearchPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [],

            categories: [
                {id: 'currentlyReading', name: 'Currently Reading'},
                {id: 'wantToRead', name: 'Want to Read'},
                {id: 'read', name: 'Read'}
            ]
        };
    }

    searchBooks(query) {
        console.log(query)
        if (query.trim() != '') {
            API.search(query.trim()).then((resp) => {
                if (resp.length > 0) {
                    this.setState((currentState) => {
                        return {
                            ...currentState,

                            books: resp.map(x => ({
                                id: x.id,
                                title: x.title,
                                shelf: x.shelf,
                                author: x.authors ? x.authors.join(', ') : '',
                                image: x.imageLinks ? x.imageLinks.thumbnail : ''
                            }))
                        }
                    })

                } else {
                    this.setState(() => ({books: [] }))
                }
            }).catch((resp) => console.log('Error on search:', resp));

        } else {
            this.setState(() => ({books: [] }))
        }
    }

    updateShelf = (book, shelf) => {
        API.update(book, shelf).then((data) => {
            this.setState((currentState) => ({
                books: currentState.books.map(x => {
                    if (book.id === x.id) {
                        return {...x, shelf: shelf}

                    } else {
                        return x
                    }
                })
            }))
        });
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton component={ HomeLink }><BackIcon /></IconButton>

                        <Typography variant="h6" color="inherit" style={ {flexGrow: 1} }>My Reads</Typography>
                        <IconButton component={ SearchLink }><SearchIcon /></IconButton>
                        <TextField style={ {flexGrow: 1} } placeholder="Pesquisar livros" onChange={ (e) => this.searchBooks(e.currentTarget.value) }/>
                    </Toolbar>
                </AppBar>

                { this.state.books.length > 0 && <Shelf booksList={ this.state.books } categories={ this.state.categories } bookHandlers={ this.updateShelf } /> }
            </div>
        );
    }
}

export default SearchPage;