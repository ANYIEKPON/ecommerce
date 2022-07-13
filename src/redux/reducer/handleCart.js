

const cart = [];

const handleCart = (state = cart, action) => {
        switch (action.type) {

            case "ADD":
                return action.payload;

            case "ADDITEM": 
                    // check if product already exist
                const exist = state.find((x) => x.id === action.payload.id);
                if(exist) {
                    // increase the quantity
                    return state.map((x) => (x.id === action.payload.id ? {...x, qty: x.qty + 1} : x))
                } else {
                        return [
                            ...state,
                            {
                                ...action.payload,
                                qty: 1,
                            }
                        ]
                }
                break;

                case "DELITEM": 
                    const exist1 = state.find((x) => x.id === action.payload.id);

                    if(exist1.qty === 1) {
                        return state.filter((x) => x.id !== exist1.id);
                    } else {
                        return state.map((x) => (x.id === action.payload.id ? {...x, qty: x.qty - 1} : x));
                    }
                    break;

            default:
                return state;
                break;
        }
}

export default handleCart;