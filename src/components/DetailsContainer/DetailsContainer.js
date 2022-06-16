import { styled } from "../../stitches.config";
import {useLocAPI} from '../../lib/useLocAPI';

const DetContainer = styled("div", {
  overflow: "hidden",
  opacity: 0,
  maxHeight: 0,
  transition: "visibility 0s, opacity 0.5s linear",
  animationFillMode: "forwards",
  visibility: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@bp1": {
    flexDirection: "row"
  },
  "&.open": {
        marginTop: '-20px',
        backgroundColor: "#8BCF21",
        border: '10px #83D2E4 solid',
        borderRadius: 10,
        borderTop: '',
        marginBottom: '20px',
        transition: "all .2s ease",
        padding: "12px 12px",
        overflow: "hidden",
        maxHeight: 1200,
        height: "auto",
        visibility: "visible",
        opacity: 1,
      },
  },
)

const CharImage = styled("img", {
  width: "85%",
  padding: "5px",
  "@bp1": {
    width: "50%"
  },
})

const LocationInfoContainer = styled("div", {
  paddingLeft: "20px"
})

const LocationHeader = styled("h3", {
  fontWeight: "600",
  fontSize: "20px"
})

const LocationInfo = styled("p", {
  fontWeight: "400",
  fontSize: "20px"
})

export const DetailsContainer = (props) => {
  const locationDetails = useLocAPI(props.locURL)
  let char = props.char


  return (
    <DetContainer className={props.expanded === char.id ? "open" : undefined}>
      <CharImage src={char.image} />
      <LocationInfoContainer>
        <LocationHeader>Current Location:</LocationHeader>
        <LocationInfo>{locationDetails ? locationDetails.name : "No Location Found"}</LocationInfo>
        <LocationHeader>Location Type: </LocationHeader>
        <LocationInfo>{locationDetails ? locationDetails.type : "No Location Found"}</LocationInfo>
        <LocationHeader>Number of residents:</LocationHeader>
        <LocationInfo>{locationDetails ? locationDetails.residents.length : "No Location Found"}</LocationInfo>
      </LocationInfoContainer>


    </DetContainer>
  )
}