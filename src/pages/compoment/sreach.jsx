import React from 'react';
import useDebounce from '../../hook/CustomHooks';



function Sreach({setkey}) {
    function change(e) {
        const value = e.target.value
        setkey(value)   
        console.log(value)
    }
    const valueDebounce = useDebounce(change,1000)
    return (
            <div>
            <div className="sreach">
                <form action="">
                    <input type="text" placeholder='sreach' onChange={valueDebounce}/>
                    <button>Sreach</button>
                </form>
            </div>
        </div>
        
       
    );
}

export default Sreach;