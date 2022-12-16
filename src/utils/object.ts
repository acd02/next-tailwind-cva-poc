/**
 * Preserves the type of the array returned by Object.keys
 *
 * @example
 *
 * type Key = 'label' | 'id' | 'isCool'
 *
 * const obj = {
 *   label: 'ten',
 *   id: 10,
 *   isCool: true
 * }
 *
 * const keys = objectKeys(obj)
 * // keys === Key[]
 *
 */
function objectKeys<T extends Record<string | number, unknown>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}

/**
 * Preserves the type of the array returned by Object.values
 *
 * @example
 *
 * type Value = 1 | 2
 *
 * const obj: Record<string, Value> = {
 *   a: 1,
 *   b: 2
 * }
 *
 * const values = objectValues(obj)
 * // values === Value[]
 *
 */
function objectValues<T extends Record<string | number, unknown>>(obj: T): T[keyof T][] {
  return Object.values(obj) as T[keyof T][]
}

/**
 * Preserves the type of the array returned by Object.entries
 *
 * @example
 *
 * type Key = 'a' | 'b'
 * type Value = 1 | 2
 * const obj: Record<Key, Value> = {
 *   a: 1,
 *   b: 2,
 * }
 *
 * const entries = objectEntries(obj)
 * // entries === [Key, Value][]
 *
 */
function objectEntries<T extends Record<string | number, unknown>>(
  obj: T
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][]
}

export { objectKeys, objectValues, objectEntries }
