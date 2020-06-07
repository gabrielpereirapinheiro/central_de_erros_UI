import React, { Component } from "react";
import classes from './SignUp.css';
import { Button, Form, Input } from 'element-react';
// import { Button } from '@material-ui/core';

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
            <div class="header">

                {this.state.sucessSignUp ?
                    (
                        <div class="text-box">
                            <h1 className="title-working">
                                Cadastro concluido com sucesso
                            </h1>
                        </div>
                    )
                    :
                    (
                        <div class="text-box">
                            <h1 className="title-sing-up">
                                Cadastro
                            </h1>

                            <Form id="teste" htmlFor="email" className={classes.allForm} ref="form" model={this.state.form} rules={this.state.rules}>
                                <Form.Item prop="email" labelWidth="0px">
                                    <Input className="inputs-sing-up" placeholder={"Email"} type="text" value={this.state.form.email} onChange={this.onChange.bind(this, 'email')} onKeyPress={this.handleKeyPress} />
                                </Form.Item>
                                <Form.Item prop="password" labelWidth="0px">
                                    <Input className="inputs-sing-up" placeholder={"Senha"} type="password" value={this.state.form.password} onChange={this.onChange.bind(this, 'password')} onKeyPress={this.handleKeyPress} />
                                </Form.Item>
                            </Form>

                            <Button color="primary" loading={this.state.loadingSignUp} onClick={(e) => this.handleSubmit(e)}>Cadastrar</Button>

                            <p id="already-have-account">Já possui conta? <a id="rote-sign-in" onClick={(e) => this.roteSignIn(e)}>Entrar</a></p>

                        </div>
                    )
                }
            </div>
        );
    }
}

export default SignUp;