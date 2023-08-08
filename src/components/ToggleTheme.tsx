import { Box, Button } from "@mui/material";
import { useThemeContext } from "../ThemeContext";

const ToggleTheme = () => {
  // TODO: Move theme logic to settings page

  //   const theme = useTheme(); // Get the theme object from Material UI

  const { toggleTheme } = useThemeContext(); // Get the theme mode and toggleTheme function from the context

  const handleThemeToggle = () => {
    // setCount((count) => count + 1);
    toggleTheme(); // Call the toggleTheme function to switch between light and dark themes
  };

  //   const [count, setCount] = useState(0);

  return (
    <Box sx={{ position: "absolute", zIndex: 1 }}>
      <Button color="error" variant="contained" onClick={handleThemeToggle}>
      </Button>
    </Box>
  );
};

export default ToggleTheme;
