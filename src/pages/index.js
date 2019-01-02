import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Upload from "../components/upload"
import Info from "../components/info"
import Video from "../components/video"
import Signup from "../components/signup"
import Faq from "../components/faq"
import Footer from "../components/footer"
import axios from "axios"

class IndexPage extends Component {
  state = {
    formCompleted: false,
  }
  submitForm = data => {
    this.setState(
      {
        formCompleted: true,
      },
      this.postData(data)
    )
  }
  postData = data => {
    // Post data to backend then python app posts to mailchimp
    axios
      .post("/signup", data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  render() {
    const { formCompleted } = this.state
    return (
      <Layout>
        <SEO title="Home" keywords={["gatsby", "application", "react"]} />
        <Upload formCompleted={formCompleted} submitForm={this.submitForm} />
        <Info />
        <Video />
        <Signup theme="light" submitForm={this.submitForm} />
        <Faq />
        <Footer />
      </Layout>
    )
  }
}

export default IndexPage
