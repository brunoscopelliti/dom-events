
import $$ from './dom-query';

/**
 * @name setup
 * @description
 * A simple utility to prepare the page's content
 *
 * @param {String} dom: the page's new content
 */
const setup = (dom) => {
    document.body.innerHTML = '<div id="test-container"></div>';
    $$('#test-container')[0].innerHTML = dom;
}

export default setup;
