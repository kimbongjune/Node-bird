import { useState, useCallback } from "react";
import { Button, Card, Popover, List, Comment } from "antd";
import PropTypes from "prop-types";
import {RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone} from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux';
import Avatar from "antd/lib/avatar/avatar";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import { LIKE_POST_REQUEST, REMOVE_POST_REQUEST, UNLIKE_POST_REQUEST } from './../reducers/post';
import FollowButton from "./FollowButton";

const PostCard = ({post}) =>{
    const dispatch = useDispatch();
    const {removePostLoading} = useSelector((state) => state.post);
    const [commentFromOpened, setCommentFromOpened] = useState(false);

    const onLike = useCallback(()=>{
        dispatch({
            type : LIKE_POST_REQUEST,
            data : post.id,
        });
    }, [])

    const onUnlike = useCallback(()=>{
        dispatch({
            type : UNLIKE_POST_REQUEST,
            data : post.id,
        });
    }, [])

    const onToggleComment = useCallback(()=>{
        setCommentFromOpened((prev) => !prev);
    })

    const onRemovePost = useCallback(() =>{
        dispatch({
            type : REMOVE_POST_REQUEST,
            data : post.id,
        });
    }, [])
    const id = useSelector((state) => state.user.me?.id);
    const liked = post.Likers.find((v) => v.id === id);
    return(
        <div style={{marginBottom : 20}}>
            <Card 
                cover ={post.Images[0] && <PostImages images={post.Images}/>}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    liked
                        ?<HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike}/>
                        :<HeartOutlined key="heart" onClick={onLike}/>,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,
                    <Popover key="more" content={(
                        
                        <Button.Group>
                            {id && post.User.id === id ? (
                                <>
                                    <Button>??????</Button>
                                    <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>??????</Button>
                                </>
                            ):<Button>??????</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined/>
                    </Popover>,
                ]}
                extra={ id && <FollowButton post={post}/>}
            >
                <Card.Meta
                    avatar ={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
            </Card>
            {commentFromOpened &&(
                <div>
                     <CommentForm post={post}/>
                     <List
                        header={`${post.Comments.length}?????? ??????`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) =>(
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                     />
                </div>
            )}
            {/*
            <Comments/> */}
        </div>
    )
};

PostCard.propTypes ={
    post : PropTypes.shape({
        id : PropTypes.number,
        User : PropTypes.object,
        content : PropTypes.string,
        createdAt : PropTypes.string,
        Comments : PropTypes.arrayOf(PropTypes.object),
        Images : PropTypes.arrayOf(PropTypes.object),
        Likers : PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
}

export default PostCard;