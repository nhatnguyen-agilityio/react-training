// server.js
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// api to handle signup
server.post("/signup", (req, res) => {
    const {
        username,
        password,
        name = "",
        email = "",
        address = "",
        phone = "",
    } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    const users = router.db.get("users").value();
    const existingUser = users.find((u) => u.username === username);

    if (existingUser) {
        return res.status(400).json({ error: "Username already taken" });
    }

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        username,
        password,
        name,
        email,
        address,
        phone,
    };

    router.db.get("users").push(newUser).write();

    return res.status(201).json(newUser);
});

// api to handle login
server.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    const users = router.db.get("users").value();
    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
    }

    const { password: _, ...userWithoutPassword } = user;

    return res.status(200).json({
        user: userWithoutPassword,
    });
});

// api to handle delete all carts by user
server.delete("/carts/users/:userId", (req, res) => {
    const { userId } = req.params;
    router.db
        .get("carts")
        .remove({ userId: Number(userId) })
        .write();
    return res.status(200).json({ message: "All carts deleted for userId " + userId });
});

server.use(router);

server.listen(PORT, () => {
    console.log(`✅ JSON Server is running on port ${PORT}`);
});
