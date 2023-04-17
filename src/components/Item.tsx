type CheckItem = {index: number, text: string}

function Item(props: { item: CheckItem, callback: Function, key:number}) {

    const item = props.item;
    const callback = props.callback
    
    return (
        <li>
            <div>
                <span>{item.index +1}: {item.text} </span>
            </div>
            <div>
                <div>
                    <input id={`item_${item.index+1}_1`} name={`item_${item.index+1}`} value="1" type="radio" onChange={(e) => {callback(item.index, 1, e.target.value)}}/>
                    <label htmlFor={`item_${item.index+1}_1`}>1. Disagree strongly</label>
                </div>
                <div>
                    <input id={`item_${item.index+1}_2`} name={`item_${item.index+1}`} value="2" type="radio"  onChange={(e) => {callback(item.index, 2, e.target.value)}}/>
                    <label htmlFor={`item_${item.index+1}_2`}>2. Disagree to some extent</label>
                </div>
                <div>
                    <input id={`item_${item.index+1}_3`} name={`item_${item.index+1}`} value="3" type="radio"  onChange={(e) => {callback(item.index, 3, e.target.value)}}/>
                    <label htmlFor={`item_${item.index+1}_3`}>3. Agree to some extent</label>
                </div>
                <div>
                    <input id={`item_${item.index+1}_4`} name={`item_${item.index+1}`} value="4" type="radio"  onChange={(e) => {callback(item.index, 4, e.target.value)}}/>
                    <label htmlFor={`item_${item.index+1}_4`}>4. Agree strongly</label>
                </div>
            </div>
        </li>
    );

}

export default Item;