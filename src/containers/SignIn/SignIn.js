import React, { Component } from "react";
import classes from './SignIn.css';
import { Button, Form, Input } from 'element-react';
// import { Button } from '@material-ui/core';
import tick from "../../assets/img/navegador.svg";

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

    roteSignIn = (e) => {
        this.props.history.push({
            pathname: '/',
        });
    }


    roteHome = (e) => {
        this.props.history.push({
            pathname: '/',
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
            <div class="header">

                <div class="logo-box">
                    <img onClick={(e) => this.roteHome(e)} src={tick} alt="Logo" class="logo" />
                </div>

                <div class="text-box">
                    <h1 className="title-sing-up">
                        Login
                            </h1>

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
        );
    }
}

export default SignIn;