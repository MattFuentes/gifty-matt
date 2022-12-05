import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);
    console.log({isLoading});
    return (
        <React.Fragment>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">
                {
                    images.map( (images) => (
                        <GifGridItem 
                        key={images.id}
                        {...images}
                        />
                    ))
                }
            </div>
        </React.Fragment>
)}
