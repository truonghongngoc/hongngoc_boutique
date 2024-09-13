import { useDebouncedCallback } from 'use-debounce'

export function useDebounce<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Callback extends (...args: any[]) => ReturnType<Callback>,
>(callback: Callback) {
  return useDebouncedCallback(callback, 300)
}
