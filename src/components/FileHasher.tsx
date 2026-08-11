import { useState,useRef } from 'react';import { Paper,Typography,Button,Chip,ToggleButtonGroup,ToggleButton } from '@mui/material';import FingerprintIcon from '@mui/icons-material/Fingerprint';import { hashFile,HASH_ALGOS } from '../utils/filesUtils';
export default function FileHasher(){const[file,setFile]=useState<File|null>(null);const[algo,setAlgo]=useState('SHA-256');const[hash,setHash]=useState('');const[loading,setLoading]=useState(false);const ref=useRef<HTMLInputElement>(null);
const run=async()=>{if(!file)return;setLoading(true);setHash('');try{const h=await hashFile(file,algo);setHash(h);}catch(e){setHash(`Error: ${(e as Error).message}`);}setLoading(false);};
return(<div className="p-4 max-w-3xl mx-auto"><Typography variant="h5" sx={{fontWeight:600}} gutterBottom>File Hasher</Typography><input ref={ref} type="file" hidden onChange={e=>{const f=e.target.files?.[0]||null;setFile(f);setHash('');}}/>
<div className="flex gap-2 mb-3"><Button variant="contained" onClick={()=>ref.current?.click()}>Choose File</Button>
<ToggleButtonGroup value={algo} exclusive onChange={(_,v)=>v&&setAlgo(v)} size="small">{HASH_ALGOS.map(a=><ToggleButton key={a} value={a} className="text-xs">{a}</ToggleButton>)}</ToggleButtonGroup>
<Button variant="outlined" startIcon={<FingerprintIcon/>} onClick={run} disabled={!file||loading}>{loading?'Hashing...':'Hash'}</Button></div>
{file&&<Chip label={file.name} size="small" className="mb-3"/>}
{hash&&<Paper variant="outlined" className="p-4"><Typography variant="subtitle2" sx={{fontWeight:600}}>{algo}</Typography><pre className="m-0 text-sm font-mono bg-gray-100 p-3 rounded break-all">{hash}</pre></Paper>}</div>);}
