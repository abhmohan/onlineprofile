import classes from './Technologies.module.css';

const Technologies = ({ technologies }) => {
    return (
        <div>
            {technologies.map(el => <span key={el} className={classes.techItem}><strong>{el}</strong> |</span>)}
        </div>
    );
};

export default Technologies;
