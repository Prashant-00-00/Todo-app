const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());


app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Good job Prashant"
    })

})


app.get('/todos', async (req, res) => {

    const todos = await todo.find({});

    res.json({
        todos
    })

})


// app.put('/completed', async (req, res) => {
//     const updatePayload = req.body;
//     const parsePayload = updateTodo.safeParse(updatePayload)

//     if (!parsePayload.success) {
//         res.status(411).json({
//             msg: "Wrong Inputs"
//         })
//         return;
//     }

//     await todo.update({
//         _id: req.body.id
//     }, {
//         completed: true
//     })

//     res.json({
//         msg: "Todo Completed Prashant"
//     })

// })

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs"
        });
        return;
    }

    try {
        // Assuming 'Todo' is your Mongoose model
        await todo.updateOne(
            { _id: req.body.id },
            { completed: true }
        );

        res.json({
            msg: "Todo Completed Prashant"
        });
    } catch (error) {
        // Handle any errors that might occur during the update
        console.error(error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
});



app.listen(3000);

