import React, { useContext } from 'react';
import { CartContext } from '../../App';
import useCart from '../../customHooks/useCart';

const MyCourses = () => {
    const cart = useContext(CartContext);
    return (
        <div>
            My Courses section: {cart.length};
        </div>
    );
};

export default MyCourses;