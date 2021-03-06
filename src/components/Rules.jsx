import React from 'react'

export default function Rules({rules}) {

    const styles = {
        margin: "20px 0"
    };

    if(rules){
        return (
            <ul style={{height: "90%", margin:"0"}}>
                {
                    rules.map((elem, i) => <li key={i} style={styles}>{elem}</li>)
                }
            </ul>
        )
    } else {
        return <div className='Error'>Елементы не найдены</div>;
    }
}
