import styled from 'styled-components';


const Container = styled.div`
   width: 300px;
   height: auto;
   position: fixed;
   top: 558px; 
   left: 757px;
   padding-top: 15px;
  `;

  const SkillList = styled.ul`
  list-style: circle;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: left;
  margin-bottom: 5px;
  justify-content: left;
  
`;

const SkillName = styled.span`
  width: 170px;
  font-family: "Roboto Flex", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  text-align: left;
  margin-right: 10px;  
`;

const CirclesContainer = styled.div`
  display: flex;
`;

interface CircleProps {  
   filled: boolean; 
  }

  
  const Circle = styled.div.withConfig({   shouldForwardProp: (prop) => prop !== 'filled'})<CircleProps>`
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