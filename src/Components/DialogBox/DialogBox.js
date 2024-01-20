// import React, { useState } from 'react';
// import './Dialog.css'; // Import your CSS file for styling

// const Dialog = ({ onClose }) => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleBackgroundClick = (e) => {
//     // Close the dialog if the click is outside the dialog box
//     if (e.target.classList.contains('dialog-background')) {
//       onClose();
//     }
//   };

//   return (
//     <div className="dialog-background" onClick={handleBackgroundClick}>
//       <div className="dialog-box">
//         <div className="dialog-header">
//           <span onClick={onClose} className="close-button">
//             &times;
//           </span>
//         </div>
//         <div className="dialog-content">
//           <label>
//             Enter your text:
//             <input type="text" value={inputValue} onChange={handleInputChange} />
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dialog;
import React, { useState } from 'react'
import './DialogBox.css'

function DialogBox(props) {
    const { clickClose } = props

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    function fetchData(e) {
        if (e.key == "Enter") {
            console.log(inputValue)
            setInputValue("")
        }
    }

    const handleBackgroundClick = (e) => {
        // Close the dialog if the click is outside the dialog box
        // if (e.target.classList.contains('dialog-background')) {
        //     onClose();
        // }
    };

    return (
        <>
            <div className="dialog-background" onClick={clickClose}>
            </div>
            <div className="dialog-box">
                <div className="pos-relative">
                    <div className="dialog-header">
                        <span className="close-button">
                            &times;
                        </span>
                    </div>
                    <div className="dialog-content">
                        <label>
                            CodeChef Username :
                            <input id="ip"
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyUp={fetchData} />
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DialogBox