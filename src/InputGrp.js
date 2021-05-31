import React, { useRef, useState } from "react";
import { ReactComponent as EditIcon } from "./edit.svg";
import { ReactComponent as SubmitIcon } from "./comment.svg";
import { ReactComponent as CancelIcon } from "./error.svg";

const InputGrp = (props) => {
    const [editing, setEditing] = useState(false);
    const [inputValue, setInputValue] = useState(props.initialValue);
    const inputElem = useRef(null);

    const handleSubmit = () => {
        
    }

    return (
        <>
            <div className="input-grp">
                <input
                    className={editing ? "editing" : ""}
                    ref={inputElem}
                    name={props.name}
                    type={props.type}
                    value={inputValue}
                    readOnly={!editing}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                    placeholder={props.placeholder}
                />
                {editing ? (
                    <>
                        <CancelIcon onClick={() => setEditing(false)} />
                        <SubmitIcon onClick={handleSubmit}/>
                    </>
                ) : (
                    <EditIcon
                        onClick={() => {
                            setEditing(true);
                            inputElem.current.focus();
                        }}
                    />
                )}
            </div>
        </>
    );
};

export default InputGrp;
