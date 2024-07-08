import React from "react";

function Button({label, backgroundColor='red', size='md', onClick}){
    let scale = 1;
    if(size === 'sm') scale = 0.75;
    if(size === 'lg') scale = 1.5;

    const style = {
        backgroundColor : backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none"
    }
    return  (
        <Button onClick={onClick} style={style}>
            {label}
        </Button>
    )
}

// Button.propTypes = {
//     label: PropTypes.string,
//     backgroundColor: PropTypes.string,
//     size: PropTypes.string,
// }

export default Button;