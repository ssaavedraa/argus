import { ComponentType, isValidElement, ReactElement } from 'react'

/**
 * Generic function to check if a given React element is of a specified type.
 * @param child - The element to be checked.
 * @param Component - The React component type to check against.
 * @returns - Whether the child is a valid ReactElement of the specified type.
 */

export function isValidElementOfType<T>(
  child: any,
  Component: ComponentType<T>,
): child is ReactElement<T> {
  return isValidElement(child) && child.type === Component
}
