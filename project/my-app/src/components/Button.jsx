import styled from "styled-components";   

function Button(props){
   return(
    <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
   ); 
}

export default Button

const StyledButton = styled.button`
    background-color: #D70071;
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-size: 25px;
`
