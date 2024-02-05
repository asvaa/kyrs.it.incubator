import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { type } from "os";

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
  
}


export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.description}</SkillText>
      <SkillText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim
      </SkillText>
    </StyledSkill>
  );
};
const StyledSkill = styled.div`
width: 30%;
background-color: rgba(255,255,255,0.56);
margin: 10px;
`;
const SkillTitle = styled.h3``;
const SkillText = styled.p``;
