const constants = {
  backendURL: "https://htb23-backend.onrender.com",
  theme: {
    colors: {
      primary: "rebeccapurple",
      secondary: "white",
      tertiary: "rgb(152,210,216)",
      background: "white",
      defaultfont: "rgb(0,0,0)",
      contrastLowOpacity: "rgba(0,0,0,0.1)",
    },
    font:{
      color: "rgba(255, 255, 255, 1)",
      fontFamily: "Verdana, Arial, sans-serif",
    },
    breakpoints: {
      tablet: 768,
      desktop: 1024,
    },
  },
  darkTheme: {
    colors: {
      primary: "rgb(40,40,40)",
      secondary: "white",
      tertiary: "rgb(152,210,216)",
      background: "rgb(10,10,10)",
      defaultfont: "rgb(255,255,255)",
      contrastLowOpacity: "rgba(255,255,255,255.1)",
    },
    font:{
      color: "rgba(255, 255, 255, 1)",
      fontFamily: "Verdana, Arial, sans-serif",
    },
    breakpoints: {
      tablet: 768,
      desktop: 1024,
    },
  },
};

export default constants;