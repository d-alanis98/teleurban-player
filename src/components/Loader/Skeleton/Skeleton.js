import React, { Fragment } from 'react';
//Styles
import './Skeleton.css';
const Skeleton = ({ 
    count = 1,
}) => 
    count === 1
        ? <div className='skeleton-loader__container'></div>
        : (
            <Fragment>
                { 
                    new Array(count).fill(0).map((item, index) => (
                        <li
                            key = { `skeleton_${index}` }
                        >
                            <div className='skeleton-loader__container'></div>
                        </li>
                    ))
                }
            </Fragment>
        )
    
    ;

export default Skeleton;