// My Reads main module.

// React.
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';

// Material-UI components.
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';

// Material-UI icons.
import SearchIcon from '@material-ui/icons/Search';
import BackIcon from '@material-ui/icons/ArrowBack';

// Material-UI styling.
import { pink, grey, brown, deepPurple, red } from '@material-ui/core/colors';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

// My Reads.
import Shelf from './shelf';
import * as API from './booksapi';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: pink[100],
            contrastText: brown[800]
        },

        secondary: {
            main: deepPurple[200],
            contrastText: grey[50]
        },

        error: {
            main: red.A700
        },

        text: {
            primary: grey[800],
            secondary: brown[800]
        }
    },

    typography: {
        useNextVariants: true
    }
});


const styles = {
    '@global': {
        body: {
            margin: 0,
            minWidth: 320,
            backgroundColor: grey[50]
        }
    }
};


const SearchLink = props => <Link to="/search" {...props} />;
const HomeLink = props => <Link to="/" {...props} />;


// Components - Pages.
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
                }
            }).catch((resp) => console.log('Error on search:', resp));

        } else {
            this.setState({books: []})
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


// Main Component.
const App = withStyles(styles)((props) => (
    <MuiThemeProvider theme={ theme }>
        <Route path='/' exact component={ HomePage } />
        <Route path='/search' component={ SearchPage } />
    </MuiThemeProvider>
));


render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('react-app'));
