
/**
 * @name loopProps
 * @description
 * Loop over the properties of the target object executing the iterator function;
 * break the loop when iterator returns false; returns true if the loop is completed.
 *
 * @param {Object} obj: target object
 * @param {Function} iterator: the function that should be executed for each property
 * @param {Object} [context]: the context of execution for the iterator
 *
 * @return {Boolean} false if the loop was interrupted
 */
function loopProps(obj, iterator, context = this){
    for (const k in obj){
        if (Object.prototype.hasOwnProperty.call(obj, k)){
            if (iterator.call(context, obj[k], k, obj) === false){
                return false;
            }
        }
    }
    return true;
}

export default loopProps;