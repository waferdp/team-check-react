type CheckItemProps = {key: number, text: string, callback: Function}

function Item(props: CheckItemProps) {
   
    return (
        <li>
            <div>
                <span>{props.key +1}: {props.text} </span>
            </div>
            <div>
                <div>
                    <input id={`item_${props.key+1}_1`} name={`item_${props.key+1}`} value="1" type="radio" onChange={(e) => {props.callback(props.key, 1, e.target.value)}}/>
                    <label htmlFor={`item_${props.key+1}_1`}>1. Disagree strongly</label>
                </div>
                <div>
                    <input id={`item_${props.key+1}_2`} name={`item_${props.key+1}`} value="2" type="radio"  onChange={(e) => {props.callback(props.key, 2, e.target.value)}}/>
                    <label htmlFor={`item_${props.key+1}_2`}>2. Disagree to some extent</label>
                </div>
                <div>
                    <input id={`item_${props.key+1}_3`} name={`item_${props.key+1}`} value="3" type="radio"  onChange={(e) => {props.callback(props.key, 3, e.target.value)}}/>
                    <label htmlFor={`item_${props.key+1}_3`}>3. Agree to some extent</label>
                </div>
                <div>
                    <input id={`item_${props.key+1}_4`} name={`item_${props.key+1}`} value="4" type="radio"  onChange={(e) => {props.callback(props.key, 4, e.target.value)}}/>
                    <label htmlFor={`item_${props.key+1}_4`}>4. Agree strongly</label>
                </div>
            </div>
        </li>
    );

}

export default Item;