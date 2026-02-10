import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent', () => {
  it('should not display the dialog when isOpen is false', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: 'Test Title',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
      children: <div>Test Content</div>,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    const titleElement = screen.queryByText('Test Title');
    expect(titleElement).not.toBeInTheDocument();
  });

  it('should display the dialog elements when isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: 'Test Title',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
      children: <div>Test Content</div>,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();

    const contentElement = screen.getByText('Test Content');
    expect(contentElement).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: /Cancel/i });
    expect(closeButton).toBeInTheDocument();

    const acceptButton = screen.getByRole('button', { name: /Accept/i });
    expect(acceptButton).toBeInTheDocument();
  });

  it('should display the buttons with correct labels when isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: 'Test Title',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
      children: <div>Test Content</div>,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    const closeButton = screen.getByRole('button', { name: /Cancel/i });

    expect(closeButton.textContent).toBe('Cancel');

    const acceptButton = screen.getByRole('button', { name: /Accept/i });
    expect(acceptButton.textContent).toBe('Accept');
  });

  it('should call onClose when close button is clicked', () => {
    // Arrange
    const onCloseMock = vi.fn();
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: onCloseMock,
      title: 'Test Title',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
      children: <div>Test Content</div>,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const closeButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(closeButton);

    // Assert
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should call onAccept and onClose when accept button is clicked', () => {
    // Arrange
    const onAcceptMock = vi.fn();
    const onCloseMock = vi.fn();
    const props = {
      isOpen: true,
      onAccept: onAcceptMock,
      onClose: onCloseMock,
      title: 'Test Title',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
      children: <div>Test Content</div>,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const acceptButton = screen.getByRole('button', { name: /accept/i });
    fireEvent.click(acceptButton);

    // Assert
    expect(onAcceptMock).toHaveBeenCalledTimes(1);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
