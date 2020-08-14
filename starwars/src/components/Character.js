// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = (props) => {
  //   const StyledChar = styled.div`
  //     font-size: ${(props) => props.theme.smallFont};
  //   `;
  //   const NameColor = styled.p`
  //     color: ${(props) => props.theme.nameFont};
  //   `;

  const StyledChar = styled.div`
    font-size: 1rem;
    border: 6px solid black;
    border-style: dashed;
    border-radius: 10px;
    margin-bottom: 10px;
  `;

  const NameFont = styled.p`
    color: #d822e1;
  `;

  const HeightMassFont = styled.p`
    color: #5f22e1;
  `;

  const SkinEyeColor = styled.p`
    color: #47687b;
  `;

  const YearGenderColor = styled.p`
    color: #2276e1;
  `;

  return (
    <StyledChar>
      <NameFont>Name: {props.name}</NameFont>
      <HeightMassFont>Height: {props.height}</HeightMassFont>
      <HeightMassFont>Mass: {props.mass}</HeightMassFont>
      <SkinEyeColor>Hair Color: {props.hairColor}</SkinEyeColor>
      <SkinEyeColor>Skin Color: {props.skinColor}</SkinEyeColor>
      <SkinEyeColor>Eye Color: {props.eyeColor}</SkinEyeColor>
      <YearGenderColor>Year Born: {props.birthYear}</YearGenderColor>
      <YearGenderColor>Gender: {props.gender}</YearGenderColor>
    </StyledChar>
  );
};

export default Character;
