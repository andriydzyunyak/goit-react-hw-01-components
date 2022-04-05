import styled from "@emotion/styled";

export const SectionStat = styled.section`
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 30px;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
`;

export const StatList = styled.ul`
    display: flex;
    padding: 0;
    margin-top: 15px;
`;

export const StatItem = styled.li`
    width: 50px;
    height: 50px;
    border: 1px solid #ffffff;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    align-items: center;

    background-color: ${({ name }) => { 
    switch (name) { 
        case ".docx":
            return "#00ff00";
        case ".pdf":
            return "#fda43f";
        case ".mp3":
            return "#3fe0fd";
        case ".psd":
            return "#fe5858";
        default:
            return "#4c00ff";
    }
    }};
`;

export const StatLabel = styled.span`
    margin: 0;
    padding: 0;
    display: block;
    font-weight: bold;
    line-height: 1.4;
    font-size: 14px;
`;

export const StatData = styled.span`
    margin: 0;
    padding: 0;
    font-weight: bold;
    line-height: 1.4;
    font-size: 20px;
`;