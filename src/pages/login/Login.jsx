import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import useForm from "../../hooks/useForm";
import { getUser } from "../../services/getUser";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../Routers/Routers";

const Login = () => {

    const [dataForm, handleChange, resetForm] = useForm({
        user: "",
        password: ""
    })
    
    const navigate = useNavigate();
    const { user, setIsLogin } = useContext(AppContext);
    const location = useLocation()

    useEffect(() => {
        if(user?.name){
            navigate('/')
        }
    },[user])

    const handleSubmit = async(event) => {
        event.preventDefault()
        console.log(dataForm)
        const isLogin = await getUser(dataForm.user, dataForm.password)
        if(!isLogin){
            alert('El usuario o la contraseña no existen');
            resetForm();
            return 
        }
        localStorage.setItem('user', JSON.stringify(isLogin));
        setIsLogin(!isLogin)
        if(location.state?.path){
            navigate(location.state.path)
        }else{
            navigate('/');
        }   
    }

  return (
    <>
      <Header />
      <div className="container-fluid">
        <main className="tm-main">
          <form className="mb-5 mx-auto tm-contact-form" onSubmit={(event) => handleSubmit(event)}>
            <h2 className="tm-pt-30 tm-color-primary tm-post-title ">
              Iniciar Sesion
            </h2>
            <div className="form-group row mb-4">
              <label
                htmlFor="user"
                className="col-sm-3 col-form-label text-right tm-color-primary"
              >
                Usuario
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control mr-0 ml-auto"
                  name="user"
                  id="user"
                  type="text"
                  value={dataForm.user}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="password"
                className="col-sm-3 col-form-label text-right tm-color-primary"
              >
                Contraseña
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control mr-0 ml-auto"
                  name="password"
                  id="password"
                  type="password"
                  value={dataForm.password}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
            </div>
            <div className="form-group row text-right">
              <div className="col-12">
                <button
                  className="tm-btn tm-btn-primary tm-btn-small"
                  type="submit"
                >
                  Iniciar Sesion
                </button>
              </div>
            </div>
          </form>

          <Footer />
        </main>
      </div>
    </>
  );
};

export default Login;
