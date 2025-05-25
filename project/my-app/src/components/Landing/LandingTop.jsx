import React from 'react';
import ButtonEvents from './ButtonEvents';
import styled from 'styled-components';
import Ellipse3 from '../../assets/Ellipse_3.svg';
import Ellipse2 from '../../assets/Ellipse_2.svg';
import Ellipse4 from '../../assets/Ellipse_4.svg';
import Ellipse5 from '../../assets/Mask_group.svg';

function LandingTop() {
  return (
    <StyledLandingTop>
      <FindEvent> 
        Знайди свою подію
      </FindEvent>

      <StyledElipse2 src={Ellipse2} alt="Elipse2"/>
      <StyledElipse3 src={Ellipse3} alt="Elipse3"/>
      <StyledElipse4 src={Ellipse4} alt="Elipse4"/>
      
      <ViewEvents>
        <ButtonEvents text="Переглянути всі події"/>
        <StyledEllipse5>
          <img src={Ellipse5} alt="Ellipse decoration" />
          <OverlayText>Рекомендовані події</OverlayText>
        </StyledEllipse5>
      </ViewEvents>
    </StyledLandingTop>
  );
}

export default LandingTop;

const StyledLandingTop = styled.div`
  position: relative;
  margin-bottom: 80px;
`;

const StyledEllipse5 = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  margin-bottom: -90px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
`;

const OverlayText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 58px;
  font-weight: bold;
  pointer-events: none;
`;

const StyledElipse4 = styled.img`
  position: absolute;
  top: 0%;
  left: 10%;
  width: 90px;
  height: 90px;
  opacity: 0.9;
  rotate: 0deg;
`;

const StyledElipse2 = styled.img`
  position: absolute;
  top: 30%;
  left: 0%;
  width: 350px;
  height: 250px;
  opacity: 0.9;
  rotate: 23.63deg;
`;

const StyledElipse3 = styled.img`
  position: absolute;
  top: 30%;
  left: 85%;
  width: 193px;
  height: 193px;
  opacity: 0.9;
  rotate: 65.44deg;
`;

const FindEvent = styled.div`
  color: #fff;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 96px;
  font-weight: 700;
`;

const ViewEvents = styled.div`
  // position: relative;
  background-color: #531293;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  gap: 80px;
  flex-direction: column;
`;
