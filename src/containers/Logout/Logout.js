import React, { Component } from "react";
import { Button, Form, Input } from 'element-react';
// import { Button } from '@material-ui/core';
import loading from '../../assets/gif/loading.svg'
import bgOrange from '../../assets/img/bg-pink-right.svg'
import Cookies from "js-cookie";
import bgPink from '../../assets/img/bg-pink.svg'

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