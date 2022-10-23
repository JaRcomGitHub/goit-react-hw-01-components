import styled from 'styled-components';

export const WrapperFriend = styled.section`
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: ${(p) => p.theme.colors.white};
`;

export const FriendListBlock = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;