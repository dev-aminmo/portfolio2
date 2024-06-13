import React, { useRef, useEffect, useState } from 'react';

import { Carousel as NativeCarousel } from '@fancyapps/ui';
import '@fancyapps/ui/dist/carousel.css';





function Carousel(Props) {
    const containerRef = useRef(null);
    const [carouselInstance, setCarouselInstance] = useState(null);

    useEffect(() => {
        const container = containerRef.current;
        const mergedOptions = {
            ...defaults,
            ...(options || {}),
        };

        const instance = new NativeCarousel(container, mergedOptions);
        setCarouselInstance(instance);

        return () => {
            instance.destroy();
        };
    }, [options]);

    return (
        <div className="f-carousel" ref={containerRef}>
            {/* Add your carousel content here */}
        </div>
    );
}

export default Carousel;
