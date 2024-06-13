import { useDispatch, useSelector } from 'react-redux';
import { toggelTheme } from '../features/themeSlice';
import { useEffect } from 'react';

function useTheme() {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        dispatch(toggelTheme(newTheme))
    };

    useEffect(() => {
        if (theme==="dark") {
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

    return ([theme, toggleTheme]);
}

export default useTheme