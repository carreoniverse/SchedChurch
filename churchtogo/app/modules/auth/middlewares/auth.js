exports.hasAuth = (req, res, next) => {
    if (req.session && req.session.user && Object.keys(req.session.user).length > 0) return next();
    return res.redirect('/admin/home');
}

exports.noAuthed = (req, res, next) => {
    if (req.session && req.session.user && Object.keys(req.session.user).length > 0) return res.redirect('/guestwithsession/home');
    return next();
}

exports.hasAuthadmin = (req, res, next) => {
    if (req.session && req.session.admin && Object.keys(req.session.admin).length > 0) return next();
    return res.redirect('/login?unauthorized');
}

exports.noAuthedadmin = (req, res, next) => {
    if (req.session && req.session.admin && Object.keys(req.session.admin).length > 0) return res.redirect('/admin/home');
    return next();
}


