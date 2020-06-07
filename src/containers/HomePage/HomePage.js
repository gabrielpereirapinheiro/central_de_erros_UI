import React, { Component } from "react";

class HomePage extends Component {


    roteSignUp = (e) => {
        this.props.history.push({
            pathname: '/sign-up',
        });
    }

    render() {
        return (
            <div>

                <header class="header">

                    <div class="logo-box">
                        {/* <img src="img/logo-white.png" alt="Logo" class="logo"> */}
                    </div>


                    <div class="text-box">
                        <h1 class="heading-primary">
                            <span class="heading-primary-main">CENTRAL</span>
                            <span class="heading-primary-main">DE ERROS</span>

                            {/* <span class="heading-primary-sub">Desevolvido em C#</span> */}
                        </h1>

                        <a href="/sign-in" class="btn btn-white btn-animated">
                            Entrar
                        </a>

                        <div className="div-margin-top">
                            <p id="dont-have-account">Não possui conta? <a id="rote-sign-in" onClick={(e) => this.roteSignUp(e)}>Cadastrar</a></p>
                        </div>
                    </div>

                </header>
            </div>

        );
    }
}

export default HomePage;