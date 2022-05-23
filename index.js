/**
 * @file mofron-comp-labelautycheck/index.js
 * @brief labelauty style checkbox for mofron
 * @license MIT
 */
const CheckBox = require("mofron-comp-checkbox");
require('expose-loader?exposes=jQuery!jquery');
require("labelauty");

module.exports = class extends CheckBox {
    /**
     * initialize component
     * 
     * @param (mixed) string: checkbox text
     *                key-value: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("LabelautyCheck");
            
	    /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    this.childDom().attrs({ "data-labelauty" : " " });
	    this.text().style({
	        "margin-top":"auto",
		"margin-bottom":"auto",
		"margin-left":"0.1rem"
	    });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * @type private
     */
    afterRender () {
        try {
            super.afterRender();
	    jQuery('#' + this.childDom().id()).labelauty();
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
