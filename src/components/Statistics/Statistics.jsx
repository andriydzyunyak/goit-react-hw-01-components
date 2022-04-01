import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ stats }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
            <ul className={css.statlist}>
                {stats.map(({id, label, percentage}) => (
                    <li key={id} className={css.item}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}> {percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,})),
};