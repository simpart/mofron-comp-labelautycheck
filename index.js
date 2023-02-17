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
            this.confmng().add('padding', { type:'size', init:'0.1rem' });
            
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
            this.childDom().parent().style({ "align-items": "center" });

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
    
    beforeRender () {
        try {
            super.beforeRender();
            this.m_style_buf = this.style();
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
	    jQuery('#' + this.childDom().id()).labelauty({
	        label: false,
            });
	    this.styleDom(this.styleDom().parent());
            
            this.style(this.m_style_buf);
            this.styleDom().getRawDom().childNodes[1].style['padding'] = this.padding();

	    for (let lbl_idx in this.styleDom().getRawDom().childNodes) {
	        if (1 < parseInt(lbl_idx)) {
                    this.styleDom().getRawDom().childNodes[lbl_idx].style['display'] = 'none';
		}
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    padding (prm) {
        try {
            return this.confmng('padding', prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
