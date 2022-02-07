import './styles.css';

const Item = (props) =>{
    return (
        <div className="Items">
            <label className="body">{props.body}</label>
            <label className="date">{props.date}</label>
        </div>
    )
}

export default Item;