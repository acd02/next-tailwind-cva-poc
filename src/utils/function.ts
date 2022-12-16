/**
 * A function that does nothing but return the parameter supplied to it.
 * Good as a default or placeholder function.
 */
export function identity<T>(x: T) {
  return x
}

/**
 * A function that returns `undefined`.
 */
export function noop() {
  return undefined
}

/**
 * Returns a function that always returns the given value.
 */
export function constant<T>(x: T): () => T {
  return () => x
}
