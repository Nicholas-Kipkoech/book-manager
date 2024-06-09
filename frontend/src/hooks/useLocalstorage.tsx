import { useEffect, useState } from 'react'

// Helper function for getting an item from localStorage
function getSavedValue<T>(key: string, initialValue: T): T {
  const savedValue = localStorage.getItem(key)
  if (savedValue) {
    try {
      return JSON.parse(savedValue)
    } catch (error) {
      console.error('Failed to parse localStorage value', error)
    }
  }
  if (initialValue instanceof Function) {
    return initialValue()
  }
  return initialValue
}

/**
 *
 * @param key this is the unique key used to store an object or an item in localStorage
 * @param initialValue current value stored in localStorage
 * @returns
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    return getSavedValue(key, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
