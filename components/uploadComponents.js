import React from "react"
import RedButton from "./shared/redButton"
import styled, { keyframes } from "styled-components"

import facebook from "../static/images/fb_outline.svg"
import twitter from "../static/images/twitter_outline.svg"
import facebookPink from "../static/images/fb-outline-pink.svg"
import twitterPink from "../static/images/twitter-outline-pink.svg"
import loading from "../static/images/loading.svg"
import ShareModal from "./shareImage"
import gifLogo from "../static/images/headerGif.gif"
import upload_bg from "../static/images/upload_bg.svg"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Background = styled.div.attrs(({ view }) => ({
  className: `${
    view === "form"
      ? "bg-near-white b--solid b--near-white dark-pink"
      : "blue bg-blue b--solid b--light-blue"
  } flex items-center flex-column pv2-ns pv0`,
}))`
  border-width: 30px;
  @media (max-width: 40rem) {
    border-width: 18px;
  }
  ${({ view }) =>
    view === "form"
      ? ""
      : `
  background-image: url(${upload_bg});
  background-size: 100%;
  `}
`

const ButtonHolder = styled.div.attrs(({ display }) => ({
  className: `flex ${display} pb3 ph2 ph0-ns pt2`,
}))`
  width: 90vw;
  max-width: 483px;
`

const FileInput = styled.input.attrs({
  className: "data-upload",
})`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

const Clickable = styled.div.attrs({
  className:
    "white bg-blue db flex tc flex-column items-center justify-center b--dashed b--white bw1 apercu",
})`
  width: 85vw;
  height: 60vh;
  max-width: 483px;
  max-height: 370px;
`

const Label = styled.label.attrs({
  className: "apercu pointer h-100 w-100 flex items-center justify-center",
})`
  p {
    width: 50%;
  }
`

const LabelButton = styled.label.attrs({
  className: "yellow pointer bg-red apercu font-5 bn",
})`
  width: 145px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LinkToForm = styled.p.attrs({
  className: "white i font-7 pv2 tc mh4 db-ns dn",
})``

const NavContainer = styled.div.attrs({
  className: "flex justify-between w-100 relative",
})`
  height: calc(60vw / 5.4195);
  max-height: calc(700px / 5.4195);
`

const Link = styled.a.attrs(({ view }) => ({
  className: `${
    view === "form" ? "dark-pink" : "white"
  } ttu underline mono pl4 pt3`,
}))``

const Socials = styled.div.attrs({
  className: "pt2 pr3 no-wrap",
})``

const SocialIcon = styled.img.attrs({
  className: "ph2",
})``

const GifLogo = styled.img.attrs({
  className: "absolute",
})`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60vw;
  height: calc(60vw / 4.4195);
  max-width: 700px;
  max-height: calc(700px / 4.4195);
`

const DesktopNav = ({ view, cartoonId, getTwitterHref, shareOnFacebook }) => (
  <div className="db-ns dn w-100 mb1">
    <NavContainer>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="http://createrefresh.eu"
        view={view}
      >
        More info
      </Link>
      <a href="/">
        <GifLogo src={gifLogo} alt="main logo" />
      </a>
      <Socials>
        <a onClick={shareOnFacebook} className="pointer">
          <SocialIcon
            src={view === "form" ? facebookPink : facebook}
            alt="facebook"
            view={view}
          />
        </a>
        <a href={getTwitterHref(cartoonId)}>
          <SocialIcon
            src={view === "form" ? twitterPink : twitter}
            alt="twitter"
            view={view}
          />
        </a>
      </Socials>
    </NavContainer>
  </div>
)

const UploadButton = ({ file, onImageSelect }) => (
  <ButtonHolder display="justify-center">
    <form>
      <LabelButton htmlFor="buttonUpload">Upload</LabelButton>
      <FileInput
        type="file"
        id="buttonUpload"
        name="buttonUpload"
        accept="image/png, image/jpeg"
        multiple={false}
        files={file}
        onChange={onImageSelect}
      />
    </form>
  </ButtonHolder>
)

const ShareButtons = props => (
  <ButtonHolder display="justify-between">
    <RedButton className="relative" onClick={props.toggleShare}>
      Share
      {props.showShareModal && (
        <ShareModal
          shareOnTwitter={props.shareOnTwitter}
          shareOnFacebook={props.shareOnFacebook}
        />
      )}
    </RedButton>
    <RedButton onClick={props.handleStartOver}>Start Over</RedButton>
    <a href={props.cartoon} download="eu-compliant-meme" className="dn db-ns">
      <RedButton className="data-save">Save</RedButton>
    </a>
  </ButtonHolder>
)

const LoadingSpinner = styled.div.attrs({
  className:
    "dib w-50 h-50 flex justify-center items-center black ttu separat font-5",
})`
  background-image: url(${loading});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${rotate} 2s linear infinite;
`

export {
  Background,
  LinkToForm,
  DesktopNav,
  UploadButton,
  ShareButtons,
  FileInput,
  Clickable,
  Label,
  LoadingSpinner,
}
