import React from 'react'
import './HomePage.css'
import { Header } from '../../components/Header/Header'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { Tittle } from '../../components/Main/Tittle/Tittle'
import { Personal } from '../../components/Main/Personal/Personal'
import { InstagramComponent } from '../../components/Main/InstagramComponent/InstagramComponent'
import { MapComponent } from '../../components/Main/MapComponent/MapComponent'
import { Footer } from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'


export const HomePage = () => {

  const navigate = useNavigate();

  return (
    <>
    <button onClick={() => navigate('/form')} className='survey_button'>Заполнить анкету</button>
    <Header/>
      <BackgroundContainer>
        <Tittle/>
      </BackgroundContainer>
      <Personal/>
      <InstagramComponent/>
      <MapComponent/>
      <BackgroundContainer>
        <Footer/>
      </BackgroundContainer>
    </>
  )
}
