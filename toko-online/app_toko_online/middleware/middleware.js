exports.adminOnly = (req, res, next) => {
    const isAdmin = req.body.isAdmin;
    if (isAdmin === true) {
        console.log("Akses diterima: User adalah admin.");
        next();
    } else {
        return res.status(403).json({
            success: false,
            message: "Akses ditolak"
        });
    }
};