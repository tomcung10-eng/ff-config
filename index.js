const express = require('express');
const app = express();

app.get('/', (req,res)=>{
  res.json({ status: "PROXY com.dts.freefireth ON ", pack: "com.dts.freefireth" });
});

app.get('/com.dts.freefireth/pack', (req,res)=>{
  res.json({
    package: "com.dts.freefireth",
    game_name: "FREE FIRE",
    Grafix: { hd: true, ultra: true },
    AimHead: { enabled: true, value: "60%", aim: 60 }
  });
});

app.get('/com.dts.freefireth/aimhead60', (req,res)=>{
  res.json({
    package: "com.dts.freefireth",
    AimHead60: { enabled: true, value: "60%", aim: 60 }
  });
});

app.listen(3000, ()=>console.log('JALAN'));
