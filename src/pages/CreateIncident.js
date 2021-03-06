import React, { useState } from 'react'
import { createIncident } from '../../lib/actions'
import { Store } from '../../lib/Store'


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import CreateIncidentStyles from './styles/CreateIncidentStyle'

function CreateIncident({ history }) {
  // local state for form input
  const [values, setValues] = useState({
    title: '',
    assignee: '',
    status: '',
  });

  const { incidentDispatch } = React.useContext(Store);

  function submit(e) {
    e.preventDefault()
    incidentDispatch(createIncident(values))

    // we assume that the response is successful
    history.push('/')
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const classes = CreateIncidentStyles()

  return (
    <Container component="main" maxWidth="xs">
      <Typography color="primary" component="h1" variant="h5">
        Add new incident
      </Typography>
      <form onSubmit={submit} className={classes.form} noValidate autoComplete="off">
        <TextField
          variant="outlined"
          required
          fullWidth
          id="title"
          label="Incident Name"
          name="title"
          value={values.title}
          onChange={handleChange('title')}
          margin="normal"
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          id="assignee"
          label="Assignee"
          value={values.assignee}
          onChange={handleChange('assignee')}
          margin="normal"
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          id="status"
          label="Status"
          value={values.status}
          onChange={handleChange('status')}
          margin="normal"
        />
        <Button
          disabled={!values.title || !values.assignee || !values.status}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >Submit</Button>
      </form>
    </Container>
  )
}

export default CreateIncident