import styled from '@emotion/styled';

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  border-radius: 50%;
`;
export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
export const FriendImage = styled.img`
  display: blok;
  border: 1px solid gray;
  border-radius: 5%;
`;
