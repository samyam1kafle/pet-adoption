import React from 'react';
import "../css/seachform.css";

class SearchForm extends React.Component {
  render() {
    return (
      <form className='search-form'>        
            <input value="Dog" type="text"  />        
            <input value="Cat" type="text"  />  
            <br/>      
            <select>
              <option>AGE</option>
            </select>
            <select>
              <option>BREED</option>
            </select>
            <select>
              <option>SEX</option>
            </select>
            <input type="submit" value="Search"  />  

        </form>


    );
  }
}

export default SearchForm;
