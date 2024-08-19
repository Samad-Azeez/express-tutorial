export const authorize = (req, res, next)=>{
    const {user} = req.query;
    if (user === 'samad') {
        req.user = {name: 'samad', id: 3};
        next()
    }else{
        res.status(401).send('Unauthorized');
    }
}