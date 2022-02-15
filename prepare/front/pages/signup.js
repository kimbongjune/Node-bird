import Applayout from './../components/Applayout';
import Head from "next/head";
import {Form, Input, Checkbox ,Button} from "antd";
import { useCallback, useState } from 'react';
import useInput from '../hooks/useinput';
import styled from "styled-components";

const ErrorMessage = styled.div`
    color:red;
`;

const Signup = () =>{
    const [id, onChangeId] = useInput("");
    const [nickname, onChangenickname] = useInput("");
    const [password, onChangePassword] = useInput("");

    const [passwordCheck, setPasswordCheck] = useState("");
    const [passWordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) =>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState("");
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) =>{
        setTerm(e.target.checked);
        setTermError(false);
    }, [])

    const onSubmit = useCallback(() =>{
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(id, nickname, password);
    }, [password, passwordCheck, term]);
    
    return(
        <Applayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor='user-id'>아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId}></Input>
                </div>
                <div>
                    <label htmlFor='user-nick'>닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nickname} required onChange={onChangenickname}></Input>
                </div>
                <div>
                    <label htmlFor='user-password'>비밀번호</label>
                    <br/>
                    <Input name="user-password" value={password} required onChange={onChangePassword}></Input>
                </div>
                <div>
                    <label htmlFor='user-password-check'>비밀번호체크</label>
                    <br/>
                    <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck}></Input>
                    {passWordError && <ErrorMessage style={{color : "red"}}>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>회원가입 약관에 동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>}
                </div>
                <div style={{marginTop:10}}>
                    <Button type='primary' htmlType='submit'>가입하기</Button>
                </div>
            </Form>
        </Applayout>
    );
}

export default Signup;