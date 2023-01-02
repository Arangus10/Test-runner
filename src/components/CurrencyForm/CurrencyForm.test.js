import CurrencyForm from './CurrencyForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });
  it('should run action callback with proper data on form submit', () => {
    const action = jest.fn();

    // render component
    render(<CurrencyForm action={action} />);

    // find “convert” button
    const submitButton = screen.getByText('Convert');

    // find fields elems
    const inputAmount = screen.getByTestId('inputAmount');
    const selectFrom = screen.getByTestId('selectFrom');
    const selectTo = screen.getByTestId('selectTo');

     // set test values to fields
    userEvent.type(inputAmount, '100');
    userEvent.selectOptions(selectFrom, 'PLN');
    userEvent.selectOptions(selectTo, 'USD');


    // simulate user click on "convert" button
    userEvent.click(submitButton);

    // check if action callback was called once and with proper argument
    expect(action).toHaveBeenCalledTimes(1);
    expect(action).toHaveBeenCalledWith({ amount: 100, from: 'PLN', to: 'USD' });

    });
});
