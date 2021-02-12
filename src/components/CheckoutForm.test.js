import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // ARRANGE
    render(<CheckoutForm />);
    // ACT
    const header = screen.getByText(/checkout form/i);
    // ASSERT
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    // ARRANGE
    render(<CheckoutForm />);

    /***** Grab Our Inputs *****/
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);

    // ACT

    /***** Type into our Inputs *****/
    userEvent.type(firstName, 'Test');
    userEvent.type(lastName, 'McTesterton');
    userEvent.type(address, '123 Testright street');
    userEvent.type(city, 'Testopolis');
    userEvent.type(state, 'New Test');
    userEvent.type(zip, '00000');

    /***** Grab & Click our Button *****/
    const button = document.querySelector('button');
    userEvent.click(button);

    //ASSERT

    /***** Ensure that our Success Message Appears *****/
    expect(screen.getByTestId(/successMessage/i)).toBeInTheDocument();
});
