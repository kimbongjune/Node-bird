import Applayout from './../components/Applayout';
import Head from "next/head";
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';
import { useSelector } from 'react-redux';

const Profile = () =>{
    const {me} = useSelector((state) => state.user);

    return(
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <Applayout>
            <NickNameEditForm/>
            <FollowList header="팔로잉" data={me.Followings}/>
            <FollowList header="팔로워" data={me.Followers}/>
        </Applayout>
        </>
    );
}

export default Profile;