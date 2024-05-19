import React, { useEffect } from 'react';

const ScrollHandler: React.FC = () => {
    useEffect(() => {
        function handleScroll() {
            console.log('Scrolling');
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Limpieza del evento.
    }, []);

    return <div>Scroll to see the console logs</div>;
}

export default ScrollHandler;
