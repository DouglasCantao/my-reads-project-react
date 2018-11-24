// My Reads Book component.

// React and other JavaScript libraries.
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI components and icons.
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// Material-UI styling.
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        width: 200,
        height: 250,
        margin: 16,
        boxShadow: '2px 2px 5px 2px rgba(189,189,189,1)',
    },

    'menu-icon': {
        float: 'right',
        marginRight: -12,
        marginTop: -12
    },

    header: {
        padding: 8
    },

    media: {
        textAlign: 'center'
    }
};


class Book extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false
        }
    }

    showMenu() {
        this.setState({menuOpen: true});
    }

    closeMenu() {
        this.setState({menuOpen: false});
    }

    changeShelf(newShelf, bookId) {
        this.setState({menuOpen: false});

        this.props.updateShelf({id: bookId}, newShelf);
    }

    render() {
        const { classes, ...props } = this.props;

        return (
            <div key={ props.id } className={ classes.card }>
                <Fab id={ `menu-button-${props.id}` } size="small" aria-owns={ `shelf-menu-${props.id}` } aria-haspopup="true" color="secondary" className={ classes['menu-icon'] } onClick={ () => this.showMenu() }>
                    <MoreVertIcon />
                </Fab>

                <Menu id={ `shelf-menu-${props.id}` } anchorEl={ document.getElementById(`menu-button-${props.id}`) } open={ this.state.menuOpen } onClose={ () => this.closeMenu() }>
                    <MenuItem value="" selected={ !props.shelf } onClick={ () => this.changeShelf('', props.id) }><em>None</em></MenuItem>

                    { props.categories.map(c => (
                        <MenuItem key={ c.id } value={ c.id } selected={ c.id == props.shelf } onClick={ () => this.changeShelf(c.id, props.id) }>{ c.name }</MenuItem>
                    ))}
                </Menu>

                <div className={ classes.header }>
                    <Tooltip title={ props.title }>
                        <Typography variant="body1" noWrap={ true }>{ props.title }</Typography>
                    </Tooltip>

                    <Tooltip title={ props.author }>
                        <Typography variant="caption" noWrap={ true }>{ props.author }</Typography>
                    </Tooltip>
                </div>

                <div className={ classes.media }>
                    <img src={ props.image } alt={ `Capa do livro ${props.title}` } height="170"/>
                </div>
            </div>
        );
    }
}


Book.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Book);
