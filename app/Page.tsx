'use client'
import { useState } from 'react'
export default function Home(){
  const [tab,setTab]=useState('filmes')
  return (
    <main style={{minHeight:'100vh', background:'#080808'}}>
      <header style={{padding:'18px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #222'}}>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <div style={{width:42,height:42, background:'#00FF88', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', color:'#000', fontWeight:900}}>S</div>
          <span style={{fontWeight:900, fontSize:22}}>SUPPLAY<span style={{color:'#00FF88'}}>.ONLINE</span></span>
        </div>
        <a href="#" style={{background:'#00FF88', color:'#000', padding:'10px 18px', borderRadius:999, fontWeight:800, textDecoration:'none', fontSize:14}}>ASSINAR</a>
      </header>
      <section style={{padding:'40px 20px', textAlign:'center'}}>
        <h1 style={{fontSize:32, fontWeight:900}}>Filmes, Séries e Futebol<br/><span style={{color:'#00FF88'}}>AO VIVO em 4K</span></h1>
        <p style={{color:'#aaa', marginTop:14}}>O melhor do streaming sem travamentos.</p>
        <div style={{marginTop:22, display:'flex', gap:10, justifyContent:'center'}}>
          <button onClick={()=>setTab('filmes')} style={{padding:'12px 20px', borderRadius:999, border:'none', background: tab==='filmes'?'#fff':'#222', color: tab==='filmes'?'#000':'#fff', fontWeight:800}}>FILMES</button>
          <button onClick={()=>setTab('series')} style={{padding:'12px 20px', borderRadius:999, border:'none', background: tab==='series'?'#fff':'#222', color: tab==='series'?'#000':'#fff', fontWeight:800}}>SÉRIES</button>
          <button onClick={()=>setTab('futebol')} style={{padding:'12px 20px', borderRadius:999, border:'none', background: tab==='futebol'?'#fff':'#222', color: tab==='futebol'?'#000':'#fff', fontWeight:800}}>FUTEBOL</button>
        </div>
      </section>
      <section style={{padding:'0 16px 40px', display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:12, maxWidth:900, margin:'0 auto'}}>
        {[1,2,3,4,5,6].map(i=>(
          <div key={i} style={{background:'#151515', borderRadius:16, overflow:'hidden', border:'1px solid #222'}}>
            <div style={{height:140, background:'#222', display:'flex', alignItems:'center', justifyContent:'center', fontSize:40}}>{tab==='filmes'?'🎬':tab==='series'?'📺':'⚽'}</div>
            <div style={{padding:12}}>
              <div style={{fontWeight:800, fontSize:14}}>{tab} #{i}</div>
              <div style={{color:'#666', fontSize:12, marginTop:4}}>Full HD - 2024</div>
            </div>
          </div>
        ))}
      </section>
      <footer style={{textAlign:'center', padding:30, color:'#555', fontSize:12}}>supplay.online © 2025</footer>
    </main>
  )
}
