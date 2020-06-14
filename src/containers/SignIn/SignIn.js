import React, { Component } from "react";
import classes from './SignIn.css';
import { Form, Input } from 'element-react';
// import { Button } from '@material-ui/core';
// import bgPink from '../../assets/img/bg-orange-left.svg'
import bgOrange from '../../assets/img/bg-pink-right.svg'
import Cookies from "js-cookie";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Routes from '../../components/Routes/Routes';

class SignIn extends Component {
    state = {
        loadingSignIn: false,
        sucessSignIn: false,
        keepLoged:false,
        form: {
            email: '',
            password: '',
        },
        rules: {
            email: [
                { required: true, message: "Por favor, digite seu email", trigger: 'change' }
            ],
            password: [
                { required: true, message: "Por favor, digite sua senha", trigger: 'change' },
            ],
        }
    };

    componentDidMount = () => {
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        }
    };

    changeStatus=(status)=>{
        this.setState({keepLoged:status});
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({ loadingSignIn: true });


        this.refs.form.validate((valid) => {
            if (valid) {
                this.setState({ sucessSignIn: true });
               
                let  expirationDate = new Date(new Date().getTime() + 3600000);
               
                if(this.state.keepLoged){
                    expirationDate = new Date(new Date().getTime() + 3155760000000);
                }

                let token = "tokenTesteCentralDeErros";

                Cookies.set('tk', token, {
                    expires: expirationDate,
                    secure: (window.location.protocol === 'https:')
                });
                
                window.location.reload();

            } else {
                this.setState({ loadingSignIn: false });
            }
        });
    }



    

    render() {
        return (
            <div class="div-home-page full-page">

                <div class="div-20 move-left-animation">
                    {/* <img src={bgPink}></img> */}
                </div>

                <div class="div-60">

                    <Routes></Routes>

                    <div class="area-inputs">

                        <h1 class="title-home-page title-color">Login</h1>

                        <div class="barra-azul"></div>

                        <div class="text-form-area">

                            <Form id="teste" htmlFor="email" className={classes.allForm} ref="form" model={this.state.form} rules={this.state.rules}>
                                <Form.Item prop="email" labelWidth="0px">
                                    <Input className="inputs-sing-up" placeholder={"Email"} type="text" value={this.state.form.email} onChange={this.onChange.bind(this, 'email')} onKeyPress={this.handleKeyPress} />
                                </Form.Item>
                                <Form.Item prop="password" labelWidth="0px">
                                    <Input className="inputs-sing-up" placeholder={"Senha"} type="password" value={this.state.form.password} onChange={this.onChange.bind(this, 'password')} onKeyPress={this.handleKeyPress} />
                                </Form.Item>
                            </Form>
                            
                            <div id="login-keep-conected">
                                <FormControlLabel id="keep-conected" control={<Checkbox name="checkedC" onClick={(e) => this.changeStatus(!this.state.keepLoged)}  checked={this.state.keepLoged} />} label="Me mantenha conectado" />

                                <button id="button-login"  onClick={(e) => this.handleSubmit(e)}>Login</button>
                           
                                <h5>Esqueceu sua senha ? <a id="reset-password" onClick={(e) => this.routeTo("reset-password")}> Redefinir</a></h5>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="div-20 move-right-animation align-right">
                    <img src={bgOrange}></img>
                </div>

            </div>
        );
    }
}


export default SignIn;