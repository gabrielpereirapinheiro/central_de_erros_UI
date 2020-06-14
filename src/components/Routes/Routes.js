import React, { Component } from 'react';
import { strings } from "../../shared/locale";

class Routes extends Component {

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    render() {
        let content = (
            <div class="info">
                <h3 onClick={(e) => this.routeTo("")} class="info-text float-right">Início</h3>
                <h3 onClick={(e) => this.routeTo("sign-in")} class="info-text float-right">Login</h3>
                <h3 onClick={(e) => this.routeTo("sign-up")} class="info-text float-right">Cadastro</h3>
                <h3 onClick={(e) => this.routeTo("about")} class="info-text float-right">Sobre</h3>
            </div>
        )
        return (
            content
        );
    }
}

export default Routes;

