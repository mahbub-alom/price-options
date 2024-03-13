import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'><FaRegCircleCheck className='text-green-800 mr-4'></FaRegCircleCheck> {feature}</p>
        </div>
    );
};

export default Feature;