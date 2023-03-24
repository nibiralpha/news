import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import styles from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../Store/search.slice';

interface Props {
    style?: object
}

const Header = (props: Props) => {
    const { style } = props
    const dispatch = useDispatch()
    const [searchINput, setSearchInput] = useState<string>("")

    let timer: any = null;

    const onChangeSearch = (e: string) => {
        setSearchInput(e)
        if (timer !== undefined) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            dispatch(setQuery(e))
        }, 1000);
    }

    return (
        <div>
            <div style={{ ...style }} className={styles.headerContainer}>
                <div className='container' style={{ position: 'relative' }}>
                    <div className={styles.logo}>
                        <Link to="/"> <img src='/Logo_White.png'></img></Link>
                    </div>
                    <div className={styles.searchArea}>
                        <SearchInput value={searchINput} onChangeValue={(val) => { onChangeSearch(val) }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header