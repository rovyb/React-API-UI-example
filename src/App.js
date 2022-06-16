import { styled, keyframes } from "@stitches/react";
import { CharacterList } from "./components/CharacterList/CharacterList";
import topImage from "./assets/top.png"
import bottomImage from "./assets/bottom.png"
import logo from "./assets/logo.png"
import showme from "./assets/showme.png"
import jerry from "./assets/jerry.png"
import summer from "./assets/summer.png"

const scaleUp = keyframes({
  '0%': { transform: 'scale(0)', opacity: "0" },
  '100%': { transform: 'scale(1)', opacity: "1" },
});

const AppContainer = styled("div", {
  overflowX: "hidden",
})

const ContentContainer = styled("div", {
  maxWidth: "1260px",
  position: "relative",
  margin: "24px auto",
})

const TopImage = styled("img", {
  position: "absolute",
  top: "150px",
  left: "-100px",
  width: "400px",
  zIndex: "0",
  animation: `${scaleUp} 1000ms`,
})

const Logo = styled("img", {
  display: "block",
  margin: "24px auto",
  position: "relative",
  zIndex: 10,
  width: '60%'
})

const ShowMe = styled("img", {
  position: "absolute",
  top: "600px",
  right: "-200px",
  width: "400px",
  zIndex: "0",
})
const Jerry = styled("img", {
  position: "absolute",
  top: "1300px",
  right: "-100px",
  width: "300px",
  zIndex: "0",
})
const Summer = styled("img", {
  position: "absolute",
  top: "1800px",
  left: "-100px",
  width: "400px",
  zIndex: "0",
})
const BottomImage = styled("img", {
  position: "fixed",
  bottom: "0px",
  left: "-100px",
  width: "400px",
  zIndex: "0",
})

function App() {


  return (
    <AppContainer>
      <TopImage src={topImage}/>
      <ContentContainer>
        <Logo src={logo}/>
        <ShowMe src={showme}/>
        <Jerry src={jerry}/>
        <Summer src={summer}/>
        <CharacterList />
      </ContentContainer>
      <BottomImage src={bottomImage} />
    </AppContainer>
  );
}

export default App;
