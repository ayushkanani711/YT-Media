import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(' ')
  const Navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(searchTerm){
      Navigate(`search/${searchTerm}`)

      setSearchTerm('');
    }
  }
  return (
  <Paper  
  component="form" 
  onSubmit={handleSubmit} 
  sx ={{borderRadius : 20, border:'1px solid #e3e3e3' , pl:2, boxShadow:'none', mr:{sm:5} }} >
    <input className="search-bar" placeholder="Search..." value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
    <IconButton type="submit" sx= {{P: '10px', color:"red"}}>
      <Search />
    </IconButton>
  </Paper>
  )
};

export default SearchBar;
