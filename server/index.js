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

