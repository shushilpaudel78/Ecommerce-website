import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const LeftButton = () => {
    return (
        <button className="bg-primaryBlue  text-[20px] rounded-full p-[10px] text-secondaryWhite">
            <FaArrowLeft />
        </button>
    );
};

export const RightButton = () => {
    return (
        <button className="bg-primaryBlue  text-[20px] rounded-full p-[10px] text-secondaryWhite">
            <FaArrowRight />
        </button>
    );
};
