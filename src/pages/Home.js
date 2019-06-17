import React from 'react'
import { Store } from '../../lib/Store'
import { Incident } from '../components/Incident'


function Home() {
  const { incidents } = React.useContext(Store);

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

export default Home