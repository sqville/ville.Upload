/* ************************************************************************

   License: MIT license

   Authors: Chris Eskew (sqville) - sqville@gmail.com

************************************************************************ */

qx.Class.define("ville.Upload", {
    
	extend: qx.ui.form.FileSelectorButton,
  
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
  
    construct(label, icon, command, cssclass, cssfile) {
        
		super(label, icon, command);

        // set CSS ClassName
		if (cssclass)
			this.__dragovercssclassname = cssclass;

		// set CSS file
		if (cssfile)
			this.__externalcssfile = cssfile;
		
		// Include an external CSS file for the dragover native event
        var uri = qx.util.ResourceManager.getInstance().toUri(
            this.__externalcssfile
        );
        qx.bom.Stylesheet.includeFile(uri);

        
        /* Rather than using an external css file, you can add the class and css
		*  directly to the current stylesheet. Replace the above line (qx.bom.Stylesheet.includeFile(uri))
		*  with the commented block of code below

        var dsktopstylsheet = qx.ui.style.Stylesheet.getInstance();
    	var rulename = "." + this.__dragovercssclassname;
    	var css = "opacity: .7; border: 1px solid orange !important;";
    	dsktopstylsheet.addRule(rulename, css);
		*/
        

        //add native drag and drop features to DOM element
        this.addListenerOnce("appear", function(e) {

           	//*** Required - grab the object's Dom Element and attach native drag and drop event listeners
           	//var domelem = this.getContentElement().getDomElement();
           	var domelem = e.getTarget().getContentElement().getDomElement();

           	var dragcssclassname = this.__dragovercssclassname;
   
			//*** ADD DRAG AND DROP EVENTS TO THE DOM ELEMENT:
			//**  Adding events using qx.bom.Event object is the same as adding an "on" event directly to the Dom Element,
			//**  for example, the "addNativeListener()" function is the same as: domelem.ondrop = function() {};
			//*** DRAGENTER
			qx.bom.Event.addNativeListener(domelem, "dragenter", function(e) {
				if (e.target.nodeType == 1) {
					e.dataTransfer.dropEffect = 'copy';
					qx.bom.Event.preventDefault(e);
					qx.bom.Event.stopPropagation(e); 
				}
			});

           	//*** DRAGLEAVE
	    	qx.bom.Event.addNativeListener(domelem, "dragleave", function(e) {    		
	    		if (e.target.nodeType == 1) {
	    			qx.bom.element.Class.remove(this, dragcssclassname);
	    		}	
	    	});
	    	
	    	//*** DRAGEXIT
	    	qx.bom.Event.addNativeListener(domelem, "dragexit", function(e) {
	    		qx.bom.Event.stopPropagation(e);
	    		qx.bom.Event.preventDefault(e);
	    		qx.bom.element.Class.remove(this, dragcssclassname);
	    		e.dataTransfer.dropEffect = 'none';	
	    	});
	    	
	    	//*** DRAGEND
	    	qx.bom.Event.addNativeListener(domelem, "dragend", function(e) {
	    		qx.bom.Event.stopPropagation(e);
	    		qx.bom.Event.preventDefault(e);
	    		qx.bom.element.Class.remove(this, dragcssclassname);
	    		e.dataTransfer.dropEffect = 'none';	
	    	});
	
	     	//*** DRAGOVER
	     	qx.bom.Event.addNativeListener(domelem, "dragover", function(e) {		
		    	if (e.target.nodeType == 1) {
	    			e.dataTransfer.dropEffect = 'copy';
	    			qx.bom.Event.preventDefault(e);
	    			qx.bom.Event.stopPropagation(e);
	    			qx.bom.element.Class.add(this, dragcssclassname);
	    		}
	     	});
	
	     	//*** DROP
	     	qx.bom.Event.addNativeListener(domelem, "drop", function(e) {		
	    		qx.bom.Event.preventDefault(e);
	    		qx.bom.Event.stopPropagation(e);
	    		qx.bom.element.Class.remove(this, dragcssclassname);
	     	});
        }, this);
    },

	/*
	*****************************************************************************
		PROPERTIES
	*****************************************************************************
	*/
	properties: {
		// overridden
		appearance: {
			refine: true,
			init: "upload"
		}
	},

    /*
    *****************************************************************************
        MEMBERS
    *****************************************************************************
    */
    members: {
        
        __dragovercssclassname: "ville-upload-dragndrop-enter",

		__externalcssfile : "ville/upload/css/dragndrop.css"
    }
});