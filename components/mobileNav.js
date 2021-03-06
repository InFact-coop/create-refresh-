import React, { Component } from "react"
import styled from "styled-components"

import logoMobile from "../static/images/logo-mobile.svg"
import menuLines from "../static/images/menu-lines.svg"

const Icon = styled.img.attrs({
  className: "pa2",
})``

const Container = styled.div.attrs(({ showMenu }) => ({
  className: `fixed top-0 left-0 vh-100 w-100 z-1 bg-white ${
    showMenu ? "o-100" : "o-0 disabled-link"
  }
  `,
}))``

const Close = styled.img.attrs({
  className: "h2 w2 absolute",
})`
  top: 6vh;
  left: 5vw;
`

const Hamburger = ({ shareOnFacebook, twitterHref, showMenu, toggleMenu }) => (
  <Container showMenu={showMenu}>
    <Close src="../static/images/close_menu.svg" onClick={toggleMenu} />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 812">
      <g fill="none" fillRule="evenodd">
        <rect width="375" height="812" fill="#FAC744" />
        <g transform="translate(0 -29)">
          <polygon
            fill="#FF62C6"
            points="308.318 67.163 0 67.204 0 1.204 312.683 1.204"
          />
          <polygon
            fill="#FAC744"
            points="65.751 1.043 61.366 295.434 375.512 295.434 375.512 .86"
          />
          <polygon
            fill="#4B81EF"
            points="0 349.439 292.585 349.439 292.585 54.866 0 54.866"
          />
          <polygon
            fill="#FF62C6"
            points="291.122 349.24 375.69 349.439 376 294.967 291.391 221.791"
          />
          <polygon
            fill="#FF4B3A"
            points="1.366 54.748 65.925 .86 292.585 54.866"
          />
          <polygon
            fill="#26302F"
            points="83.317 644.013 375.512 644.013 375.512 349.439 83.317 349.439"
          />
          <polygon
            fill="#4B81EF"
            points="83.317 491.817 227.707 491.817 227.707 348.948 83.317 348.948"
          />
          <polygon
            fill="#4B81EF"
            points="0 402.841 86.415 476.012 86.415 348.516 0 348.516"
          />
          <polygon
            fill="#FF62C6"
            points="158.439 349.439 292.585 349.439 292.585 202.643 158.439 202.643"
          />
          <polygon
            fill="#4B81EF"
            points="244.5 682.1 375.364 712.104 375.364 842.033"
          />
          <polygon
            fill="#FF4B3A"
            points="375.512 713.372 375.512 644.091 83.805 644.013"
          />
          <rect width="160" height="93" y="749" fill="#FF62C6" />
        </g>
        <g fill="#FFF" transform="translate(166 175)" onClick={shareOnFacebook}>
          <path d="M61.2405762,33 L64.452002,33 C64.5672363,33.0161965 64.6824707,33.0412274 64.7981934,33.0476078 C68.054541,33.2188977 71.311377,33.3833164 74.5672363,33.5624592 C75.1868652,33.5963245 75.8025879,33.6861413 76.4144043,33.7494547 L76.4144043,50.4273996 L75.932959,50.4273996 C72.957373,50.4273996 69.9812988,50.4224915 67.0057129,50.4293628 C65.6736816,50.4327984 64.3460449,50.4892406 63.0394043,50.7896115 C60.7825684,51.3088801 59.2669434,52.6114687 58.8465332,54.954067 C58.6438965,56.0834025 58.5516113,57.245131 58.5398926,58.3936078 C58.5008301,62.0672612 58.5218262,65.7404238 58.5213379,69.4135865 C58.5213379,69.5264709 58.5369629,69.6383738 58.5467285,69.7689272 L76.9065918,69.7689272 L76.9065918,70.2415695 C76.8836426,70.3151898 76.8484863,70.3878286 76.8396973,70.4629213 C76.6512207,72.1159426 76.4661621,73.7689639 76.2786621,75.4224761 C76.0311035,77.6094901 75.7825684,79.7960132 75.5345215,81.9825364 C75.285498,84.1818205 75.0374512,86.3820861 74.7864746,88.5808793 C74.7054199,89.2925423 74.6180176,90.0032237 74.5281738,90.7605313 L58.5203613,90.7605313 L58.5203613,91.3598006 C58.5203613,106.720923 58.5203613,122.081556 58.5193848,137.442678 C58.5193848,137.638999 58.5057129,137.83532 58.498877,138.031641 L37.6629395,138.031641 C37.6556152,137.83532 37.6429199,137.638508 37.6429199,137.442678 C37.6419434,122.07812 37.6419434,106.713561 37.6419434,91.3494937 L37.6419434,90.7683841 L22.0003418,90.7683841 L22.0003418,69.7605835 L37.6419434,69.7605835 L37.6419434,69.2457322 C37.6419434,65.4798079 37.6497559,61.7143745 37.639502,57.9484503 C37.6307129,54.9702634 37.9393066,52.0347763 38.7757324,49.1694739 C40.0057129,44.9534842 42.1780762,41.3348006 45.5560059,38.5009095 C49.498877,35.191922 54.1312012,33.6380427 59.176123,33.1600015 C59.863623,33.0947248 60.5525879,33.0525158 61.2405762,33" />
          <text fontFamily="Apercu" fontSize="24">
            <tspan x="5.96" y="21.224">
              Share to{" "}
            </tspan>
          </text>
        </g>
        <a
          xlinkHref={twitterHref}
          target="_blank"
          alt="Share on Twitter"
          transform="translate(102 331)"
        >
          <g fill="#FFF">
            <path d="M40.0032766,117.98234 L36.6589895,117.98234 C36.5327695,117.966035 36.4070935,117.939403 36.2803294,117.935055 C32.3941667,117.813853 28.560777,117.29698 24.7785281,116.39911 C18.6829706,114.952299 12.9769542,112.567399 7.64742177,109.279737 C7.4287129,109.144404 7.21544455,108.999832 7,108.859064 C12.3953627,109.390068 17.6938842,109.016137 22.901005,107.559 C28.1026853,106.103493 32.8337606,103.715332 37.1546208,100.337992 C26.5042608,100.042868 19.8570346,92.2897687 18.1100839,86.1492485 C19.6209161,86.4324147 21.1350125,86.5541598 22.6572697,86.4916567 C24.1751746,86.4286101 25.67839,86.2438184 27.135905,85.7910787 C15.6602182,83.1692103 10.5765972,72.9540327 10.9329512,65.5058393 C13.7805189,67.0580898 16.8070796,67.9108492 20.1187236,68.0255288 C9.672927,60.8349568 9.28556205,48.0278035 13.8539659,40.7649454 C19.0774082,47.1054755 25.3242122,52.1758342 32.6515032,55.8972133 C39.9815145,59.6185925 47.7581924,61.6676066 55.9973145,62.1029541 C55.9652154,61.9360981 55.9434533,61.8214185 55.9200591,61.7067389 C55.3264985,58.8495328 55.3090888,55.9901527 55.9380128,53.1394686 C57.0152356,48.2609672 59.524947,44.2624005 63.4997902,41.2367078 C68.3445724,37.5473954 73.8199108,36.2918988 79.796321,37.3751043 C84.0486306,38.1457945 87.6709282,40.1632853 90.6860639,43.2596336 C90.8177244,43.3949664 90.9265348,43.4444254 91.12729,43.4036625 C95.309417,42.5557946 99.2586897,41.0823524 102.984901,39.00725 C103.259647,38.8550686 103.532761,38.7012567 103.883131,38.5050514 C102.240638,43.3759437 99.2543373,47.0674301 94.9155234,49.8050651 C99.0116902,49.2979749 102.848888,48.2446621 106.609375,46.6016463 C106.512534,46.7549147 106.46901,46.8277444 106.421677,46.8978565 C103.74875,50.817615 100.501304,54.1824549 96.6641062,56.9771579 C96.5101395,57.0885764 96.4062256,57.1842333 96.4181947,57.4092444 C96.5498553,59.8294724 96.4753202,62.2475265 96.2625959,64.6601454 C95.9862175,67.7956261 95.4525026,70.8898004 94.6690679,73.9394073 C93.2496364,79.4646798 91.1180411,84.6997205 88.2394625,89.6298549 C84.283117,96.4068195 79.2196259,102.202758 72.920593,106.90462 C67.3467812,111.066238 61.1897458,114.034319 54.4804978,115.864844 C52.0855813,116.518137 49.6618301,117.043707 47.1961868,117.343722 C45.4971127,117.550253 43.7898779,117.693739 42.0848192,117.850812 C41.3927852,117.914402 40.6969428,117.939947 40.0032766,117.98234" />
            <text fontFamily="Apercu" fontSize="24">
              <tspan x="5.96" y="21.224">
                Share to{" "}
              </tspan>
            </text>
          </g>
        </a>
        <a
          href="https://createrefresh.eu/"
          xlinkHref="https://createrefresh.eu/"
          target="_blank"
          alt="Home"
        >
          <g transform="translate(78 45)">
            <rect
              width="92.895"
              height="36.393"
              x="10.867"
              y=".645"
              fill="#FF62C6"
            />
            <text
              fill="#FFF"
              fontFamily="Apercu"
              fontSize="32"
              textDecoration="underline"
            >
              <tspan x="10.84" y="28.632">
                Home
              </tspan>
            </text>
          </g>
        </a>
        <a
          href="https://createrefresh.eu/privacy"
          xlinkHref="https://createrefresh.eu/privacy"
          target="_blank"
          alt="Privacy"
        >
          <g transform="translate(89 83)">
            <rect width="108.543" height="32.393" y="3" fill="#FF62C6" />
            <text
              fill="#FFF"
              fontFamily="Apercu"
              fontSize="32"
              textDecoration="underline"
            >
              <tspan x="1" y="30">
                Privacy
              </tspan>
            </text>
          </g>
        </a>
        <a
          href="https://createrefresh.eu/faq"
          xlinkHref="https://createrefresh.eu/faq"
          target="_blank"
          alt="FAQ"
        >
          <g transform="translate(68 121)">
            <rect width="63.246" height="32.393" x="21" y="2" fill="#FF62C6" />
            <text
              fill="#FFF"
              fontFamily="Apercu"
              fontSize="32"
              textDecoration="underline"
            >
              <tspan x="19.693" y="27.632">
                FAQ
              </tspan>
            </text>
          </g>
        </a>
      </g>
    </svg>
  </Container>
)

class MobileNav extends Component {
  state = {
    showMenu: false,
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    const {
      state: { showMenu },
      props: { shareOnFacebook, getTwitterHref, cartoonId },
      toggleMenu,
    } = this

    return (
      <div className="dn-ns db w-100 mb1">
        <Hamburger
          showMenu={showMenu}
          toggleMenu={toggleMenu}
          shareOnFacebook={shareOnFacebook}
          twitterHref={getTwitterHref(cartoonId)}
        />
        <div className="flex justify-between w-100 pr2">
          <Icon src={menuLines} alt="menu" onClick={toggleMenu} />
          <a href="/">
            <img className="w-75 mv1" src={logoMobile} alt="main logo" />
          </a>
        </div>
      </div>
    )
  }
}

export default MobileNav
