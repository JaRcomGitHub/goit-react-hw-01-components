import styled from 'styled-components';

export const WrapperProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    margin-bottom: 16px;
    width: 280px;
    border-radius: 8px;
    background-color: ${(p) => p.theme.colors.white};
    box-shadow: 0 2px 4px #CFDFDF;
    overflow: hidden;
    color: #6C6D96;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
    margin-bottom: 24px;
`;

export const Image = styled.img`
    width: 45%;
    border-radius: 100%;
    box-shadow: 0 0 4px #C4D0F9;
    margin-bottom: 8px;
`;

export const UserName = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: 0.03em;
    color: ${(p) => p.theme.colors.black};
`;

export const InfoStats = styled.ul`
    display: flex;
`;

export const InfoStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 93px;
    gap: 4px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-top: 1px solid #E4E9F0;
    background-color: #F3F6F9;
    &:not(:last-child) {
        border-right: 1px solid #E4E9F0;
    }
`;

export const InfoStatsLabel = styled.span`
    font-size: 14px;
`;

export const InfoStatsQuantity = styled.span`
    font-weight: 500;
    color: ${(p) => p.theme.colors.black};
`;