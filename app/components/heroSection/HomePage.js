import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/herosection/HomePage.module.css';
import { selectProductError } from '../../store/reducers/productSlice';

export default function HomePage({ isVisible, products, status }) {
    const [clickedProductId, setClickedProductId] = useState({});
    const error = useSelector(selectProductError);
    const [openSections, setOpenSections] = useState({});

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    const handleClick = (productId) => {
        setClickedProductId((prevClicked) => ({
            ...prevClicked,
            [productId]: !prevClicked[productId],
        }));
    };

    const toggleSection = (section) => {
        setOpenSections({
            ...openSections,
            [section]: !openSections[section],
        });
    };


    const filterOptions = {
        'IDEAL FOR': ['Men', 'Women', 'Baby & Kids'],
        'OCCASION': [],
        'WORK': [],
        'FABRIC': [],
        'SEGMENT': [],
        'SUITABLE FOR': [],
        'RAW MATERIALS': [],
        'PATTERN': [],
    };

    return (
        <div className={styles.container}>
            <div className={styles.homepage}>
                {isVisible && <div className={styles.filterContainer}>
                    <div className={styles.filterBody}>
                        <div className={styles.customizable}>
                            <input type="checkbox" id="customizable" />
                            <label htmlFor="customizable">CUSTOMIZABLE</label>
                        </div>

                        {Object.keys(filterOptions).map((section) => (
                            <div key={section} className={styles.filterSection}>
                                <div
                                    className={styles.sectionHeader}
                                    onClick={() => toggleSection(section)}
                                >
                                    <span className={styles.sectionTitle}>{section}</span>
                                    <span className={styles.dropdownIcon}>
                                        {openSections[section] ? <span>
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
                                {openSections[section] && (
                                    <div className={styles.sectionContent}>
                                        {filterOptions[section].length === 0 ? (
                                            <span className={styles.noOptions}>All</span>
                                        ) : (
                                            filterOptions[section].map((option) => (
                                                <div key={option} className={styles.filterOption}>
                                                    <input type="checkbox" id={option} />
                                                    <label htmlFor={option}>{option}</label>
                                                </div>
                                            ))
                                        )}

                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                }
                <div className={styles.grid}>
                    {products && products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className={styles.image}
                            />
                            <h2 className={styles.title}>{product.title}</h2>
                            <div className={styles.rectangle}>
                                <p className={styles.subhead}>
                                    <span className={styles.signin}>Sign in</span> or Create an account to see pricing
                                </p>
                                <svg
                                    onClick={() => handleClick(product.id)}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill={clickedProductId[product.id] ? 'red' : 'none'}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12.62 20.8116C12.28 20.9316 11.72 20.9316 11.38 20.8116C8.48 19.8216 2 15.6916 2 8.69156C2 5.60156 4.49 3.10156 7.56 3.10156C9.38 3.10156 10.99 3.98156 12 5.34156C13.01 3.98156 14.63 3.10156 16.44 3.10156C19.51 3.10156 22 5.60156 22 8.69156C22 15.6916 15.52 19.8216 12.62 20.8116Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
