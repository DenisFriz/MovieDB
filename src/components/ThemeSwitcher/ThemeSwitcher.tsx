import { Button, Menu, MenuItem } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "@themeContext/index";
import { IThemeContext, IThemeMode } from "@themeContext/types";

const ThemeSwitcher = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const { themeMode, toggleThemeMode } = useContext(
    ThemeContext
  ) as IThemeContext;

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };
  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleToggleTheme = (mode: IThemeMode) => {
    toggleThemeMode(mode);
    handleClose();
  };

  return (
    <div>
      <Button
        ref={buttonRef}
        variant="contained"
        onClick={handleOpen}
        aria-label="Open Menu"
        title="Open Menu"
      >
        Theme
      </Button>
      <Menu
        open={openMenu}
        anchorEl={buttonRef.current}
        onClose={handleClose}
        data-testid="44453"
      >
        <MenuItem
          onClick={() => handleToggleTheme(IThemeMode.LIGHT)}
          selected={themeMode === IThemeMode.LIGHT}
        >
          Light
        </MenuItem>
        <MenuItem
          onClick={() => handleToggleTheme(IThemeMode.DARK)}
          selected={themeMode === IThemeMode.DARK}
        >
          Dark
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ThemeSwitcher;
