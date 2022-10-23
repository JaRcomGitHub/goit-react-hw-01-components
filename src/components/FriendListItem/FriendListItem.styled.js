import styled from 'styled-components';

export const ListItem = styled.li`
    display: flex;
    align-items:center;
    padding: 8px;
    width: 250px;
    box-shadow: 0 2px 4px gray;
    background-color: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.black};
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const Status = styled.span`
    padding: 10px;
    border-radius: 100%;
`;

export const Avatar = styled.img`
    margin-left: 16px;
    margin-right: 16px;
    padding: 1px;
    border-radius: 4px;
    box-shadow: 0 1px 2px gray;
`;

export const Name = styled.p`
    font-weight: 500;
    font-size: 24px;
`;