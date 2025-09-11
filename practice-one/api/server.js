// server.js
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

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

server.use(router);

server.listen(PORT, () => {
    console.log(`✅ JSON Server is running on port ${PORT}`);
});
