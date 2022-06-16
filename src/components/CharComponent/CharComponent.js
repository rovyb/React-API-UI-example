import { styled, keyframes } from "@stitches/react";

const CharContainer = styled("button", {
  width: "100%",
  borderRadius: 10,
  padding: "12px",
  backgroundColor: '#83D2E4',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  variants: {
    state: {
      closed: {
        marginBottom: '20px'
      }
    }
  }
})
const CharName = styled("h1", {
  fontFamily: "schwifty",
  fontSize: "28px",
  color: "#000",
  margin: "10px 20px"
  
})
const CharStatus = styled("h1", {
  fontFamily: "schwifty",
  fontSize: "24px",
  color: "#fff",
  marginBottom: "10px",
  display: "flex",
})
const CharStatusDetail = styled("h1", {
  fontFamily: "schwifty",
  fontSize: "24px",
  color: "#fff",
  margin: "0 20px"
  
})

export const CharComponent = (props) => {
  let char = props.char
  

  return (
    <CharContainer onClick={() => props.expand(char.id)} key={char.id} state={props.expanded === char.id ? undefined : "closed"} >
      <CharName>{char.name}</CharName>
      <CharStatus>
        <div>
        <CharStatusDetail>Species:</CharStatusDetail>
        <CharStatusDetail>{char.species}</CharStatusDetail>
        </div>
        <div>
        <CharStatusDetail>Status:</CharStatusDetail>
        <CharStatusDetail>{char.status}</CharStatusDetail>
        </div>
      </CharStatus>
    </CharContainer>
  )
}