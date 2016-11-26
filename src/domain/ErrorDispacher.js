/*eslint-disable no-console */

class ErrorDispatcher {

    static dispatchError (e) {
        if (e) {
            console.log (e);
        }
        else {
            console.log ('ErrorDispatcher--DispatchError: No error to dispatch :)');
        }
    }
}

export default ErrorDispatcher;
