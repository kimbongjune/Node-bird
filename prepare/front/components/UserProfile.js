import {Card, Avatar, Button} from "antd";
import { useCallback } from 'react';

const UserProfile = ({setIsLogged}) =>{
    const onLogOut = useCallback(() =>{
        setIsLogged(false);
    }, []);
    return(
        <Card
            actions={[
                <div key="twit">짹짹<br/>0</div>,
                <div key="following">팔로잉<br/>0</div>,
                <div key="follower">팔로워<br/>0</div>
            ]}
            >
            <Card.Meta
                avatar={<Avatar>ZC</Avatar>}
                title="kim"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}
export default UserProfile;