import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  addContact,
  editContact,
  Contact
} from '../features/contacts/contactsSlice'
import styled from 'styled-components'
import { StyledButton, StyledInput } from '../styles/StyledComponents'

const StyledForm = styled.form``

interface ContactFormProps {
  contactToEdit?: Contact
  onContactSaved?: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({
  contactToEdit,
  onContactSaved
}) => {
  const dispatch = useDispatch()
  const [contact, setContact] = useState({
    id: '',
    name: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit)
    }
  }, [contactToEdit])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (contact.id) {
      dispatch(editContact(contact))
    } else {
      dispatch(addContact({ ...contact, id: Date.now().toString() }))
    }
    setContact({ id: '', name: '', email: '', phone: '' })
    if (onContactSaved) onContactSaved()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        name="name"
        value={contact.name}
        onChange={handleChange}
        placeholder="Nome"
        required
      />
      <StyledInput
        name="email"
        value={contact.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <StyledInput
        name="phone"
        value={contact.phone}
        onChange={handleChange}
        placeholder="Fone"
        required
      />
      <StyledButton type="submit">
        {contact.id ? 'Salvar' : 'Adicionar contato'}
      </StyledButton>
    </StyledForm>
  )
}

export default ContactForm
