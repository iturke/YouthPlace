import LandingTop from './LandingTop';
import LanndingBottom from './LandingBottom';
import styled from 'styled-components';

function LandingBody(){
    return(
        <Container>
            <>
            <LandingTop/>
            <LanndingBottom/>
            </>
        </Container>
    );
}

export default LandingBody

const Container = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    color: #333;
`;  