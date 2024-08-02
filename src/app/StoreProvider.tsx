'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './store/store'
import { initializeCount } from './features/counter/counterSlice'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    console.log('restarted from StorePRovider')
    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        storeRef.current = makeStore()
        storeRef.current.dispatch(initializeCount(0))
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}