import React from 'react';
import Fetcher from './Fetcher';

/**
  use a stateless component to render out the props passed in from App. we
  can call array method on Object.keys() since it is an array 
 */
const CharList = ({starwarsChar}) => {
        return (
            <div className='list'>
                {
                Object.keys(starwarsChar).map(property => {
                    return <h5 > {`${property}: ${starwarsChar[property]} `}</h5>;
                    })
                }
            </div>
            );
        }
export default CharList;