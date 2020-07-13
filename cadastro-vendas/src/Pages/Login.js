import React, { Component } from 'react';
import { logar } from '../Services/auth';
import { Link, withRouter } from "react-router-dom";

import { urlServidor } from '../Services/config'


class Login extends  React.Component{

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            error: ""
          };

    }
   

      handleSignIn = async e => {
        const {login,password} = this.state
        

        console.log(JSON.stringify({
            "login": login,
            "password" :password
            }));
        fetch( urlServidor +  'Usuario/login', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:  JSON.stringify({
                                    "login": login,
                                    "password" :password
                                    })
           }).then(response => response.json())
           .then(data => {
                if(data.message == "Sucesso")
                {
                    logar(data.token)
                    this.props.history.push("/home");
                }else
                {
                    this.setState({ error: "Usuario ou senha incorretos." });
                }        
            }).catch(function(error) {
                this.setState({ error: "Usuario ou senha incorretos" });
              });

      };



    render(){
        return( 
            <div className="cotainer">
                    <div className="row justify-content-center" >
                        <div className="col-md-2"></div>
                        <div className="col-md-8" style ={{ padding: "100px 0"}} >
                            <div className="card" style={{ width : "70%"}}>
                                <div className="card-header">Login</div>
                                <div className="card-body">
                                        <div  className="form-group row">
                                            {this.state.error && <p>{this.state.error}</p>}
                                        </div>
                                          
                                        <div className="form-group row">
                                            <label for="Login:" className="col-md-4 col-form-label text-md-right">Login</label>
                                            <div className="col-md-6">
                                                <input type="text"  name="login"  className="form-control" onChange={e => this.setState({ login: e.target.value })} />
                                            </div>
                                        </div>
            
                                        <div className="form-group row">
                                            <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                            <div className="col-md-6">
                                                <input type="password" id="password" className="form-control" name="password"  onChange={e => this.setState({ password: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 offset-md-4">
                                            <button className="btn btn-primary" onClick={this.handleSignIn} >
                                                login
                                            </button>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            
        );
    }

}


export default withRouter(Login)