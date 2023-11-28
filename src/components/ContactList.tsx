import React from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import { RootState } from '../app/store'
import { StyledTable } from '../styles/StyledComponents'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts)

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Fone</th>
          <th>E-mail</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </tbody>
    </StyledTable>
  )
}

export default ContactList
