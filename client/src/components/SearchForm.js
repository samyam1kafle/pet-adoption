import React from 'react';
import "../css/seachform.css";

class SearchForm extends React.Component {
  render() {
    return (
          <>
            <select  value={this.props.state.type} name='type' onChange={this.props.handleChange}>
              <option>Dog</option>
              <option>Cat</option>
            </select>
      
            <br/>      
            <select value={this.props.state.age} name='age' onChange={this.props.handleChange}>
              <option disabled>Age</option>
              <option>Puppy</option>
              <option>Young</option>
              <option>Old</option>
            </select>

            {
                        this.props.state.isCat && 
                        <>
            <select value={this.props.state.breed1} name='breed1' onChange={this.props.handleChange}>
              <option disabled>Cat Breed</option>
              <option>Persian</option>
              <option>Siamese</option>
              <option>Maine Coon</option>
              <option>British Shorthair</option>
              <option>Ragdoll</option>
              <option>Bengal</option>
              <option>Scottish Fold</option>
              <option>Russian Blue</option>
              <option>Himalayan</option>
              <option>Sphynx</option>
            </select>
            </>
            }
{
                        this.props.state.isCat ||
                        <>

            <select value={this.props.state.breed} name='breed' onChange={this.props.handleChange}>
                <option disabled>Dog Breed</option>
                <option>Tibetan Mastiff</option>
                <option>Nepali Sheepdog (Bhote Kukur)</option>
                <option>Labrador Retriever</option>
                <option>German Shepherd</option>
                <option>Siberian Husky</option>
                <option>Golden Retriever</option>
                <option>Pomeranian</option>
                <option>Boxer</option>
                <option>Rottweiler</option>
                <option>Shih Tzu</option>
            </select>
            </>
            }
            <select value={this.props.state.sex} name='sex' onChange={this.props.handleChange}>
              <option disabled>SEX</option>
              <option value={"M"}>Male</option>
              <option value={"F"}>Female</option>
            </select>
            <input type="submit" value="Search"  />

        </>


    );
  }
}

export default SearchForm;
