import React from 'react'
import { Header } from '../../components/Header/Header'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { Tittle } from '../../components/Main/Tittle/Tittle'
import { Personal } from '../../components/Main/Personal/Personal'
import { InstagramComponent } from '../../components/Main/InstagramComponent/InstagramComponent'
import { MapComponent } from '../../components/Main/MapComponent/MapComponent'
import { Footer } from '../../components/Footer/Footer'

export const HomePage = () => {
  return (
    <>
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
