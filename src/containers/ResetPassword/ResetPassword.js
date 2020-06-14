import React, { Component } from "react";
import bgPinkLeft from '../../assets/img/bg-pink-right.svg';
import classes from './ResetPassword.css';
import { Form, Input } from 'element-react';
import { strings } from "../../shared/locale";

class ResetPassword extends Component {

    state = {
        form: {
            email: '',
        },
        rules: {
            email: [
                { required: true, message: strings["pt-BR"].type_your_email , trigger: 'change' }
            ]
        }
    };

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

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.refs.form.validate((valid) => {
            if (valid) {

            } else {

            }
        });
    }

    render() {
        return (
            <div class="div-home-page full-page">

                <div class="div-20">
                </div>

                <div class="div-60">

                <div class="info">
                        <h3 onClick={(e) => this.routeTo("")} class="info-text float-right">Início</h3>
                        <h3 onClick={(e) => this.routeTo("sign-in")} class="info-text float-right">Entrar</h3>
                        <h3 onClick={(e) => this.routeTo("sign-up")} class="info-text float-right">Cadastro</h3>
                        <h3 onClick={(e) => this.routeTo("about")} class="info-text float-right">Sobre</h3>
                    </div>

                    <div class="area-inputs">

                        <h1 class="title-home-page title-color">Redefinir</h1>
                        <h2 class="sub-title-home-page title-color">senha</h2>

                        <div class="barra-azul"></div>
                    </div>

                    <div class="text-form-area">

                    <Form id="teste" htmlFor="email" className={classes.allForm} ref="form" model={this.state.form} rules={this.state.rules}>
                        <Form.Item prop="email" labelWidth="0px">
                            <Input className="inputs-sing-up" placeholder={"Email"} type="text" value={this.state.form.email} onChange={this.onChange.bind(this, 'email')} onKeyPress={this.handleKeyPress} />
                        </Form.Item>
                    </Form>

                    </div>
                </div>

                <div class="div-20 move-right-animation align-right">
                    <img src={bgPinkLeft}></img>
                </div>

            </div>
        );
    }
}

export default ResetPassword;