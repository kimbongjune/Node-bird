import { useState, useCallback } from "react";
import { Button, Card, Popover } from "antd";
import PropTypes from "prop-types";
import {RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone} from "@ant-design/icons";
import { useSelector, } from 'react-redux';
import Avatar from "antd/lib/avatar/avatar";
import PostImages from "./PostImages";

const PostCard = ({post}) =>{
    const [liked, setLiked] = useState(false);
    console.log("test");
    const [commentFromOpened, setCommentFromOpened] = useState(false);
    const onToggleLike = useCallback(()=>{
        setLiked((prev) => !prev);
    }, [])
    const onToggleComment = useCallback(()=>{
        setCommentFromOpened((prev) => !prev);
    })
    const id = useSelector((state) => state.user.me?.id);
    return(
        <div style={{marginBottom : 20}}>
            <Card 
                cover ={post.Images[0] && <PostImages images={[post.Images]}/>}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    liked
                        ?<HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike}/>
                        :<HeartOutlined key="heart" onClick={onToggleLike}/>,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,
                    <Popover key="more" content={(
                        
                        <Button.Group>
                            {id && post.User.id === id ? (
                                <>
                                    <Button>수정</Button>
                                    <Button type="danger">삭제</Button>
                                </>
                            ):<Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined/>
                    </Popover>,
                ]}
            >
                <Card.Meta
                    avatar ={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
            </Card>
            {commentFromOpened &&(
                <div>댓글 부분</div>
            )}
            {/* <CommentForm/>
            <Comments/> */}
        </div>
    )
};

PostCard.PropTypes ={
    post : PropTypes.shape({
        id : PropTypes.number,
        User : PropTypes.object,
        content : PropTypes.string,
        createdAt : PropTypes.object,
        Comments : PropTypes.arrayOf(PropTypes.object),
        Images : PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
}

export default PostCard;