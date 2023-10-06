
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UseCard from './components/UseCard'

function App() {

  const [infoUpdape, setinfoUptape] = useState()
  const [closeForm, setcloseForm] = useState(true)
 
  const baseUrl = 'https://users-crud.academlo.tech'
  const [users,getUsers,createUser, deleteUser,updateUser ] = useFetch(baseUrl, setcloseForm)

  useEffect(( ) =>  {
    getUsers('/users')
  },[])

  const handleoOpenForm = () => {
    setcloseForm(false)
  }

  return (
  <div className='container_body'>
    <button onClick={handleoOpenForm} className='button'>Open Form</button>
    <FormUser
    createUser= {createUser}
    infoUpdate={infoUpdape}
    updateUser= {updateUser}
    setinfoUptape={setinfoUptape}
    closeForm={closeForm}
    setcloseForm={setcloseForm}
    />
    <div className='container_users'>
      {
        users?.map(user => (
          <UseCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setinfoUptape = {setinfoUptape}
          handleoOpenForm={handleoOpenForm}
          />
        ))
      }
    </div>
  </div>
  )
}

export default App

