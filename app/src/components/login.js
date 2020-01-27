import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

const Login = (props)=>{
    const [user,setUser] = useState({ email: "" , password: "" });

    const handleChange= (e) =>{
        setUser({...user, [e.target.name]:e.target.value.trim() });
        if(e.target.value.trim() === ""){
            setValues({...values, [e.target.name]:{
                    error:true,
                    helperText:`${e.target.name} is required`
                } 
            });
        }else{
            setValues({...values, [e.target.name]:{
                    error:false,
                    helperText:``
                } 
            });
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(user.email.trim() === "" && user.password.trim() === ""){
            setValues({...values, 
                email:{
                    error:true,
                    helperText:`email is required`
                },
                password:{
                    error:true,
                    helperText:`password is required`
                },
                button:{
                    disabled:true
                }
            }); 
        }else if(user.email.trim() === ""){
            setValues({...values, 
                email:{
                    error:true,
                    helperText:`email is required`
                },
                button:{
                    disabled:true
                }
            }); 
        }else if(user.password.trim()===""){
            setValues({...values, 
                password:{
                    error:true,
                    helperText:`password is required`
                },
                button:{
                    disabled:true
                }
            }); 
        }else{
            props.loginUser(user)
            setUser({ email: "" , password: "" });
        }
    }

    const [values, setValues] = useState({
        showPassword: false,
        showConfirmPassword: false,
        password:{
            error:false,
            helperText:''
        },
        email:{
            error:false,
            helperText:''  
        },
        button:{
            disabled:false
        }
      });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    useEffect(()=>{
        if(values.password.error === false && values.email.error === false){
            setValues({...values, button:{disabled:false}})
        }else{
            setValues({...values, button:{disabled:true}})
        }
    },[user])

    return(

    <div className="SignIn" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <form className="SignInForm">
        
            <FormControl variant="filled">
                <Typography className="label">E-Mail Address</Typography>
                <TextField
                    error={values.email.error}
                    helperText={values.email.helperText}
                    placeholder="E-Mail Address"
                    type="text"
                    name="email" 
                    onChange={handleChange} 
                    value={user.email} 
                    variant="outlined"
                />
            </FormControl>

            <FormControl variant="filled">
                <Typography className="label">Password</Typography>
                <TextField
                    error={values.password.error}
                    helperText={values.password.helperText}
                    placeholder="Password"
                    type={values.showPassword ? "text" : "password"}
                    onChange={handleChange}
                    value={user.password}
                    name="password"
                    variant="outlined"
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values.showPassword ? (
                            <Visibility />
                            ) : (
                            <VisibilityOff />
                            )}
                        </IconButton>
                        </InputAdornment>
                    )
                    }}
                />
            </FormControl>

            <Button variant="outlined" className="signInBtn" type="submit" disabled={values.button.disabled}>
                Sign In
            </Button>
        </form>
    </div>

    )
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps,{ loginUser })(Login)