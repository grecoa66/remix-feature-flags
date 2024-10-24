type FeatureFlagValues = "enabled" | "disabled";
declare namespace NodeJS {
  export interface ProcessEnv {
    SHOW_ITEM_SKU: FeatureFlagValues;
  }
}
