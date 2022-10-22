import PropTypes from 'prop-types';
// import { WrapperProfile } from './Statistics.styled';
import css from "./Statistics.module.css";


export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            <div className={css.block}>
                {title && <h2 className={css.title}>{ title }</h2>}

                <ul className={css.statList}>
                    {stats.map((item) => (
                        <li className={css.item} key={ item.id } style={{background: getRandomHexColor()}}>
                            <span className={css.label}>{ item.label }</span>
                            <span className={css.percentage}>{ item.percentage }%</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }))
};

function getRandomHexColor() {
  return `#${(Math.floor(Math.random() * 14000000) ).toString(16)}`;
}