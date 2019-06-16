import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AppStyles from '../AppStyles'


export const Incident = (props) => {
  const classes = AppStyles()


  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography color="textSecondary">Incident type</Typography>
          <Typography className={classes.title} component="h2" variant="h6" color="primary" gutterBottom>
            {props.title}
          </Typography>
          <Typography color="textSecondary">Assignee</Typography>
          <Typography className={classes.pos} component="p">
            {props.assignee}
          </Typography>
          <Typography color="textSecondary">Status</Typography>
          <Typography variant="body2" component="p" >
            {props.status}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}