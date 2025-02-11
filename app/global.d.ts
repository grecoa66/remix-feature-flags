type FeatureFlagValues = 'true' | 'false'

declare namespace NodeJS {
    export interface ProcessEnv {
        SHOW_ITEM_SKU: FeatureFlagValues
        SHOW_ITEM_PAGE: FeatureFlagValues
    }
}
