exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        next();
    }else{
        res.status(401).send("로그인이 필요합니다.");
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        next();
    }else{
        res.status(401).send("이미 로그인이 되어있습니다.");
    }
};