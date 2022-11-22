import classNames from 'classnames/bind';
import styles from './HeaderLeft.scss';
import logo from '../../../../source/logo.gif';
import searchIcon from '../../../../source/search-1.svg';

const cx = classNames.bind(styles);
function HeaderLeft() {
    return (
        <div className={cx('header-left')}>
            <div className={cx('logo')}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={cx('search')}>
                <span className={cx('search-icon')}>
                    <img src={searchIcon} alt="Search-Logo" />
                    <input />
                </span>
            </div>
        </div>
    );
}

export default HeaderLeft;
