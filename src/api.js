
import { useEffect } from "react";
  const userInput = "malki&shani";
    const passwordInput = "mmmsss"
   
const Login = (userInput,passwordInput ) => 
{
  
  useEffect(() => {
    fetch(`http://localhost:3000/login?user=${userInput}?password=${passwordInput}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
}

export default Login;