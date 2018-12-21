import React, { Component } from "react"
import axios from "axios"
import fileNameFormatter from "../utils/fileNameFormat"
import styled from "styled-components"
import isValidFileType from "../utils/isValidFileType"
import {
  Background,
  LinkToForm,
  DesktopNav,
  MobileNav,
  UploadButtons,
  ShareButtons,
  FileInput,
  Clickable,
  Label,
} from "./uploadComponents"
import SignUp from "./signup"

const endpoint = "http://localhost:5000/upload"

const ImagesSidebyside = styled.div.attrs({
  className:
    "flex flex-column flex-row-ns justify-center items-center mv3 mv0-ns",
})``

const Image = styled.div.attrs({ className: "ma2 image-comparison" })`
  max-width: 483px;
  max-height: 370px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat;
`

class Upload extends Component {
  state = {
    file: null,
    fileName: null,
    fileURL: null,
    error: "",
    cartoon: null,
    view: "form",
  }
  validateImage = file => {
    if (!isValidFileType(file)) {
      this.setState({
        error:
          "Oops, it looks like your file is the wrong type! Try uploading a jpg or png.",
      })
      return false
    } else if (file.size > 1048576) {
      this.setState({
        error:
          "Oops, it looks like your file is too big! Try uploading a smaller image.",
      })
      return false
    }
    this.setState({ error: "" })
    return true
  }
  onImageSelect = event => {
    event.preventDefault()
    const file = event.target.files[0]
    if (file && this.validateImage(file)) {
      this.setState(
        {
          file,
          fileName: fileNameFormatter(file.name),
          fileURL: URL.createObjectURL(file),
        },
        this.sendImage
      )
    }
  }
  sendImage = () => {
    const data = new FormData()
    const { file, fileName } = this.state
    data.set("file", file, fileName)
    axios
      .post(endpoint, data)
      .then(res => {
        this.setState({
          view: "form",
          cartoon: `data:image/png;base64,${res.data.base64}`,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  seeMeme = () => {
    this.setState({ view: "" })
  }
  handleStartOver = () => {
    this.setState({
      file: null,
      fileName: null,
      fileURL: null,
      error: "",
      cartoon: null,
      view: "",
    })
  }
  render() {
    const { file, fileURL, error, cartoon, view } = this.state
    return (
      <Background>
        <MobileNav />
        <DesktopNav />

        {view === "form" ? (
          <SignUp theme="dark" />
        ) : cartoon ? (
          <ImagesSidebyside>
            <Image src={fileURL} alt="original image" />
            <Image src={cartoon} alt="cartoonified image" />
          </ImagesSidebyside>
        ) : (
          <form>
            <Clickable>
              <Label htmlFor="image">
                {error ? (
                  <p>{error}</p>
                ) : file ? (
                  <p>Loading...</p>
                ) : (
                  <p>Click to upload</p>
                )}
              </Label>
              <FileInput
                type="file"
                id="image"
                name="image"
                accept="image/png, image/jpeg"
                multiple={false}
                files={file}
                onChange={this.onImageSelect}
              />
            </Clickable>
          </form>
        )}
        <LinkToForm>
          Want to be part of the network to stop Article 13?{" "}
          <a className="underline">Join now and save your memes!</a>
        </LinkToForm>
        {cartoon ? (
          <ShareButtons handleStartOver={this.handleStartOver} />
        ) : (
          <UploadButtons />
        )}
      </Background>
    )
  }
}

export default Upload
