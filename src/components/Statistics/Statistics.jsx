import PropTypes from 'prop-types';
import {
  Title,
  StatisticsCard,
  StatList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <Title> {title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatsItem key={stat.id} id={stat.id}>
            <StatsLabel>{stat.label}</StatsLabel>
            <StatsPercentage>{stat.percentage}%</StatsPercentage>
          </StatsItem>
        ))}
      </StatList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
