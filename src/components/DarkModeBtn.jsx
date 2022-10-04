import './DarkModeBtn.css';

function DarkModeBtn ({onClickFn, value}) {
    return(
        <button onClick={onClickFn}>{value}</button>
    )
}

export default DarkModeBtn;