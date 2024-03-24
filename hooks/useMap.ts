import { useCallback, useState } from "react"

// reference
//  https://usehooks-ts.com/react-hook/use-map

type MapOrEntries<K, V> = Map<K, V> | [K, V][]

type TUseMapActions<K, V> = {
  set: (key: K, value: V) => void
  setAll: (entries: MapOrEntries<K, V>) => void
  remove: (key: K) => void
  reset: Map<K, V>["clear"]
}

type TUseMapReturn<K, V> = [Omit<Map<K, V>, "set" | "clear" | "delete">, TUseMapActions<K, V>]

export function useMap<K, V>(initialState: MapOrEntries<K, V> = new Map()): TUseMapReturn<K, V> {
  const [map, setMap] = useState(new Map(initialState))
  const actions: TUseMapActions<K, V> = {
    set: useCallback((key, value) => {
      setMap((prev) => {
        const copy = new Map(prev)
        copy.set(key, value)
        return copy
      })
    }, []),
    setAll: useCallback((entries) => {
      setMap(() => new Map(entries))
    }, []),
    remove: useCallback(() => {
      setMap((prev) => {
        const copy = new Map()
        copy.delete(prev)
        return copy
      })
    }, []),

    reset: useCallback(() => {
      setMap(() => new Map())
    }, []),
  }
  return [map, actions]
}
