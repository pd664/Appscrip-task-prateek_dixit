import styles from "../../styles/herosection/FilterMenu.module.css";
import Dropdown from "./Dropdown";

const FilterMenu = ({ toggleFilter, isVisible, products }) => {
    return (
        <div className={styles.filterWrapper}>
            <div className={styles.filterHeader}>
                <span className={styles.itemCount}>{products} ITEMS</span>
                <div className={styles.filterControls}>
                    <button onClick={toggleFilter} className={styles.toggleButton}>
                        {isVisible ? (
                            <span className={styles.filter_toggle}>
                                <svg className={styles.filterIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812" stroke="#292D32" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className={styles.filterName}>HIDE FILTER</span>
                                <span className={styles.mobileFilterText}>FILTERS</span>
                            </span>
                        ) : (
                            <span className={styles.filter_toggle}>
                                <svg className={styles.filterIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.00027 2.72125L10.3469 7.06792C10.8603 7.58125 10.8603 8.42125 10.3469 8.93458L6.00027 13.2812" stroke="#292D32" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className={styles.filterName}>SHOW FILTER</span>
                                <span className={styles.mobileFilterText}>FILTERS</span>
                            </span>
                        )}
                    </button>
                </div>
            </div>
            <div className={styles.filter_dropdown}>
                <Dropdown />
            </div>
        </div>
    );
};

export default FilterMenu;