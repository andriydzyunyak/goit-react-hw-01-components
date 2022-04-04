import PropTypes from 'prop-types';
import { SectionStat, Title, StatList, StatItem, StatLabel, StatData } from "components/Statistics/Statistics.styled";

export const Statistics = ({ stats }) => {
    return (
        <SectionStat>
            <Title>Upload stats</Title>
            <StatList>
                {stats.map(({id, label, percentage}) => (
                    <StatItem key={id} name={label}>
                        <StatLabel>{label}</StatLabel>
                        <StatData>{percentage}%</StatData>
                    </StatItem>
                ))}
            </StatList>
        </SectionStat>
    )
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })),
};