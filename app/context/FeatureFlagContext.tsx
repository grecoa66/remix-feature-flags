import { ReactNode, createContext, useContext } from 'react'

type FeatureFlagContextType = {
    showItemSku: boolean
    showItemPage: boolean
}

export const FeatureFlagContext = createContext<
    FeatureFlagContextType | undefined
>(undefined)

export const FeatureFlagProvider = ({
    value,
    children,
}: {
    value: FeatureFlagContextType
    children: ReactNode
}) => {
    return (
        <FeatureFlagContext.Provider value={value}>
            {children}
        </FeatureFlagContext.Provider>
    )
}

export const useFeatureFlagContext = () => {
    const context = useContext(FeatureFlagContext)
    if (!context) {
        throw Error(
            'useFeatureFlagContext must be rendered within a FeatureFlagProvider'
        )
    }
    return context
}
