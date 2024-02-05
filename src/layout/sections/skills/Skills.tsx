import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <Skill
          iconId={"codeSvg"}
          title={"html5"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          }
        />
        <Skill
          iconId={"css"}
          title={"css3"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          }
        />
        <Skill
          iconId={"react"}
          title={"React"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enimF"
          }
        /><Skill
        iconId={"typeScript"}
        title={"typeScript"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        }
      />
      <Skill
        iconId={"styled"}
        title={"styled components"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        }
      />
      <Skill
        iconId={"figma"}
        title={"WEB DESIgN"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enimF"
        }
      />
      </FlexWrapper>
    </StyledSkills>
  );
};
const StyledSkills = styled.section`
  background-color: #ffe5e4;
  min-height: 100vh;
`;
