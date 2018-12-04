// React.
import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI components.
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';

// Material-UI icons.
import SearchIcon from '@material-ui/icons/Search';

// My Reads.
import Shelf from './shelf';
import * as API from './booksapi';

const SearchLink = props => <Link to="/search" {...props} />;

class HomePage extends React.Component {
    // Actions to state updates.
    getBooks = () => {
        API.getAll().then((books) => {
            this.setState({
                books: books.map(x => ({
                    id: x.id,
                    title: x.title,
                    shelf: x.shelf,
                    author: x.authors ? x.authors.join(', ') : '',
                    image: x.imageLinks ? x.imageLinks.thumbnail : ''
                })),

                busyGettingBooks: false
            })
        }).catch((resp) => console.log('Error fetching books:', resp));;
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
        }).catch((resp) => console.log('Error updating shelf:', resp));;
    }

    // Lifecycle Events.
    constructor(props) {
        super(props);

        this.state = {
            books: [],

            categories: [
                {id: 'currentlyReading', name: 'Currently Reading'},
                {id: 'wantToRead', name: 'Want to Read'},
                {id: 'read', name: 'Read'}
            ],

            busyGettingBooks: true
        };
    }

    componentDidMount() {
        this.getBooks();
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" style={ {flexGrow: 1} }>My Reads</Typography>
                        <IconButton component={ SearchLink }><SearchIcon /></IconButton>
                    </Toolbar>
                </AppBar>

                { !this.state.busyGettingBooks ?
                    <div>
                        {this.state.categories.map(c => {
                            const books = this.state.books.filter(x => x.shelf == c.id)
                            const categories = this.state.categories

                            return <Shelf key={ c.id } booksList={ books } categories={ categories } title={ c.name } bookHandlers={ this.updateShelf } />
                        })}
                    </div>
                :
                    <div style={ {textAlign: 'center', padding: 16} }>
                        <LinearProgress color='secondary'  style={ {margin: 16} } />
                        <Typography variant="body2">Carregando prateleiras...</Typography>
                    </div>
                }
            </div>
        );
    }
}


export default HomePage;