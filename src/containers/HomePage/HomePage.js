import React, { Component } from "react";
import bgPink from '../../assets/img/bg-pink.svg'
import bgOrange from '../../assets/img/bg-orange.svg'


class HomePage extends Component {

    roteSignIn = (e) => {
        this.props.history.push({
            pathname: '/sign-in',
        });
    }

    roteSignUp= (e) => {
        this.props.history.push({
            pathname: '/sign-up',
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
                        <h3 onClick={(e) => this.roteSignUp(e)} class="info-text">Cadastrar</h3>
                        <h3 class="info-text">Sobre</h3>
                    </div>

                    <div class="main-area">

                        <h1 class="title-home-page title-color">Central</h1>
                        <h2 class="sub-title-home-page title-color">de</h2>
                        <h1 class="title-home-page title-color">Erros</h1>
                        <div class="barra-azul"></div>

                        <button onClick={(e) => this.roteSignIn(e)} id="button-entrar">Entrar</button>

                    </div>
                </div>

                <div class="div-20 move-right-animation align-right">
                    <img src={bgOrange}></img>
                </div>

            </div>
        );
    }
}

export default HomePage;