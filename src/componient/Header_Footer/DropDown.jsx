import React, { useState, useRef, useEffect } from 'react';
import '../Style/DropDown.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setEnglish, setVietnamese } from '../../features/languageSlice';

const CustomDropdown = ({ options, defaultOption, setIsOpenMenu }) => {
    const [selected, setSelected] = useState(defaultOption);
    const [isOpen, setIsOpen] = useState(false);
    const [dropDirection, setDropDirection] = useState('down');
    const dropdownRef = useRef(null);
    const dispatch = useDispatch();
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    useEffect(() => {
        const language = localStorage.getItem('language');
        if (language) {
            if (language === 'vi') {
                setSelected('Tiếng Việt');
                dispatch(setVietnamese());
            } else {
                setSelected('English');
                dispatch(setEnglish());
            }
        } else {
            setSelected('English');
            dispatch(setEnglish());
        }
    }, [dispatch]);

    const handleOptionClick = (option) => {
        setSelected(option);
        setIsOpen(false);

        if (option === 'English') {
            dispatch(setEnglish());
            localStorage.setItem('language', 'en');
        } else if (option === 'Tiếng Việt') {
            dispatch(setVietnamese());
            localStorage.setItem('language', 'vi');
        }
        setIsOpenMenu(false);
    };

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const dropdownRect = dropdownRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (dropdownRect.bottom > viewportHeight && dropdownRect.top > dropdownRect.height) {
                setDropDirection('up');
            } else {
                setDropDirection('down');
            }
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="custom-dropdown" ref={dropdownRef}>
            <div
                className="selected-option"
                onClick={toggleDropdown}
                style={{ color: `${companyInfor?.data[0]?.color_text}` }}
            >
                {selected}
            </div>
            {isOpen && (
                <ul className={`dropdown-options ${dropDirection === 'up' ? 'drop-up' : ''}`}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="dropdown-option"
                            onClick={() => handleOptionClick(option)}
                            style={{ color: `${companyInfor?.data[0]?.color_text}` }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
