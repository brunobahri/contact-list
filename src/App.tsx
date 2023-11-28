import React from 'react'
import ContactList from './components/ContactList'
import { StyledApp, StyledHeader } from './styles/StyledComponents'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <StyledApp>
      <StyledHeader>
        <h1>Agenda de contatos</h1>
        <ContactForm />
      </StyledHeader>
      <ContactList />
    </StyledApp>
  )
}

export default App
