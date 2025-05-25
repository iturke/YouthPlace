import styled from "styled-components";
function ButtonEvents(props){

   return(
    <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
   ); 

}
export default ButtonEvents

const StyledButton = styled.button`
background-color: #D70071;
width: 660px;
height: 80px;
border-radius: 30px;
color: white;
font-size: 48px;
font-weight: 700;
cursor: pointer;
`
