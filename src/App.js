import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory) => {
    if( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories])
  }

  return (
    <React.Fragment>
      <h1>Hola</h1>
      <AddCategory 
        onNewCategory={ event => onAddCategory(event)}
      />
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {
          categories.map( category => ( 
            <GifGrid 
              key={category} 
              category={category}/> 
            ))
        }
      </ol>
    </React.Fragment>
  )
} 