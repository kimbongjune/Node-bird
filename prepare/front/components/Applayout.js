import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import UserProfile from "../components/UserProfile";
import Loginform from "../components/Loginform";
import { useSelector } from 'react-redux';

const Global = createGlobalStyle`
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .ant-col:first-child {
        padding-left: 0 !important;
    }

    .ant-col:last-child {
        padding-right: 0 !important;
    }
`;
const SearchInput = styled(Input.Search)`
    vertical-align : middle;
`;

const Applayout = ({children}) =>{
    const { me } = useSelector((state) => state.user);
    console.log(me);
    return(
        <div>
            <Global/>
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
                    {me ? <UserProfile/> : <Loginform/>}
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