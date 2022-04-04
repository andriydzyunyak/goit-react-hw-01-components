import styled from "@emotion/styled";

export const AllFriends = styled.ul`
    display: inline-block;
    list-style: none;
    margin: 0 auto;
    padding: 0;
    margin-top: 20px;
`;

export const Friend = styled.li`
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    width: 200px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12),
    0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
    border-radius: 0px;

    :not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const FriendPhoto = styled.img`
    display: block;
    margin-right: 10px;
`;

export const FriendName = styled.p`
    font-family: sans-serif;
    font-weight: bold;
    line-height: 1.4;
    font-size: 20px;
`;

export const Status = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;

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