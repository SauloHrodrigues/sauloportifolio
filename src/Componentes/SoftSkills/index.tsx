import styled from 'styled-components';
import breakpoints from '../../Styles/Breakpoint/breakpoint';

const Container = styled.div`
  padding: 0 100px;
  width: 300px;
  margin-top: 45px;
  margin-right: 116px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.bg} {
    width: 100%;
    padding: 0 20px;
  }`;

const SkillList = styled.ul`
  list-style: circle;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const SkillItem = styled.li`
display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  

  @media ${breakpoints.bg} {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }`;

const SkillName = styled.span`
  width: 100%;
  font-family: "Roboto Flex", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  text-align: left;
  margin-right: 15px;
  
  

  @media ${breakpoints.bg} {
    text-align: center;
  }`;

const CirclesContainer = styled.div`
  display: flex;
  gap: 10px;

  @media ${breakpoints.bg} {
    justify-content: center;
    margin-bottom: 23px;
  }`;

  interface CicleProps {
     filled:boolean;
}

const Circle = styled.div<CicleProps>`
  width: 12px;
  height: 12px;
  margin-left: 5px;
  border-radius: 50%;
  background: ${({ filled }) => (filled ? '#EAB53D' : 'transparent')};
  border: 2px solid #EAB53D;  

`;

const skills = [
  { name: 'ALGORITIMOS', level: 4 },
  { name: 'JAVA', level: 4 },
  { name: 'SPRING BOOT', level: 3 },
  { name: 'APIs REST', level: 3 },
  { name: 'TESTES UNITÁRIOS', level: 3 },
  { name: 'SELENIUM', level: 2 },
  { name: 'SQL', level: 2 },
  { name: 'HTML', level: 4 },
  { name: 'CSS', level: 4 },
  { name: 'JAVA / TYPE SCRIPT', level: 3 },
  { name: 'REACT', level: 3 },
  { name: 'GIT & GITHUB', level: 3 },

];


const ListSkills = () => {
  return (
    <Container>
      <SkillList>
        {skills.map((skill) => (
          <SkillItem key={skill.name}>
            <SkillName>{skill.name}</SkillName>
            <CirclesContainer>
              {[...Array(5)].map((_, i) => (
                <Circle key={i} filled={i < skill.level} />
              ))}
            </CirclesContainer>
          </SkillItem>
        ))}
      </SkillList>
    </Container>
  );
};

export default ListSkills;