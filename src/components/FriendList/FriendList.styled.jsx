import styled from "@emotion/styled";

export const AllFriends = styled.ul`
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 30px;
`;

export const Friend = styled.li`
    display: flex;
    align-items: center;
    padding: 8px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12),
    0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
    border-radius: 0px;
    
    :not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const FriendPhoto = styled.img`
    margin-right: 25px;
`;

export const FriendName = styled.p`
    font-weight: bold;
    line-height: 1.4;
    font-size: 20px;
`;

export const Status = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-left: 20px;
    margin-right: 25px;

    background-color: ${({isOnline}) => { 
    switch (isOnline) { 
        case true:
            return "#00ff00";
        case false:
            return "#ff0000";
        default:
            return "#000000";
    }
    }};
`;