import {
  Input,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/Context";

export const Login = () => {
   const {state, dispatch} = useContext(AppContext);
   const navigate = useNavigate();
   const init = {
    email: null,
    password : null
   }
   const [user, setUser]  = useState(init);
const handleChange = (e) =>{
  const {name, value} = e.target;
  setUser({
    ...user, [name]: value
  })

}
const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('https://reqres.in/api/login', user).then(res => {
        dispatch({type: 'login'})
        alert('login sucess')
        navigate('/');
    })
}
  return (
    <Box w="100%" minH="500px">
      <Box w="40%" m="auto" mt="3rem">
        <Box as="h1" fontSize="40px" fontWeight="600">
          Form
        </Box>
        <Box h='3rem'></Box>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" required name='email' onChange={handleChange}/>
          
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <Box h='2rem'></Box>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" required name='password' onChange = {handleChange} />
          {/* <FormHelperText>We'll never share your Password.</FormHelperText> */}
        </FormControl>
        <Box h='4rem'></Box>
        <Button onClick={handleSubmit}>Login In</Button>
      </Box>
    </Box>
  );
};
