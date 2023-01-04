import { cleanup, render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox amount={100} from="PLN" to="USD"  />);
    });
    it('sould render proper info about conversion when PLN -> USD', () => {
        
        const testCases = [
            {amount: 3500000000, from: 'PLN', to: 'USD', output: 'PLN 3,500,000,000.00 = $1,000,000,000.00'},
            {amount: 700, from: 'PLN', to: 'USD', output: 'PLN 700.00 = $200.00'},
            {amount: 350, from: 'PLN', to: 'USD', output: 'PLN 350.00 = $100.00'},
            {amount: 4, from: 'PLN', to: 'USD', output: 'PLN 4.00 = $1.14'},
            {amount: 0, from: 'PLN', to: 'USD', output: 'PLN 0.00 = $0.00'},
        ]

        for (const testObj of testCases) {

            // render component
            render(<ResultBox amount={testObj.amount} from={testObj.from} to={testObj.to} />);

            // find resultBox elem
            const resultBox = screen.getByTestId('resultBox');

            expect(resultBox).toHaveTextContent(testObj.output);

            cleanup();
        }
    })

    it('should render proper info about conversion when USD -> PLN', () => {
        const testCases = [
            {amount: 100, from: 'USD', to: 'PLN', output: '$100.00 = PLN 350.00'},
            {amount: 200, from: 'USD', to: 'PLN', output: '$200.00 = PLN 700.00'},
            {amount: 420.1, from: 'USD', to: 'PLN', output: '$420.10 = PLN 1,470.35'},
            {amount: 1, from: 'USD', to: 'PLN', output: '$1.00 = PLN 3.50'},
            {amount: 0, from: 'USD', to: 'PLN', output: '$0.00 = PLN 0.00'},
        ]

        for (const testObj of testCases) {

            // render component
            render(<ResultBox amount={testObj.amount} from={testObj.from} to={testObj.to} />);

            // find resultBox elem
            const resultBox = screen.getByTestId('resultBox');

            expect(resultBox).toHaveTextContent(testObj.output);

            cleanup();
        }
    })

    it('should render proper info about conversion when PLN -> PLN and USD -> USD', () => {
        const testCases = [
            {amount: 100, from: 'PLN', to: 'PLN', output: 'PLN 100.00 = PLN 100.00'},
            {amount: 2, from: 'PLN', to: 'PLN', output: 'PLN 2.00 = PLN 2.00'},
            {amount: 500, from: 'USD', to: 'USD', output: '$500.00 = $500.00'},
            {amount: 0.5, from: 'USD', to: 'USD', output: '$0.50 = $0.50'},
        ]

        for (const testObj of testCases) {
            render(<ResultBox amount={testObj.amount} from={testObj.from} to={testObj.to} />);

            // find resultBox elem
            const resultBox = screen.getByTestId('resultBox');

            expect(resultBox).toHaveTextContent(testObj.output);

            cleanup();
        }
    })

    it('should render text "Wrong value..." when entered number is < 0', () => {
        const testCases = [
            {amount: -20, from: 'PLN', to: 'USD', output: 'Wrong value...'},
            {amount: -0.5, from: 'PLN', to: 'USD', output: 'Wrong value...'},
            {amount: -200, from: 'USD', to: 'PLN', output: 'Wrong value...'},
            {amount: -200.5, from: 'USD', to: 'PLN', output: 'Wrong value...'}
        ]

        for (const testObj of testCases) {
            render(<ResultBox amount={testObj.amount} from={testObj.from} to={testObj.to} />);

            // find resultBox elem
            const resultBox = screen.getByTestId('resultBox');

            expect(resultBox).toHaveTextContent(testObj.output);

            cleanup();
        }
    })
});
