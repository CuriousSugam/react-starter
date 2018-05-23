import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';


import * as todoActions from '../actions/todoActions';
import todoService from '../services/todoServices';

export const addTodoEpic = (action$, store) => 
    action$
        .ofType(todoActions.TODO_ADD)
        .mergeMap(() => Observable.of('noop'))

// const changeSelectedDateEpic = action$ =>
//   action$
//     .ofType(calendarActions.CHANGE_SELECTED_DATE_FOR_EVENTS)
//     .mergeMap(payload => {
//       const wellFormedDate = formattedDate(new Date(payload.payload));

//       return Observable.of(
//         autoshipActions.fetchAutoshipsForSelectedDate({
//           date: wellFormedDate,
//           includeNotification: false,
//         })
//       );
//     })
//     .catch(err =>
//       Observable.of(
//         errorActions.handleError(err, {
//           showConsole: true,
//           toastMessage: toastMessage.FETCH_AUTOSHIPS_FOR_SELECTED_DATE_ERROR,
//         })
//       )
//     );


export default combineEpics(
    addTodoEpic
)