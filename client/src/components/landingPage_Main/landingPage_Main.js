import React from 'react';
import "./landingPage_Main.css";
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }));

function landingPage_Main() {
    return (
        <div className="main">
            <button variant="contained" className="start_button" >Start</button>
        </div>
    )
}

export default landingPage_Main;