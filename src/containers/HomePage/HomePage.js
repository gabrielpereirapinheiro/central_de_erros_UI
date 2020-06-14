import React, { Component } from "react";
import bgPink from '../../assets/img/bg-pink.svg'
import bgOrange from '../../assets/img/bg-orange.svg'
import Routes from '../../components/Routes/Routes';

class HomePage extends Component {

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    render() {
        return (
            <div class="div-home-page full-page">

                <div class="div-20 move-left-animation">
                    <img src={bgPink}></img>
                </div>

                <div class="div-60">

                    <Routes click={this.routeTo}></Routes>


                    <div class="main-area">
                        <h1 class="title-home-page title-color">Central</h1>
                        <h2 class="sub-title-home-page title-color">de</h2>
                        <h1 class="title-home-page title-color">Erros</h1>
                        <div class="barra-azul"></div>

                        <button onClick={(e) => this.routeTo("sign-in")} id="button-entrar">Entrar</button>

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