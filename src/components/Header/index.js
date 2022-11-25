import classNames from 'classnames/bind';
import HeaderLeft from './component/HeaderLeft';
import styles from './Header.scss';

const cx = classNames.bind(styles);
function HeaderLayout() {
    return (
        <div className={cx('header')}>
            <HeaderLeft></HeaderLeft>
        </div>
    );
}
export default HeaderLayout;
