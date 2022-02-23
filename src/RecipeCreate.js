import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name:'',
    cuisine:'',
    photo:'',
    ingredients:'',
    preparation: '',
  };
  
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {    
    setFormData({
        ...formData,
        [target.name]: target.value,            
    });       
  };
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
      createRecipe(formData)
      setFormData({...initialFormState})
  }
  
  return (
    <form name="create" className="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>              
              <input 
                type='text' 
                id='name' 
                name='name'
                placeholder="Name"
                required={true}
                onChange={handleChange}
                value={formData.name}
              />              
            </td>
            <td>
              <label htmlFor="cuisine"></label>              
              <input 
                type='text' 
                id='cuisine' 
                name='cuisine'
                placeholder="Cuisine"
                required={true}
                onChange={handleChange}
                value={formData.cuisine}
              />              
            </td>
            <td>
            <label htmlFor="photo"></label>
              <input 
                type='url' 
                id='photo' 
                name='photo'
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={formData.photo}
              />              
            </td>
            <td>
            <label htmlFor="ingredients"></label>              
              <textarea
                type='text' 
                id='ingredients' 
                name='ingredients'
                placeholder="Ingredients"
                required={true}
                onChange={handleChange}
                value={formData.ingredients}
              />              
            </td>
            <td>
            <label htmlFor="preparation"></label>
              <textarea 
                type='text' 
                id='preparation' 
                name='preparation'
                placeholder="Preparation"
                required={true}
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  ); 
}

export default RecipeCreate;
