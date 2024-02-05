import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../layout/sections/FlexWrapper";

export const Slider = () => {
  return (
    <StyledSlider>
        <FlexWrapper>
        <Slide>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Text>
        <Name>@ivan ivanow</Name>
      </Slide>
        </FlexWrapper>
      <Pagination>
        <span> </span>
        <span> </span>
        <span> </span>

      </Pagination>
    </StyledSlider>
  );
};
const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
  display: flex;
  flex-direction:column;
  align-items: center;


`;
const Slide = styled.div`
  text-align: center;
`;
const Text = styled.p`

`;
const Name = styled.span`

`;

const Pagination = styled.span`
    span{
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: deeppink;

    }
`