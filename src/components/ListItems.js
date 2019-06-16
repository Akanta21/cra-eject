import React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteAdd from '@material-ui/icons/NoteAdd';
import AppStyles from '../AppStyles'

export const ListItems = () => {
  const classes = AppStyles()

  return (
    <div>
      <Link className={classes.link} to="/">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="View all incidents" />
        </ListItem>
      </Link>
      <Link className={classes.link} to="/create">
        <ListItem button>
          <ListItemIcon>
            <NoteAdd />
          </ListItemIcon>
          <ListItemText primary="New incident" />
        </ListItem>
      </Link>
    </div>
  )
};