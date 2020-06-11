import React, { Component } from "react";
import classes from './SignUp.css';
import { Button, Form, Input } from 'element-react';
// import { Button } from '@material-ui/core';
import tick from "../../assets/img/navegador.svg";
import bgPink from '../../assets/img/bg-orange-left.svg'
import bgOrange from '../../assets/img/bg-pink-right.svg'
class SignUp extends Component {
    state = {
        loadingSignUp: false,
        sucessSignUp: false,
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

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ loadingSignUp: true });


        this.refs.form.validate((valid) => {
            if (valid) {
                this.setState({ sucessSignUp: true });
            } else {
                this.setState({ loadingSignUp: false });
            }
        });
    }

    render() {
        return (


            <div class="div-home-page full-page">

                <div class="div-20 move-left-animation">
                    <img src={bgPink}></img>
                </div>

                <div class="div-60">


                    <div class="info">
                    <h3 onClick={(e) => this.routeTo("")} class="info-text float-right">Início</h3>
                        <h3 onClick={(e) => this.routeTo("sign-in")} class="info-text float-right">Login</h3>
                        <h3 onClick={(e) => this.routeTo("sign-up")} class="info-text float-right">Cadastrar</h3>
                        <h3 onClick={(e) => this.routeTo("about")} class="info-text float-right">Sobre</h3>
                    </div>

                    <div class="area-inputs">

                        <h1 class="title-home-page title-color">Cadastro</h1>
                       
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

                            <Button color="primary" loading={this.state.loadingSignUp} onClick={(e) => this.handleSubmit(e)}>Cadastrar</Button>

                            <div>
                                <p id="already-have-account">Já possui conta? <a id="rote-sign-in" onClick={(e) => this.roteSignIn(e)}>Entrar</a></p>

                                <p id="already-have-account">Já possui conta? <a id="rote-sign-in" onClick={(e) => this.roteSignIn(e)}>Entrar</a></p>
                            </div>
                        </div>

                    </div>
                </div>
{/* 
                <div class="div-20 move-right-animation align-right">
                    <img src={bgOrange}></img>
                </div> */}

            </div>


        );
    }
}

export default SignUp;


  
