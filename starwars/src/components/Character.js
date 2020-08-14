// Write your Character component here
import React from "react";
import styled from "styled-components";

// const Character = (props) => {
//   const StyledChar = styled.div`
//     font-size: ${(props) => props.theme.smallFont};
//   `;

const StyledChar = styled.div`
  font-size: 1rem;
  border: 6px solid black;
  border-style: dashed;
  border-radius: 10px;
  margin-bottom: 10px;
`;

// const StyledSpan = styled.span`
//   border: 2px solid black;
//   border-radius: 5px;
// `;

const NameFont = styled.p`
  color: #d822e1;

  &:hover {
    background-color: #5f22e1;
    border: 2px solid black;
    border-radius: 5px;
    font-weight: bold;
    color: white;
  }
`;

const HeightMassFont = styled.p`
  color: #5f22e1;
  &:hover {
    background-color: #d822e1;
    border: 2px solid black;
    border-radius: 5px;
    font-weight: bold;
    color: white;
  }
`;

const SkinEyeColor = styled.p`
  color: #47687b;
  &:hover {
    background-color: #2276e1;
    border: 2px solid black;
    border-radius: 5px;
    color: white;
    font-weight: bold;
  }
`;

const YearGenderColor = styled.p`
  color: #2276e1;
  &:hover {
    background-color: #47687b;
    border: 2px solid black;
    border-radius: 5px;
    font-weight: bold;
    color: white;
  }
`;

const Character = (props) => {
  const { info } = props;

  return (
    <StyledChar>
      <NameFont>Name: {info.name}</NameFont>
      <HeightMassFont>Height: {info.height}</HeightMassFont>
      <HeightMassFont>Mass: {info.mass}</HeightMassFont>
      <SkinEyeColor>Hair Color: {info.hair_color}</SkinEyeColor>
      <SkinEyeColor>Skin Color: {info.skin_color}</SkinEyeColor>
      <SkinEyeColor>Eye Color: {info.eye_color}</SkinEyeColor>
      <YearGenderColor>Year Born: {info.birth_year}</YearGenderColor>
      <YearGenderColor>Gender: {info.gender}</YearGenderColor>
    </StyledChar>
  );
};

export default Character;

// const { test} = props;

// return (
//   <StyledChar>
//     <NameFont>Name: {test.name}</NameFont>
//     <HeightMassFont>Height: {test.height}</HeightMassFont>
//     <HeightMassFont>Mass: {test.mass}</HeightMassFont>
//     <SkinEyeColor>Hair Color: {test.hairColor}</SkinEyeColor>
//     <SkinEyeColor>Skin Color: {test.skinColor}</SkinEyeColor>
//     <SkinEyeColor>Eye Color: {test.eyeColor}</SkinEyeColor>
//     <YearGenderColor>Year Born: {test.birthYear}</YearGenderColor>
//     <YearGenderColor>Gender: {test.gender}</YearGenderColor>
//   </StyledChar>
// );
// };
