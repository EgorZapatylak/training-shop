import React from 'react';
import './Promice.css'

export function Promice ()  {
    return (
        <div className='promise'>
            <div className='new_collection'>
                <div className='coll_item'>
                    <p>New Season</p>
                    <span>look book collection</span>
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