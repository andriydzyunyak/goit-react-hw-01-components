import styled from "@emotion/styled";

export const ProfilePage = styled.div`
    display: inline-block;    
`;

export const ProfileInfo = styled.div`
    width: 360px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const ProfilePhoto = styled.img`
    display: block;
    height: 100px;
    width: 100px;
    margin: 0 auto;
    border-radius: 50%;
`;

export const ProfileName = styled.p`
    font-family: sans-serif;
    font-weight: bold;
    line-height: 1.4;
    font-size: 20px;
    text-align: center;
    margin: 0;
    margin-top: 30px;
`;

export const ProfileTag = styled.p`
    font-family: sans-serif;
    font-weight: normal;
    line-height: 1.4;
    font-size: 16px;
    color: #7a7a7a;
    text-align: center;
    margin: 0;
    margin-top: 8px;
`;

export const ProfileLocation = styled.p`
    font-family: sans-serif;
    font-weight: normal;
    line-height: 1.4;
    font-size: 16px;
    color: #7a7a7a;
    text-align: center;
    margin: 0;
    margin-top: 8px;
`;

export const ProfileStatistics = styled.ul`
    width: 360px;
    display: flex;
    list-style: none;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0;
    margin-top: 30px;
`;

export const StatisticsItem = styled.li`
    width: 120px;
    height: 50px;
    border: 1px solid #a4a4a4;
    background-color:#f4f4f4;
    /* margin: 0 auto; */
    padding: 10px;
    text-align: center;
    /* align-items: center; */

`;

export const StatisticsLabel = styled.span`
    display: block;
    margin: 0;
    padding: 0;
    display: block;
    font-family: sans-serif;
    font-weight: normal;
    line-height: 1.4;
    font-size: 14px;
    color: #7a7a7a;
`;

export const StatisticsData = styled.span`
    margin: 0;
    padding: 0;
    display: block;
    font-family: sans-serif;
    font-weight: bold;
    line-height: 1.4;
    font-size: 18px;
`;