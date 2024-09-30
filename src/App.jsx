
import './App.css';
import { Header } from './components/Header/Header';
import { Tittle } from './components/Main/Tittle/Tittle';
import { BackgroundContainer } from './components/BackgroundContainer/BackgroundContainer'
import { ContentContainer } from './components/ContentContainer/ContentContainer';
import { Personal } from './components/Main/Personal/Personal';
import { InstagramComponent } from './components/Main/InstagramComponent/InstagramComponent';


function App() {
  return (
    <div className='app'>
      <ContentContainer>
        <Header/>
      </ContentContainer>
      <BackgroundContainer>
        <Tittle/>
      </BackgroundContainer>
      <ContentContainer>
        <Personal/>
      </ContentContainer>
      <ContentContainer>
        <InstagramComponent/>
      </ContentContainer>
    </div>
  );
}

export default App;
