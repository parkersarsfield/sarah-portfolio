import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            isError: false,
            data: {},
        };
    }

    handleChange = (e) => {
        let data = this.state.data;
        data[e.target.name] = e.target.value;
        this.setState({
            data,
        })
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state.data })
        })
            .then(() => {
                this.setState({ isSubmitted: true })
            })
            .catch(() => {
                this.setState({ isError: true })
            });
        e.preventDefault();
    };

    renderSubmit() {
        return (
            <div className="message">
                Your message has been sent. I will get back to you soon!
        </div>
        )
    }

    renderError() {
        return (
            <div className="message">
                Something went wrong. Please try again!
        </div>
        )
    }

    renderForm() {
        return (
            <div>
                <h1>Contact</h1>
                <form
                    name="contact"
                    method="post"
                    action="/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                >
                    <p hidden>
                        <label>
                            Don’t fill this out: <input name="bot-field" />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your name:<br />
                            <input type="text" name="name" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your email:<br />
                            <input type="email" name="email" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Message:<br />
                            <textarea name="message" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        );
    }

    render() {
        return (
            <div className="contact-page">
                {this.state.isError ? this.renderError() :
                    this.state.isSubmitted ? this.renderSubmit()
                        : this.renderForm()
                }
            </div>
        )

    }
}