import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'

test("renders App without crashing", () => {
  render(<App />);
});
// Arrange 
// Act 
// Assert
test("form labels are written correctly and have form control (input has id attribute)",()=>{
  const {getByLabelText} = render(<ContactForm/>);
  getByLabelText(/first name/i);
  getByLabelText(/last name/i);
  getByLabelText(/email/i);
  getByLabelText(/message/i);


})

// const {getByLabelText} = render(<ContactForm/>);
// const firstNameLabel = getByLabelText(/first name/i);
// const lastNameLabel = getByLabelText(/last name/i);
// const emailLabel = getByLabelText(/email/i);
// const messageLabel = getByLabelText(/message/i);

