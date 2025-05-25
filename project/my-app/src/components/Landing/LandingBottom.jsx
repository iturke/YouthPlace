import React from 'react';
import styled from 'styled-components';


export default function LandingBottom() {
  return (
    <>
      <TopBar>
        <SortButton>Популярні ⌄</SortButton>
      </TopBar>

      <EventGrid>
        {[...Array(3)].map((_, i) => (
          <EventCard key={i}>
            <EventImage />
            <EventTitle>Lorem ipsum</EventTitle>
            <EventDesc>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit…
            </EventDesc>
          </EventCard>
        ))}
      </EventGrid>

      <MoreButtonWrapper>
        <MoreButton>Переглянути більше подій</MoreButton>
      </MoreButtonWrapper>
    </>
  );
}


const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const SortButton = styled.button`
  background-color: transparent;
  border: 1px solid #ff3cac;
  color: #ff3cac;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  gap: 20px;
  padding: 0 20px;
  margin-bottom: 30px;
`;

const EventCard = styled.div`
  background-color: #3e3a55;
  border-radius: 12px;
  overflow: hidden;
  text-align: left;
  padding: 12px;
`;

const EventImage = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ccc;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const EventTitle = styled.h3`
  margin: 8px 0 4px;
  font-size: 16px;
  color: white;
`;

const EventDesc = styled.p`
  font-size: 12px;
  color: #ccc;
`;

const MoreButtonWrapper = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const MoreButton = styled.button`
  background-color: #ff0080;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;