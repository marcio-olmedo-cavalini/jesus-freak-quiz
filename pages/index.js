import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import MyHead from '../src/components/Head'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

/* const BackgroundImage = styled.div`
    background-image: url(${db.bg});
    flex: 1;
    background-size: cover;
    background-position: center;
 ` */

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    
    <QuizBackground backgroundImage={db.bg}>
<MyHead />
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Pergunta 1</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Resposta 1</p>
              <p>Resposta 2</p>
              <p>Resposta 3</p>
            </Widget.Content>
          </Widget>
          
          <Widget>
            <Widget.Header>
              <h1>Pergunta 2</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Resposta 1</p>
              <p>Resposta 2</p>
              <p>Resposta 3</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/marcio-olmedo-cavalini/jesus-freak-quiz"/>
    </QuizBackground>
  )
}