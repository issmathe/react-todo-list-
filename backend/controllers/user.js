import {v4 as uuid} from "uuid"

let users=[
    {
        id:uuid(),
        name:"ahmet",
        email:"ahmet@gmail.com",
        country:"türkiye",
        contact:"23444"
    },
    {
        id:uuid(),
        name:"ayşe",
        email:"ayse@gmail.com",
        country:"türkiye",
        contact:"12347"
    }
]


export const getUsers=((req,res)=>{
    res.send(users)
})

export const getSingleUser=((req,res)=>{
    const id=req.params.id;
    const user=users.find((u)=>u.id===id)
    if(!user){
        res.status(404).send("kullanıcı bulunamadı")
    }
    res.send(user)
})

export const createUser=((req,res)=>{
    const {name,email,country,contact}=req.body;
    const user={
        id:uuid(),
        name:name,
        email:email,
        country:country,
        contact:contact
    }
    users.push(user)
    res.send("yeni kullanıcı eklendi")
})

export const deleteUser=((req,res)=>{
    const id=req.params.id;
    const user=users.find((u)=>u.id===id)
    users=users.filter((u)=>u.id!==id);
    if(!user){
        res.status(404).send("kullanıcı bulunamadı")
    }
    res.send(user)
})

export const updateUser=((req,res)=>{
    const id=req.params.id;
    const user=users.find((u)=>u.id===id)
    const {name,email,country,contact}=req.body;

    if(!user){
        res.status(404).send("kullanıcı bulunamadı")
    }
    user.name=name
    user.email=email
    user.country=country
    user.contact=contact
    res.send(user)
})

