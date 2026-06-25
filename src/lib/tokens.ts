import tokens from "../../design-tokens.json";

export const designTokens = tokens as typeof tokens;

export const {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  motion: motionTokens,
} = designTokens;
