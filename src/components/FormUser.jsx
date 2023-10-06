import { useEffect } from "react"
import { useForm } from "react-hook-form"

const FormUser = ({createUser, infoUpdate,updateUser, setinfoUptape, closeForm,setcloseForm}) => {



const { handleSubmit,register, reset} = useForm()

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])

    
    const submit = data => {
        if (infoUpdate) {
            //Updata
            updateUser('/users',infoUpdate.id, data)
            setinfoUptape()
        }else{
            //create
            createUser('/users', data)
        }
    
       reset({
        email:'',
        password:'',
        first_name:'',
        last_name:'',
        birthday:''
    })
    }

    const handleCloseForm  = () => {
      setcloseForm(true)
    }

  return (
    <div onClick={handleCloseForm} className={`formuser-container ${closeForm && 'close-form'}`}>;
    <form onClick={e => e.stopPropagation()} className="container_form" onSubmit={handleSubmit(submit)}>
       <h2 className='tytle'>Nuevo usuario</h2>
       <div onClick={handleCloseForm} className="close"><i className='bx bxs-x-circle'></i></div>
      <div  className="form_users">
        <label className="container_label" htmlFor="email">Email</label>
        <input placeholder="colocar su Email" className="container_input" {...register('email')} type="email" id="email" />
      </div>
      <div className="form_users">
        <label className="container_label" htmlFor="password">Password</label>
        <input placeholder=" Insertar contraseña" className="container_input" {...register('password')} type="password" id="password" />
      </div>
      <div className="form_users">
        <label className="container_label" htmlFor="first_name">First name</label>
        <input placeholder="Inserte su nombre" className="container_input"{...register('first_name')} type="text" id="first_name" />
      </div>
      <div className="form_users">
        <label className="container_label" htmlFor="last_name">Last name</label>
        <input placeholder="insertar su apellido" className="container_input" {...register('last_name')} type="text" id="last_name" />
      </div>
      <div className="form_users">
        <label className="container_label" htmlFor="birthday">Birthday</label>
        <input className="container_input" {...register('birthday')}type="date"  id="birthday" />
      </div>
      <button className="container_button">{infoUpdate?'Update' : 'add a new user'}</button>
    
    </form>
    </div>
    
  );
};

export default FormUser