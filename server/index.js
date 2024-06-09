const express = ("express")
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/api", (req,res) => {
    res.json({
        message:"Hello World",
    });
});

app.listen(PORT, () => {
    console.log('Server listening on ${PORT}');
});

const database = [];
const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    let result = database.filter(
        (user) => user.email === email || user.username === username
    );

    if (result.length === 0) {
        database.push({
            id: generateID(),
            username,
            password,
            email,
            timezone: {},
            schedule: [],
        });
        return res.json({ message: "Account created succesfully!" });
    }
    re
    
});
