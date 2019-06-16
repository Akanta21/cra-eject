import React from 'react'
import { connect } from 'react-redux'
import { Incident } from '../components/Incident'


function Home({ incidents }) {
  return (
    <div>
      {incidents.map((incident, index) => (
        <Incident
          key={index}
          title={incident.title}
          assignee={incident.assignee}
          status={incident.status}
        />))
      }
    </div>
  )
}


const mapStateToProps = state => ({
  incidents: state.incidents
})

export default connect(
  mapStateToProps
)(Home)