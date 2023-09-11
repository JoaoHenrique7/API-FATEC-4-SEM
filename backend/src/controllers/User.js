import { openDb } from '../db/configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER )')
    });
}

export async function getAll(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Pessoa')
        .then(pessoas=>  res.json(pessoas))
    });
}

export async function getById(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Pessoa WHERE id=?', [id])
        .then(pessoa=> res.json(pessoa) );
    });
}

export async function insertUser(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateUser(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteUser(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Pessoa WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}