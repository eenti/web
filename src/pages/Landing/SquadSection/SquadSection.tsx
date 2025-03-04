import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  CarouselContainer,
  CrownIcon,
  KeyContainer,
  Keyhole,
  Name,
  NameContainer,
  Position,
  TeamContainer,
  TeamTitle,
} from './SquadSection.styles';
import Crown from '~/assets/crown_icon.svg';
import Key from '~/assets/key.png';
import members from '~/data/squad.json';

export function Squad() {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <>
      <TeamContainer>
        <CrownIcon src={Crown} />
        <TeamTitle>THE POWER OF THE PEOPLE</TeamTitle>
        <KeyContainer>
          <Keyhole src={Key} />
          <CarouselContainer
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            selectedItem={selectedItem}
            onClickItem={(index: number) => {
              setSelectedItem(index);
            }}
            onChange={(index: number) => {
              setSelectedItem(index);
            }}
          >
            {members.map((member) => (
              <NameContainer key={member.name}>
                <Name>{member.name}</Name>
                <Position>{member.position}</Position>
              </NameContainer>
            ))}
          </CarouselContainer>
        </KeyContainer>
      </TeamContainer>
    </>
  );
}
