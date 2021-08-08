import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import passengerData from '../mocks/titanic.json';
import PassengerTable from './PassengerTable';

let container = null;

jest.mock('axios');

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders passenger data in a table', async () => {
  axios.mockResolvedValue({ data: passengerData });
  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<PassengerTable />, container);
  });

  expect(
    container.querySelector('table tbody tr td:first-child').textContent
  ).toBe('29.0');
  expect(
    container.querySelector('table thead tr th:first-child').textContent
  ).toBe('Age');
});
