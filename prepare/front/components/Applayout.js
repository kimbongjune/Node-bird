import PropTypes from "prop-types";
import Link from "next/link";

const Applayout = ({children}) =>{
    return(
        <div>
            <div>
                <Link href="/"><a>노드버드</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
            {children}
        </div>
    );
};

Applayout.prototype ={
    children : PropTypes.node.isRequired,
};

export default Applayout;