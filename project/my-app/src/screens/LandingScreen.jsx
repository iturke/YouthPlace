import styled from "styled-components";
import Header from "./../components/Header/Header"
import Footer from "./../Footer"
import LandingBody from "../components/Landing/LandingBody/LandingBody"
import Card from "./../Card"
import Button from "./../components/Button/Button"
import "../fonts.css"


function LandingScreen() {
  return(
    <Container>
      <Header/>
      <LandingBody/>
      <Footer/>

    </Container>
  );
}

export default LandingScreen


const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #35324D;
  font-family: "e-Ukraine Head", sans-serif;
`;