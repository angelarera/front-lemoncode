import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { usePromiseTracker } from 'react-promise-tracker';

// Mock the usePromiseTracker hook
vi.mock('react-promise-tracker', () => ({
  usePromiseTracker: vi.fn(),
}));

// Mock loader
vi.mock('react-spinners/ScaleLoader', () => ({
  default: () => <div data-testid="loader">Loading...</div>,
}));

describe('SpinnerComponent', () => {
  it('should not display spinner when promiseInProgress is false', () => {
    // Arrange
    vi.mocked(usePromiseTracker).mockReturnValue({
      promiseInProgress: false,
    });

    // Act
    render(<SpinnerComponent />);

    // Assert
    const loaderElement = screen.queryByTestId('loader');
    expect(loaderElement).not.toBeInTheDocument();
  });

  it('should display spinner when promiseInProgress is true', () => {
    // Arrange
    vi.mocked(usePromiseTracker).mockReturnValue({
      promiseInProgress: true,
    });

    // Act
    render(<SpinnerComponent />);

    // Assert
    const loaderElement = screen.queryByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('should call usePromiseTracker hook', () => {
    // Arrange
    vi.mocked(usePromiseTracker).mockReturnValue({
      promiseInProgress: false,
    });

    // Act
    render(<SpinnerComponent />);

    // Assert
    expect(usePromiseTracker).toHaveBeenCalledTimes(1);
  });

  it('should open modal when promiseInProgress is true', () => {
    vi.mocked(usePromiseTracker).mockReturnValue({
      promiseInProgress: true,
    });

    // Act
    render(<SpinnerComponent />);

    // Assert
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('should close modal when promiseInProgress is false', () => {
    // Arrange
    vi.mocked(usePromiseTracker).mockReturnValue({
      promiseInProgress: false,
    });

    // Act
    render(<SpinnerComponent />);

    // Assert
    const loaderElement = screen.queryByTestId('loader');
    expect(loaderElement).not.toBeInTheDocument();
  });

  it('should render without errors', () => {
    // Arrange
    vi.mocked(usePromiseTracker).mockReturnValue({
      promiseInProgress: false,
    });

    // Act and Assert
    expect(() => {
      render(<SpinnerComponent />);
    }).not.toThrow();
  });

  it('should use the correct value from usePromiseTracker', () => {
    // Arrange
    const mockValue = { promiseInProgress: true };
    vi.mocked(usePromiseTracker).mockReturnValue(mockValue);

    // Act
    render(<SpinnerComponent />);

    // Assert
    expect(usePromiseTracker).toHaveBeenCalled();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
