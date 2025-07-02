import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    return (localStorage.getItem('theme') as AvailableThemes) || 'dark';
  });

  function handleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTheme(prev => (prev == 'dark' ? 'light' : 'dark'));
  }

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        href='/'
        className={styles.menuLink}
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        href='/history/'
        className={styles.menuLink}
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        href='/settings/'
        className={styles.menuLink}
        aria-label='Ir para configurações'
        title='Ir para configurações'
      >
        <SettingsIcon />
      </RouterLink>
      <RouterLink
        href=''
        onClick={handleTheme}
        className={styles.menuLink}
        aria-label='Mudar tema'
        title='Mudar tema'
      >
        {nextThemeIcon[theme]}
      </RouterLink>
    </nav>
  );
}
