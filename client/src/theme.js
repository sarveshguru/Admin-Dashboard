// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff", // Unchanged
    10: "#f7f7f7", // Slightly warmer for a softer look
    50: "#f0f0f0", // Slightly warmer for a softer look
    100: "#e1e1e1", // Warmer grey for better contrast
    200: "#c2c2c2", // Warmer grey for better contrast
    300: "#a3a3a3", // Unchanged
    400: "#858585", // Unchanged
    500: "#666666", // Unchanged
    600: "#525252", // Unchanged
    700: "#3d3d3d", // Unchanged
    800: "#292929", // Unchanged
    900: "#141414", // Unchanged
    1000: "#000000", // Unchanged
  },
  primary: {
    100: "#A77979", // Light Red-Brown
    200: "#926666", // Medium-light Red-Brown (adjusted from #704F4F)
    300: "#7B5959", // Medium Red-Brown
    400: "#553939", // Dark Red-Brown
    500: "#472D2D", // Deep Red-Brown (main)
    600: "#3A2323", // Darker Red-Brown
    700: "#2C1A1A", // Even darker Red-Brown
    800: "#1E1010", // Even darker Red-Brown
    900: "#110707", // Darkest Red-Brown
  },
  secondary: {
    50: "#f5e6e6", // Very light blush
    100: "#ebcccc", // Light blush
    200: "#d79999", // Medium-light blush
    300: "#c46666", // Medium blush
    400: "#b03333", // Medium-dark blush
    500: "#8B3333", // Neutral blush
    600: "#7A2A2A", // Darker blush
    700: "#8C6F6F", // Updated lighter brown
    800: "#360000", // Darkest blush
    900: "#150000", // Very dark blush
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
