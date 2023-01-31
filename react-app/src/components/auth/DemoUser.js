import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector} from "react-redux";
import { Redirect, useHistory } from "react-router-dom"

function DemoButton(){
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));

    if (data) {
      setErrors(data);
    }
    // dont think that this will actually save errors in data

    // if (user) {
    //   return <Redirect to="/home" />
    // }
    history.push("/home")
     
  };

  return (
    <form onSubmit={onLogin}>
      <div>
        <button onClick={e => {
        setEmail("demo@aa.io")
        setPassword("password")
        }} type="demo" className="nav-button pointer">Demo User</button>
      </div>
      <div>
          {errors?.map((error) => (
            <div key={error}>{error}</div>
          ))}
      </div>
    </form>
  );
}

export default DemoButton;