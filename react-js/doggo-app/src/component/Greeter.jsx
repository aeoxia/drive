

let counter = 0
const Greeter = (props) => {
    return (
    	<div>
            <div>Hello {props.name} + {props.name22}!</div>
            <button onClick={
                props.onTapNiRavin
            }>Tap this </button>
        </div>
    )
}

export default Greeter