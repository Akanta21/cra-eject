import React from 'react'
import { useRedux } from '../../lib/useRedux'
import { Incident } from '../components/Incident'


function Home({ incidents }) {
  const mapStateToProps = state => ({
    incidents: state.incidents
  })

  const reduxState = useRedux(mapStateToProps)

  return (
    <div>
      {reduxState.incidents.map((incident, index) => (
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

export default Home