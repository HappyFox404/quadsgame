import React from 'react'

export default function LogItem({ text, status }) {
    const styles = {
        margin: "10px 5px",
        color: status
    };

    return (
        <div style={styles}>
            {text}
        </div>
    )
}

LogItem.defaultProps = { status: 'white' };
