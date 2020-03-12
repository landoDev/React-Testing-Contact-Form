import React from "react";
import { render, getByLabelText, fireEvent, getByText, getByPlaceholderText, findAllByText } from "@testing-library/react";
import ContactForm from './ContactForm'

// Arrange 
// Act 
// Assert
test("form renders, labels are written correctly, and has form control (input has id attribute)",()=>{
  const {getByLabelText} = render(<ContactForm/>);
  getByLabelText(/first name/i);
  getByLabelText(/last name/i);
  getByLabelText(/email/i);
  getByLabelText(/message/i);
})

test("form adds contact info and message after form submit", ()=>{
    const {getByLabelText, getByText} = render(<ContactForm/>);
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    

    fireEvent.change(firstNameInput, {target: { name: 'firstName', value: 'Kratos'}})
    fireEvent.change(lastNameInput, {target: { name: 'lastName', value: 'Father of Boy'}})
    fireEvent.change(emailInput, {target: { name: 'email', value: 'godOfWar@ps4.com'}})
    fireEvent.change(messageInput, {target: { name: 'message', value: 'There are consequences to killing a god'}})
    
    const submitButton = getByText(/submit/i)
    fireEvent.click(submitButton);
    fireEvent.click(submitButton);
    // expect.hasAssertions();
    findAllByText(/kratos/i)

})

test("max-length of name inputs should be 12", ()=>{
    const {getByLabelText, getByText} = render(<ContactForm/>);
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
})