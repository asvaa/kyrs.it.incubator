import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/proj1.svg"
import timerImg from "./../../../assets/images/proj2.svg"

const worksItems = ["ALL", "landing page", "React", "spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems} />
      <FlexWrapper justify={"space-around"}>
        <Work
          title={"Social Network"}
          src={socialImg}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
        <Work
          title={"Timer"}
          src={timerImg}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #deefff;
`;
