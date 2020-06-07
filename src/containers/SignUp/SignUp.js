import React, { Component } from "react";

class SignUp extends Component {


    render() {
        return (
            <div class="header">
                <div class="text-box">
                    <h1 class="heading-primary">
                        <input type="text" name="name" />
                        <input type="text" name="name" />
                    </h1>

                    <a href="#" class="btn btn-white btn-animated">
                        cadastrar
                    </a>
                </div>
            </div>
        );
    }
}

export default SignUp;