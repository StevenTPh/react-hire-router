import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)

  const {id} = useParams();
  const{ people, hiredPeople, setHiredPeople } = props;

  useEffect(() => {

    if (people && id) {
      setPerson(people.find((person) => person.id.name === id));
    }
  }, [people, id]);


  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm 
      person={person} 
      setHiredPeople={setHiredPeople} 
      hiredPeople={hiredPeople}
      id = {id}
      />
    </article>
  )
}

export default PersonProfile
