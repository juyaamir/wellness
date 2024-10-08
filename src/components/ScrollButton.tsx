import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollButton = () => {
    const [visible, setVisible] = React.useState(false);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    React.useEffect(() => {
        const toggleVisibility = () => {
            if(window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])

    return (
        <div>
            {visible && (
                <button
                    className='fixed right-4 bottom-4 text-xl hover:scale-110'
                    onClick={handleClick}
                    style={{ color: '#4CAF50' }} 
                >
                    <FaArrowUpLong size={25} />
                </button>
            )}
        </div>
    );
};

export default ScrollButton;