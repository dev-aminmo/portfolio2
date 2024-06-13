import { useState, useRef, useEffect } from 'react';

const Toast = ({ message, type = 'info', autoClose = 5000 }) => {
    const [visible, setVisible] = useState(false);
    const toastContainerRef = useRef(null);

    const showToast = () => {
        setVisible(true);
    };

    const hideToast = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timeout = setTimeout(hideToast, autoClose);
            return () => clearTimeout(timeout);
        }
    }, [visible, autoClose]);

    const toastClasses = `toast toast-${type} ${visible ? 'toast-visible' : ''}`;

    return (
        <div ref={toastContainerRef} className={toastClasses}>
            {message}
        </div>
    );
};

export default Toast;
