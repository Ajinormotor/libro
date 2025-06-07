

export const authorizeRoles = (req, res, next) => {
    const {user} = req.user;

    if (!user || !user.role) {
        return res.status(401).json({ message: "User info missing or unauthorized" });
    }

    if (user.role !== "admin") {
        return res.status(401).json({ message: "Unauthorized to perform action" })
    }

    next();
};
