import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createIncident } from '../../lib/actions'
import {
  Grommet,
  Button,
  Form,
  FormField
} from "grommet";

function CreateIncident({ createIncident }) {
  const [incidentName, setIncidentName] = useState();
  const [assignee, setAssignee] = useState();
  const [status, setStatus] = useState();

  function submit(e) {
    createIncident(e.value)
    console.log(e.value)
  }

  return (
    <Grommet plain>
      <Form onSubmit={submit}>
        <FormField
          name="title"
          label="Incident Name"
          value={incidentName}
          onChange={(e) => setIncidentName(e.target.value)}
        />
        <FormField
          name="assignee"
          label="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
        <FormField
          name="status"
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <Button
          disabled={!incidentName || !assignee || !status}
          type="submit"
          primary
          label="Submit"
        />
      </Form>
    </Grommet>
  )
}

const mapStateToProps = state => ({
  incidents: state.incidents
})

const mapDispatchToProps = dispatch => ({
  createIncident: (incidentObject) => dispatch(createIncident(incidentObject))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateIncident)