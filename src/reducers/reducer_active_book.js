// state argument is not application state only 
// the state this reducer is responsible for
export default function (state = null, action) {
    // if action has a type of bookselected return book selected(action.payload)
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;       
    }

    return state
}
