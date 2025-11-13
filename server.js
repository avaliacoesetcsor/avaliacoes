// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

const DATA_FILE = path.join(__dirname,'data.json');
function readData(){ try{ return JSON.parse(fs.readFileSync(DATA_FILE)); }catch(e){ return []; } }
function writeData(d){ fs.writeFileSync(DATA_FILE, JSON.stringify(d,null,2)); }

app.post('/log', (req,res)=>{
  const d = readData();
  const entry = { type:'log', ts:new Date().toISOString(), body: req.body };
  d.push(entry); writeData(d); res.status(204).send();
});

app.post('/submit', (req,res)=>{
  const payload = req.body; // {sessionId, student, class, ts, penaltyCount, remaining, answers}
  const d = readData();
  d.push({ type:'submission', ts:new Date().toISOString(), body: payload });
  writeData(d);
  res.status(200).json({ok:true});
});

app.get('/admin/data', (req,res)=>{
  const d = readData();
  const subs = d.filter(x=>x.type==='submission').map(s=>s.body);
  res.json(subs);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('Server started on', PORT));
