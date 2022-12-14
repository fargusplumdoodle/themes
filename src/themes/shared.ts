import { Components } from "@mui/material/styles/components";
import { Theme } from "@mui/material/styles/createTheme";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const palette = {};

export const components: Components<Omit<Theme, "components">> = {
  MuiFilledInput: {
    defaultProps: {
      disableUnderline: true,
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "filled",
      InputProps: {
        disableUnderline: true,
      },
    },
    styleOverrides: {
      root: ({ theme }: any) => ({
        '& [class*="MuiFilledInput-root"]': {
          borderRadius: 4,
        },
        '& [class*="MuiFilledInput-root"].Mui-error': {
          borderColor: theme.palette.error.dark,
          borderStyle: "solid",
          borderWidth: 1,
        },
      }),
    },
  },
  MuiButton: {
    defaultProps: { variant: "contained", disableElevation: true },
  },
  MuiAutocomplete: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& [class*="MuiChip-root"]': {
          ":first-of-type": {
            marginTop: theme.spacing(1),
          },
        },
      }),
    },
  },
};

export const typography: TypographyOptions = {
  fontFamily: '"Ubuntu", "Roboto", "Helvetica", sans-serif',
};

const shared = {
  palette,
  components,
  typography,
};
export default shared;
