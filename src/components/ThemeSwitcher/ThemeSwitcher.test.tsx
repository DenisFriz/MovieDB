import { render, screen } from "@testing-library/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeContext, ThemeContextProvider } from "@themeContext/index";
import { IThemeMode } from "@themeContext/types";
import userEvent from "@testing-library/user-event";

describe("ThemeSwitcher component", () => {
  it("Should open and close the menu when button is clicked", async () => {
    render(
      <ThemeContextProvider>
        <ThemeSwitcher />
      </ThemeContextProvider>
    );
    const button = screen.getByRole("button", {
      name: /Open Menu/i,
    }) as HTMLButtonElement;

    await userEvent.click(button);

    const menuItems = screen.getAllByRole("menuitem");
    expect(menuItems).toHaveLength(2);
    await userEvent.click(button);

    expect(screen.queryAllByRole("menuitem")).toHaveLength(0);
  });

  it("Should set the correct theme when choosing it", async () => {
    const toggleThemeModeMock = vi.fn();

    const contextValue = {
      themeMode: IThemeMode.LIGHT,
      toggleThemeMode: toggleThemeModeMock,
    };

    render(
      <ThemeContext.Provider value={contextValue}>
        <ThemeSwitcher />
      </ThemeContext.Provider>
    );

    const button = screen.getByRole("button", {
      name: /Open Menu/i,
    }) as HTMLButtonElement;
    await userEvent.click(button);

    const lightButton = screen.getByRole("menuitem", { name: /Light/i });
    await userEvent.click(lightButton);
    expect(toggleThemeModeMock).toHaveBeenCalledWith(IThemeMode.LIGHT);

    await userEvent.click(button);
    const darkButton = screen.getByRole("menuitem", { name: /Dark/i });
    await userEvent.click(darkButton);
    expect(toggleThemeModeMock).toHaveBeenCalledWith(IThemeMode.DARK);
  });
});
