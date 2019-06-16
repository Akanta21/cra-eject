import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import CreateIncident from './pages/CreateIncident'
import Home from './pages/Home'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AppStyles from './AppStyles'


function App() {
  const classes = AppStyles()
  return (
    <Router>
      <div className={classes.root}>
        <Layout />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                  <Route exact path="/" component={Home} />
                  <Route path="/create" component={CreateIncident} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </Router>
  )
}

export default App
