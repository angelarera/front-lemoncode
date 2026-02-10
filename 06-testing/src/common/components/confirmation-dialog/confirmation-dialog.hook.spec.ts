import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from '#common/models';

describe('useConfirmationDialog', () => {
  it('should return an object with default values when the hook is called', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    const defaultLookup = createEmptyLookup();

    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(defaultLookup);
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should update isOpen and itemToDelete when it calls onOpenDialog', () => {
    // Arrange
    const newItem: Lookup = {
      id: '1',
      name: 'Test Item',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(newItem);
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(newItem);
  });

  it('should set isOpen to false when it calls onClose', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog({ id: '1', name: 'Test' });
    });

    // Act
    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBe(false);
  });

  it('should reset itemToDelete when it calls onAccept', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const testItem: Lookup = { id: '1', name: 'Test' };
    act(() => {
      result.current.onOpenDialog(testItem);
    });

    // Act
    act(() => {
      result.current.onAccept();
    });

    // Assert
    const emptyLookup = createEmptyLookup();
    expect(result.current.itemToDelete).toEqual(emptyLookup);
  });

  it('should handle complete flow: open > accept > check state', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const testItem: Lookup = { id: '1', name: 'Test' };

    // Act - Open
    act(() => {
      result.current.onOpenDialog(testItem);
    });

    // Assert - Open
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(testItem);

    // Act - Accept
    act(() => {
      result.current.onAccept();
    });

    // Assert - Accept
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());

    // Act - Close
    act(() => {
      result.current.onClose();
    });

    // Arrange - Close
    expect(result.current.isOpen).toBe(false);
  });

  it('should not change isOpen when calling onAccept', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog({ id: '1', name: 'Test' });
    });

    // Act
    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
  });

  it('should not change itemToDelete when calling onClose', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const testItem: Lookup = { id: '1', name: 'Test' };
    act(() => {
      result.current.onOpenDialog(testItem);
    });

    // Act
    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(testItem);
  });
});
