import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  border: solid;

  width: 450px;
  margin-bottom: 50px;
  position: relative;
  top: 50%;
  left: 40%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 450px;
`;

export const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const Logo = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: solid;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 24px;
`;
export const Tag = styled.p`
  font-weight: regular;
  font-size: 14px;
`;

export const Location = styled.p`
  font-weight: regular;
  font-size: 14px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  margin: 0 0;
  padding: 60px 0px 60px;
  background-color: #f3f6f9;
  border: solid;
  font-size: 20px;
  text-align: center;
  justify-content: space-around;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
`;
