const ALEO = {
  bold: "Aleo Bold",
  light: "Aleo Light",
  italic: "Aleo Italic",
  regular: "Aleo Regular"
};

const B_THEME = {
  main: "#555",
  white: "#fff",
  black: "#000",
  border: "#EEE",
  accent: "#FFA500",
  background: "#F5F5F5"
};

const MELLOW_BARNYARD = {
  main: "#282120",
  white: "#FFF",
  black: "#000",
  border: "#E6C2BF",
  accent: "#FAD02C",
  background: "#F8EFE4"
};

const WAY_UP_NORTH = {
  main: "#1E3D58",
  white: "#FFF",
  black: "#000",
  border: "#43B0F1",
  accent: "#057DCD",
  background: "#E8EEF1"
};

export default {
  btheme: {
    colors: {
      ...B_THEME
    },
    fonts: {
      ...ALEO
    }
  },
  barnyard: {
    colors: {
      ...MELLOW_BARNYARD
    },
    fonts: {
      ...ALEO
    }
  },
  north: {
    colors: {
      ...WAY_UP_NORTH
    },
    fonts: {
      ...ALEO
    }
  }
};
