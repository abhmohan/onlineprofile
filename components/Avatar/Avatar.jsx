import classes from './Avatar.module.css';

const Avatar = () => {
    return (
        <div className={classes.root}>
            <div>
                <img className={classes.image} src='AbhijitMohanty.jpeg' alt="Abhijit Mohanty" />
            </div>
        </div>
    )
};

export default Avatar;