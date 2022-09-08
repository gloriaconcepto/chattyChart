import  PropTypes  from "prop-types";
import React, { memo,useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import './search-bar.scss';
const SearchBar=memo((props)=>{
    const [word,setWord]=useState();
    const {title,callBackFunc}=props;
    const onChange=(e)=>{
    
      callBackFunc(e.target.value)
    }
    return(
        <div className="search-wrapper">
        <SearchIcon className="search-icon"/>
        <input type='text' value={word} className="search-input" placeholder={title} onChange={(e)=>onChange(e)}/>
        </div>
    )
})
SearchBar.propTypes={
title:PropTypes.string.isRequired,
iconPosition:PropTypes.bool,
callBackFunc:PropTypes.func.isRequired
}
export default SearchBar;
//seacrh parameters
//position of icon left or right default would be left...
//function for the search param
//customised icon not optional ..
