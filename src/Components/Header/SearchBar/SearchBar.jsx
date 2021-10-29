import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");
    const history = useHistory();

    const searchSubmitHandler = (e) => {
        let searchKeyword=keyword.trim()
        if (searchKeyword) {
          history.push(`/search-result/${keyword}`);
        } else {
          history.push("/search-result");
        }
     
      };
  
     
    return (
        <>
            <form className="d-flex" onSubmit={searchSubmitHandler}>
                <input className="form-control input-xxlarge me-2" type="text" placeholder="Search"  onChange={(e) => console.log(setKeyword(e.target.value))} />
                <input className="btn btn-danger" type="submit"/>
            </form>
           
        </>
    )
}

export default SearchBar
