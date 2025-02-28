type Theme = 'light' | 'dark';

class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: Theme = 'light';

  private constructor() {
    // Initialize theme from localStorage or system preference
    this.currentTheme = this.getInitialTheme();
    this.applyTheme(this.currentTheme);
    this.watchSystemTheme();
  }

  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  private getInitialTheme(): Theme {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }

    // Then check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }

  private watchSystemTheme() {
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  public getTheme(): Theme {
    return this.currentTheme;
  }

  public setTheme(theme: Theme): void {
    this.currentTheme = theme;
    this.applyTheme(theme);
    localStorage.setItem('theme', theme);
  }

  public toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
    // Optional: update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#212529' : '#ffffff');
    }
  }
}

export const themeManager = ThemeManager.getInstance();

// Hook for React components
export const useTheme = () => {
  const theme = themeManager.getTheme();
  const toggleTheme = () => themeManager.toggleTheme();
  const setTheme = (theme: Theme) => themeManager.setTheme(theme);

  return { theme, toggleTheme, setTheme };
};
