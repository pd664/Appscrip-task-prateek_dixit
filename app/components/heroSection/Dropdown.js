import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/herosection/Dropdown.module.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('RECOMMENDED');
    const dropdownRef = useRef(null);
    const dropdownListRef = useRef(null);

    const options = [
        'RECOMMENDED',
        'NEWEST FIRST',
        'POPULAR',
        'PRICE: HIGH TO LOW',
        'PRICE: LOW TO HIGH',
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                (!dropdownListRef.current || !dropdownListRef.current.contains(event.target)) 
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef, dropdownListRef]);

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <div className={styles.dropdownHeader} onClick={toggleDropdown}>
                <span>{selectedOption}</span>
                <span className={styles.dropdownIcon}>
                    {isOpen ? <span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.720029 5.73003L5.0667 1.38489C5.58003 0.871742 6.42003 0.871742 6.93336 1.38489L11.28 5.73003" stroke="#292D32" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </span> : <span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.721251 0.999778L5.06792 5.34645C5.58125 5.85978 6.42125 5.85978 6.93458 5.34645L11.2813 0.999778" stroke="#292D32" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>}
                </span>
            </div>
            {isOpen && (
                <div className={styles.dropdownList} ref={dropdownListRef}> 
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`${styles.dropdownItem} ${selectedOption === option ? styles.selected : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {selectedOption === option && <span className={styles.checkMark}>✓</span>}
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;