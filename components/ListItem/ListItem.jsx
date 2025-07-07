import classes from './ListItem.module.css';

const ListItem = ({ children, isDark }) => {
    return (
        <li className={`${classes.listItem} ${isDark ? classes.dark : classes.light}`}>
            {children}
        </li>
    );
};

export default ListItem;
