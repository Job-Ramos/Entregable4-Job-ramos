

const UseCard = ({user,deleteUser,setinfoUptape, handleoOpenForm}) => {
    const handleDelete  = () => {
        deleteUser('/users',user.id)
    }
 
    const handleEdit = () => {
      setinfoUptape(user)
      handleoOpenForm()
    }

  return (
    <article className="container_info">
      <ul className="email_Birthday">
      <h3 className="name">{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
      
        <li className="container_info"><span className="info">Email: </span> <span className="container_data">{user.email}</span></li>
         <img src="" alt="" />
        <li className="container_info"><span className="info">Birthday: </span><span className="container_data">{user.birthday}</span></li>
        <br />
        <hr />
        <div className="buttons">
      <button className="button_delete" onClick={handleDelete}><i className='bx bx-trash'></i></button>
      <button className="button_Edit" onClick={handleEdit}><i className='bx bx-edit' ></i></button>
      </div>
      </ul>
      
    </article>
  )
}

export default UseCard