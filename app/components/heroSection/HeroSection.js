'use client'
import { useEffect, useState } from 'react';
import  HS_Header from './HeroSection_Header';
import HomePage from './HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts, selectProductStatus } from '@/app/store/reducers/productSlice';
import styles from '../../styles/herosection/herosection.module.css';
import FilterMenu from './FilterMenu';

function HeroSection() {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const products = useSelector(selectProducts);
    const status = useSelector(selectProductStatus);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    const toggleFilter = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={styles.container}>
            <HS_Header />
            <FilterMenu toggleFilter={toggleFilter} isVisible={isVisible} products={products.length} />
            <HomePage isVisible={isVisible} products={products} status={status}/>
        </div>   
    )
}

export default HeroSection