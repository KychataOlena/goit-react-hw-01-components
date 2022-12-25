import styled from '@emotion/styled';
export const Title = styled.h2`
  margin-top: 30;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  color: #696969;
`;

export const StatisticsCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  background-color: #ffffff;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;
export const StatList = styled.ul`
  width: 100%;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: inherit;
  width: calc(100% / 5);
  align-items: center;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  color: black;
`;

export const StatsLabel = styled.span`
  font-size: 12px;
`;

export const StatsPercentage = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
