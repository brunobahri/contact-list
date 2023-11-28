import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeContact, Contact } from '../features/contacts/contactsSlice'
import ContactForm from './ContactForm'
import { StyledButton } from '../styles/StyledComponents'

interface ContactProps {
  contact: Contact
}

const ContactItem: React.FC<ContactProps> = ({ contact }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  const handleRemove = () => {
    dispatch(removeContact(contact.id))
  }

  return (
    <>
      {isEditing ? (
        <tr>
          <td colSpan={5}>
            <ContactForm
              contactToEdit={contact}
              onContactSaved={() => setIsEditing(false)}
            />
          </td>
        </tr>
      ) : (
        <tr>
          <td>{contact.id}</td>
          <td>{contact.name}</td>
          <td>{contact.phone}</td>
          <td>{contact.email}</td>
          <td>
            <StyledButton color="#17a2b8" onClick={() => setIsEditing(true)}>
              Editar
            </StyledButton>
            <StyledButton color="#dc3545" onClick={handleRemove}>
              Excluir
            </StyledButton>
          </td>
        </tr>
      )}
    </>
  )
}

export default ContactItem
