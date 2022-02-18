import {Form, Input, Button} from "antd";
import { useCallback } from 'react';
import useInput from "../hooks/useInput";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CommentForm = ({post}) =>{
    const [commentText, onChangeCommentText] = useInput("");
    const id = useSelector((state) => state.user.me?.id);
    const onSubmitComment = useCallback(() =>{
        console.log(post.id, commentText);
    }, [commentText]);
    return(
        <Form onFinish={onSubmitComment}>
            <Form.Item>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}/>
                <Button type="primary" htmlType="submit">삐약</Button>
            </Form.Item>
        </Form>
    )
}

CommentForm.protoType ={
    post: PropTypes.object.isRequired,
};

export default CommentForm;