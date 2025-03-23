import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router';
import Sidebar from './Sidebar';


jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: jest.fn(),
}));

// Mock useLocation to control the current route
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: jest.fn(),
}));

describe('Sidebar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all navigation links', () => {
    render(
      <MemoryRouter initialEntries={['/overview']}>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Transactions')).toBeInTheDocument();
    expect(screen.getByText('Budgets')).toBeInTheDocument();
    expect(screen.getByText('Pots')).toBeInTheDocument();
    expect(screen.getByText('Recurring Bills')).toBeInTheDocument();
  });

  test('highlights active link based on current route', () => {
    require('react-router-dom').useLocation.mockReturnValue({ pathname: '/overview' });
    render(
      <MemoryRouter initialEntries={['/overview']}>
        <Sidebar />
      </MemoryRouter>
    );
    const overviewLink = screen.getByText('Overview');
    expect(overviewLink).toHaveClass('active');
  });

  test('navigates to correct page on link click', () => {
    render(
      <MemoryRouter initialEntries={['/overview']}>
        <Sidebar />
      </MemoryRouter>
    );
    const transactionsLink = screen.getByText('Transactions');
    fireEvent.click(transactionsLink);
    expect(window.location.pathname).toBe('/transactions');
  });

  test('toggles minimized state on Minimize Menu click', () => {
    render(
      <MemoryRouter initialEntries={['/overview']}>
        <Sidebar />
      </MemoryRouter>
    );
    const minimizeButton = screen.getByText('Minimize Menu');
    fireEvent.click(minimizeButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('minimized');
  });

  test('renders branding and footer', () => {
    render(
      <MemoryRouter initialEntries={['/overview']}>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByText('finance')).toBeInTheDocument();
    expect(screen.getByText('Urban Tech Hub')).toBeInTheDocument();
  });
});