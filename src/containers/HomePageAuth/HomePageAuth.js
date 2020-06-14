import React, { Component } from "react";
import bgPink from '../../assets/img/bg-pink.svg'
import bgOrange from '../../assets/img/bg-orange.svg'
import AuthRoutes from '../../components/AuthRoutes/AuthRoutes';

class HomePageAuth extends Component {

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

                    <AuthRoutes click={this.routeTo}></AuthRoutes>

                    <div class="main-area">
                        <h1 class="title-home-page title-color">HomePageAuth</h1>
                        <div class="barra-azul"></div>
                    </div>
                </div>

                <div class="div-20 move-right-animation align-right">
                    <img src={bgOrange}></img>
                </div>

            </div>
        );
    }
}

export default HomePageAuth;