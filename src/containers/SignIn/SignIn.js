import React, { Component } from "react";
import classes from './SignIn.css';
import { Button, Form, Input } from 'element-react';
// import { Button } from '@material-ui/core';
import bgPink from '../../assets/img/bg-orange-left.svg'
import bgOrange from '../../assets/img/bg-pink-right.svg'

class SignIn extends Component {
    state = {
        loadingSignIn: false,
        sucessSignIn: false,
        form: {
            email: '',
            password: '',
        },
        rules: {
            email: [
                { required: true, message: "Por favor, seu email", trigger: 'change' }
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
        this.setState({ loadingSignIn: true });


        this.refs.form.validate((valid) => {
            if (valid) {
                this.setState({ sucessSignIn: true });
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


                    <div class="info">
                        <h3 onClick={(e) => this.routeTo("")} class="info-text float-right">Início</h3>
                        <h3 onClick={(e) => this.routeTo("sign-in")} class="info-text float-right">Login</h3>
                        <h3 onClick={(e) => this.routeTo("sign-up")} class="info-text float-right">Cadastrar</h3>
                        <h3 onClick={(e) => this.routeTo("about")} class="info-text float-right">Sobre</h3>
                    </div>

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

                            <Button color="primary" loading={this.state.loadingSignIn} onClick={(e) => this.handleSubmit(e)}>Login</Button>

                            <div>
                                <p id="already-have-account"><a id="rote-sign-in" onClick={(e) => this.roteSignIn(e)}>Esqueci a senha</a></p>
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