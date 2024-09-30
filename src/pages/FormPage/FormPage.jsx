import React from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { ContentContainer } from '../../components/ContentContainer/ContentContainer'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { Form } from '../../components/Form/Form'

export const FormPage = () => {
  return (
    <>
        <Header/>
        <ContentContainer>
            <Form/>
        </ContentContainer>
        <BackgroundContainer>
        <Footer/>
      </BackgroundContainer>
    </>
  )
}
