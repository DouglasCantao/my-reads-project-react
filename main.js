// My Reads main module.

// React.
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Material-UI styling.
import { pink, grey, brown, deepPurple, red } from '@material-ui/core/colors';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

// My Reads.
import HomePage from './homepage'
import SearchPage from './searchpage'


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


// Main Component.
const App = withStyles(styles)((props) => (
    <MuiThemeProvider theme={ theme }>
        <Route path='/' exact component={ HomePage } />
        <Route path='/search' component={ SearchPage } />
    </MuiThemeProvider>
));


render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('react-app'));
