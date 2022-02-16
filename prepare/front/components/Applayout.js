import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import { useState } from "react";
import styled from "styled-components";

import UserProfile from "../components/UserProfile";
import Loginform from "../components/Loginform";
import { useSelector } from 'react-redux';

const SearchInput = styled(Input.Search)`
    vertical-align : middle;
`;

const Applayout = ({children}) =>{
    const isLogged = useSelector((state) => state.user.isLoggedIn);
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton></SearchInput>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLogged ? <UserProfile/> : <Loginform/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="http://www.naver.com" target="_blank" rel="noreferrer noopener">네이버</a>
                </Col>
            </Row>
        </div>
    );
};

Applayout.prototype ={
    children : PropTypes.node.isRequired,
};

export default Applayout;