
import { useEffect, useState } from "react";
import { signInApi } from "./loginApi";
// const userInput = "malki&shani";
// const passwordInput = "mmmsss"

function SignIn() {

  const [id, setId] = useState('')
  const history = useHistory();

  useEffect(() => {
    signInApi(user)
      .then(() => {
        history.push('/signIn')
      })
      .catch(() => {
        console.log('--error--');
      })
  }, []);

  let user = { id }
  return (
    <div>
      <div>הכנס מספר זהות</div>
      <input onChange={(e) => { setId(e.target.value) }}></input>
    </div>)
}
export default SignIn;