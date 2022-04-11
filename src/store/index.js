import configure from './configure';
import * as Actions from './actions';
import * as Constants from './constants';
export default { Actions, Constants }
export { configure };

export const { store, persist } = configure();
