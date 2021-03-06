import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Conhecimentos e experiências
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>
            Front-end
          </ListTitle>
          <ListParagraph>
            Conhecimento em React<br/>
            JavaScript <br/>
            TypeScript <br />
            Expressões Regulares (Regex) <br />
            React.js <br/>
            Redux <br/>
            Context API <br/>
            Bootstrap <br/>
            Bulma <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>
            Back-end
          </ListTitle>
          <ListParagraph>
            Conhecimento em Node e Banco de Dados <br/>
            JavaScript <br />
            Node.js <br/>
            Express <br/>
            MySql <br/>
            MongoDB <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
