import React, { Component } from 'react';
import { strings } from "../../shared/locale";

class AuthRoutes extends Component {
    render() {
        let content = (
            <div class="info">
                <h3 onClick={(e) => this.props.click("")} class="info-text float-right">{strings["pt-BR"].home}</h3>
                <h3 onClick={(e) => this.props.click("logout")} class="info-text float-right">{strings["pt-BR"].logout}</h3>
            </div>
        )
        return (
            content
        );
    }
}

export default AuthRoutes;

