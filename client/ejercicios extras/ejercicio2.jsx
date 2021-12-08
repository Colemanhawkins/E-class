import React from 'react'

const Ejercicio2 = ({names , order}) => {

    let listNames = [];

    if(order === 'ASD'){
        listNames = names.sort().join(" ").trim().split(' ')
    }
    if(order === 'DES'){
        listNames = names.sort().reverse().join(" ").trim().split(' ')
    }

    return (
        <div>
            { names && listNames ?
            <ul>
                { !listNames ? null :
                listNames.map((name) => (
                    <li>
                        {name}
                    </li>
                ))
                }
            </ul>
                : null}
        </div>
    )
}

export default Ejercicio2;
