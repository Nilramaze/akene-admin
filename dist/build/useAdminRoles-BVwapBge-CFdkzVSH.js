import{f as u,D as f,b5 as p,r as d}from"./strapi-BXowZxcM.js";const y=(o={},r)=>{const{locale:t}=u(),s=f(t,{sensitivity:"base"}),{data:e,error:a,isError:n,isLoading:c,refetch:l}=p(o,r);return{roles:d.useMemo(()=>[...e??[]].sort((i,m)=>s.compare(i.name,m.name)),[e,s]),error:a,isError:n,isLoading:c,refetch:l}};export{y as u};
