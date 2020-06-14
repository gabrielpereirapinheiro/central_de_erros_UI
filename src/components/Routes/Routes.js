import React, { Component } from 'react';
import { strings } from "../../shared/locale";

class Routes extends Component {
    render() {
        let content = (
            <div class="info">
                <h3 onClick={(e) => this.props.click("")} class="info-text float-right">{strings["pt-BR"].home}</h3>
                <h3 onClick={(e) => this.props.click("sign-in")} class="info-text float-right">{strings["pt-BR"].sign_in}</h3>
                <h3 onClick={(e) => this.props.click("sign-up")} class="info-text float-right">{strings["pt-BR"].sign_up}</h3>
                <h3 onClick={(e) => this.props.click("about")} class="info-text float-right">{strings["pt-BR"].about}</h3>

                {/* <select onChange={(event) => this.props.changeLanguage({ language: event.target.value })}> */}
                <select id="select-language" class="info-text float-right">
                    <option value="pt-BR">{strings["pt-BR"].portuguese}</option>
                    <option value="en-US">{strings["pt-BR"].english}</option>
                </select>
            </div>
        )
        return (
            content
        );
    }
}

export default Routes;

