import React, {useEffect,useState} from 'react';
import imge from './image/img.jpg';

function local () {
    const local = JSON.parse(localStorage.getItem('data'));

    if(local) {
        return JSON.parse(localStorage.getItem('data'));
    } else {
        return [];
    }
}

function List() {

    const [lcl, setLcl] = useState(local());

    useEffect(() => {
        local();
    },[lcl])

    return (
        <>
        <div className = 'brdr'>
        <div style = {{width:'500px',height:'500px'}}>
            <img src = {imge} height = '500px' width = '500px' alt = 'wait' />
        </div>

        <div className = 'form' style = {{overflow:'auto'}}>
            {
                lcl.map(val => {
                    return (
                        <>
                            <h2 style = {{textAlign:'center'}}>
                                {val.name}
                            </h2>
                        </>
                    )
                })
            }
        </div>
        </div>
        </>
    )
}

export default List;
