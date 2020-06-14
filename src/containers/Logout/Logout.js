import React, { Component } from "react";
import loading from '../../assets/gif/loading.svg'
import Cookies from "js-cookie";

class Logout extends Component {

    componentDidMount = () => {
        Cookies.remove('tk');
        window.location.reload()
    }

    render() {
        return (
            <div class="div-home-page full-page">
                <img src={loading}></img>
            </div>
        );
    }
}


export default Logout;