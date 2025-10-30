export const challenges = [
  {
    "title": "Blue Button",
    "difficulty": "Easy",
    "description": "Create a button that says 'Click Me' styled in a flat blue theme with white text and rounded corners.",
    "tags": ["button", "basics", "style"],
    "starterCode": "(() => <button>Click Me</button>)",
    "targetCode": "(() => (<button style={{backgroundColor:'#007BFF',color:'white',border:'none',borderRadius:'6px',padding:'10px 16px',cursor:'pointer'}}>Click Me</button>))"
  },
  {
    "title": "Minimal Card (Apple-Style)",
    "difficulty": "Easy",
    "description": "Design a minimal, soft-shadowed card with title and description — inspired by Apple's clean aesthetic.",
    "tags": ["card", "ui", "apple"],
    "starterCode": "(() => (<div><h3>Card Title</h3><p>Card description</p></div>))",
    "targetCode": "(() => (<div style={{backgroundColor:'#f9f9f9',borderRadius:'20px',padding:'24px',boxShadow:'0 10px 25px rgba(0,0,0,0.05)',fontFamily:'-apple-system, BlinkMacSystemFont'}}><h3 style={{marginBottom:'8px'}}>Apple Card</h3><p style={{color:'#555'}}>Smooth, soft, and minimal.</p></div>))"
  },
  {
    "title": "Pixel Art Badge",
    "difficulty": "Easy",
    "description": "Create a retro pixel-art style badge that says 'Level Up!' using blocky font and pixelated edges.",
    "tags": ["badge", "pixel", "retro"],
    "starterCode": "(() => (<div>Level Up!</div>))",
    "targetCode": "(() => (<div style={{fontFamily:'Press Start 2P, monospace',fontSize:'10px',background:'#ff0077',color:'white',padding:'12px',border:'3px solid black',textAlign:'center',display:'inline-block'}}>LEVEL UP!</div>))"
  },
  {
    "title": "Glass Button",
    "difficulty": "Easy",
    "description": "Build a glassmorphism button with a frosted glass effect and subtle shadows.",
    "tags": ["glassmorphism", "button", "ui"],
    "starterCode": "(() => (<button>Press</button>))",
    "targetCode": "(() => (<button style={{padding:'12px 20px',borderRadius:'12px',backdropFilter:'blur(8px)',background:'rgba(255,255,255,0.2)',border:'1px solid rgba(255,255,255,0.3)',color:'white',cursor:'pointer'}}>Press</button>))"
  },
  {
    "title": "Gradient Header",
    "difficulty": "Easy",
    "description": "Make a header with a beautiful linear gradient background and bold centered text.",
    "tags": ["header", "gradient"],
    "starterCode": "(() => (<header><h1>Hello</h1></header>))",
    "targetCode": "(() => (<header style={{background:'linear-gradient(90deg,#ff8a00,#e52e71)',padding:'20px',textAlign:'center',color:'white',fontSize:'24px',fontWeight:'bold'}}>Welcome!</header>))"
  },
  {
    "title": "Dark Mode Toggle",
    "difficulty": "Medium",
    "description": "Implement a dark/light mode toggle with smooth transitions and animated switch handle.",
    "tags": ["toggle", "darkmode", "state"],
    "starterCode": "(() => { const [dark, setDark] = React.useState(false); return (<div></div>); })",
    "targetCode": "(() => { const [dark,setDark]=React.useState(false); return (<div style={{background:dark?'#111':'#fafafa',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',transition:'0.3s'}}><div onClick={()=>setDark(!dark)} style={{width:'60px',height:'30px',borderRadius:'30px',background:dark?'#444':'#ccc',position:'relative',cursor:'pointer',transition:'0.3s'}}><div style={{position:'absolute',top:'3px',left:dark?'32px':'3px',width:'24px',height:'24px',borderRadius:'50%',background:'white',transition:'0.3s'}}></div></div></div>); })"
  },
  {
    "title": "Neon Button (Cyberpunk)",
    "difficulty": "Medium",
    "description": "Create a glowing neon button inspired by cyberpunk UI design, with animated hover glow.",
    "tags": ["neon", "cyberpunk", "button"],
    "starterCode": "(() => (<button>Neon</button>))",
    "targetCode": "(() => (<button style={{background:'transparent',color:'#0ff',border:'2px solid #0ff',padding:'12px 20px',borderRadius:'8px',fontFamily:'Orbitron, sans-serif',textShadow:'0 0 5px #0ff',boxShadow:'0 0 15px #0ff inset',cursor:'pointer'}}>NEON</button>))"
  },
  {
    "title": "Responsive Profile Card",
    "difficulty": "Medium",
    "description": "Build a profile card with avatar, name, and short bio that adjusts for small screens.",
    "tags": ["card", "responsive", "profile"],
    "starterCode": "(() => (<div><img/><h3></h3><p></p></div>))",
    "targetCode": "(() => (<div style={{maxWidth:'280px',background:'#fff',borderRadius:'16px',boxShadow:'0 8px 25px rgba(0,0,0,0.1)',padding:'20px',textAlign:'center'}}><img src='https://i.pravatar.cc/100' style={{width:'80px',height:'80px',borderRadius:'50%',objectFit:'cover',marginBottom:'10px'}}/><h3 style={{margin:'0'}}>Ava Doe</h3><p style={{fontSize:'14px',color:'#777'}}>Frontend Developer</p></div>))"
  },
  {
    "title": "Retro Notification Toast",
    "difficulty": "Medium",
    "description": "Make a pixelated notification toast with an alert sound aesthetic, inspired by retro games.",
    "tags": ["toast", "pixel", "retro"],
    "starterCode": "(() => (<div>Toast</div>))",
    "targetCode": "(() => (<div style={{fontFamily:'Press Start 2P, monospace',background:'#222',color:'#0f0',padding:'12px',border:'3px solid #0f0',display:'inline-block',boxShadow:'3px 3px 0 #0f0'}}>Achievement Unlocked!</div>))"
  },
  {
    "title": "Material Floating Action Button",
    "difficulty": "Medium",
    "description": "Implement a Material Design floating action button with shadow and ripple effect.",
    "tags": ["fab", "material", "button"],
    "starterCode": "(() => (<button>+</button>))",
    "targetCode": "(() => (<button style={{width:'56px',height:'56px',borderRadius:'50%',background:'#6200ee',color:'white',border:'none',boxShadow:'0 4px 8px rgba(0,0,0,0.3)',fontSize:'24px',cursor:'pointer'}}>+</button>))"
  },
  {
    "title": "Animated Loading Spinner",
    "difficulty": "Hard",
    "description": "Build a circular spinner animation with React inline styles using CSS keyframes.",
    "tags": ["animation", "loader"],
    "starterCode": "(() => (<div></div>))",
    "targetCode": "(() => { const spin = {animation: 'spin 1s linear infinite'}; const style = document.createElement('style'); style.innerHTML='@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}'; document.head.appendChild(style); return (<div style={{width:'40px',height:'40px',border:'4px solid #555',borderTop:'4px solid #0ff',borderRadius:'50%',...spin}}></div>); })"
  },
  {
    "title": "MacOS Dock Animation",
    "difficulty": "Hard",
    "description": "Recreate a minimal version of the MacOS dock where icons grow on hover.",
    "tags": ["animation", "apple", "hover"],
    "starterCode": "(() => (<div></div>))",
    "targetCode": "(() => (<div style={{display:'flex',gap:'10px',background:'rgba(255,255,255,0.1)',padding:'12px 20px',borderRadius:'20px'}}>{['🍎','🎵','💬','⚙️'].map((icon,i)=>(<div key={i} style={{fontSize:'28px',transition:'0.2s',cursor:'pointer'}} onMouseEnter={e=>e.currentTarget.style.transform='scale(1.5)'} onMouseLeave={e=>e.currentTarget.style.transform='scale(1)' }>{icon}</div>))}</div>))"
  },
  {
    "title": "Futuristic Card (Cyberpunk Glass)",
    "difficulty": "Hard",
    "description": "Design a holographic glass card with neon outlines and blur — inspired by futuristic dashboards.",
    "tags": ["glassmorphism", "cyberpunk", "card"],
    "starterCode": "(() => (<div></div>))",
    "targetCode": "(() => (<div style={{width:'260px',padding:'20px',borderRadius:'16px',backdropFilter:'blur(12px)',border:'1px solid rgba(0,255,255,0.5)',background:'rgba(0,255,255,0.1)',color:'#0ff',boxShadow:'0 0 20px rgba(0,255,255,0.4)',fontFamily:'Orbitron, sans-serif'}}><h3>Neon Pass</h3><p style={{fontSize:'12px'}}>Access Granted</p></div>))"
  },
  {
    "title": "Draggable Kanban Card",
    "difficulty": "Hard",
    "description": "Create a draggable Kanban task card that updates its position when moved (use React state).",
    "tags": ["drag", "kanban", "interaction"],
    "starterCode": "(() => (<div>Task</div>))",
    "targetCode": "(() => { const [pos,setPos]=React.useState({x:0,y:0}); const onDrag=e=>setPos({x:e.clientX-50,y:e.clientY-20}); return (<div draggable onDrag={onDrag} style={{position:'absolute',left:pos.x,top:pos.y,padding:'12px 20px',borderRadius:'8px',background:'#ffc107',boxShadow:'2px 2px 10px rgba(0,0,0,0.3)',cursor:'move'}}>Task Card</div>); })"
  },
  {
    "title": "Pixel Clock",
    "difficulty": "Hard",
    "description": "Create a digital clock in pixel font that updates every second.",
    "tags": ["clock", "pixel", "time"],
    "starterCode": "(() => (<div>00:00:00</div>))",
    "targetCode": "(() => { const [t,setT]=React.useState(new Date()); React.useEffect(()=>{const i=setInterval(()=>setT(new Date()),1000);return()=>clearInterval(i);},[]); return (<div style={{fontFamily:'Press Start 2P, monospace',fontSize:'12px',color:'#0f0',background:'#000',padding:'10px',border:'3px solid #0f0',display:'inline-block'}}>{t.toLocaleTimeString()}</div>); })"
  },
  {
    "title": "3D Tilt Card (Parallax Effect)",
    "difficulty": "Hard",
    "description": "Make a card that tilts and scales on mouse movement with perspective transform.",
    "tags": ["3d", "animation", "parallax"],
    "starterCode": "(() => (<div></div>))",
    "targetCode": "(() => { const ref=React.useRef(null); const handleMove=e=>{const r=ref.current.getBoundingClientRect();const x=e.clientX-r.left-r.width/2;const y=e.clientY-r.top-r.height/2;ref.current.style.transform=`rotateY(${x/20}deg) rotateX(${-y/20}deg)`;}; const reset=()=>ref.current.style.transform='rotateY(0) rotateX(0)'; return (<div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} style={{width:'260px',height:'160px',background:'linear-gradient(135deg,#ff00cc,#3333ff)',borderRadius:'16px',transition:'0.2s ease',boxShadow:'0 10px 30px rgba(0,0,0,0.4)'}}></div>); })"
  }
];