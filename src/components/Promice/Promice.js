import React from 'react';
import './Promice.css'

export function Promice ()  {
    return (
        <div className='promice'>
            <div className='new_colection'>
                <div className='col_item'>
                    <p>New Season</p>
                    <span>lookbook collection</span>
                </div>
            </div>
            <div className='sale'>
                <div className='sale_item'>
                    <p>Sale</p>
                    <span>Get UP to 50% off</span>
                </div>
            </div>
        </div>
    );
}