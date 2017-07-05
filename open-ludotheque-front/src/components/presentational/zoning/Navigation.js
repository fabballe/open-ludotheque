import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles, createStyleSheet } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';

const styleSheet = createStyleSheet('UndockedDrawer', {
    list: {
        width: 250,
        flex: 'initial'
    }
});

class Navigation extends Component {

    render() {
        const classes = this.props.classes;

        const mailFolderListItems = (
            <div>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Send mail" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </div>
        );

        const otherMailFolderListItems = (
            <div>
                <ListItem button>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="All mail" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ReportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Spam" />
                </ListItem>
            </div>
        );

        const sideList = (
            <div>
                <List className={classes.list} disablePadding>
                    {mailFolderListItems}
                </List>
                <Divider />
                <List className={classes.list} disablePadding>
                    {otherMailFolderListItems}
                </List>
            </div>
        );

        return (
            <div>
                <IconButton color="contrast" aria-label="Menu" onClick={this.props.displayMenu}>
                    <MenuIcon />
                </IconButton>

                <Drawer
                    open={this.props.openMenu}
                    onRequestClose={this.props.closeMenu}
                    onClick={this.props.closeMenu}
                >
                    {sideList}
                </Drawer>
            </div>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
    openMenu : PropTypes.bool.isRequired,
    displayMenu: PropTypes.func.isRequired,
    closeMenu: PropTypes.func.isRequired
};

Navigation.defaultProps = {
    openMenu: false
};

export default withStyles(styleSheet)(Navigation);

