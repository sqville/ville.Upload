/* ************************************************************************

   License: MIT license

   Authors: Chris Eskew (sqville) - sqville@gmail.com

************************************************************************ */

/**
 * This is the main application class of "ville.Upload"
 *
 * @asset(demo/*)
 * @asset(ville/upload/*)
 * @asset(qx/icon/Tango/64/actions/go-top.png)
 * 
 */
qx.Class.define("demo.Application",
{
  extend : qx.application.Standalone,

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      // *** Mixin ville.upload Appearances and Decorations with current theme
      qx.Theme.include(qx.theme.manager.Appearance.getInstance().getTheme(), ville.upload.Appearance);
      qx.Theme.include(qx.theme.manager.Decoration.getInstance().getTheme(), ville.upload.Decoration);

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // Create an Upload button
      var uploadbutton1 = new ville.Upload("Drag and drop files here, or click to browse", "qx/icon/Tango/64/actions/go-top.png").set({ iconPosition: "top", multiple: true });

      var uploadbutton2 = new ville.Upload("Drag and drop files here, or click to browse", "qx/icon/Tango/64/actions/go-top.png").set({ appearance: "button", iconPosition: "top", multiple: true });

      // Document is the application root
      var doc = this.getRoot();

      // Add button to document at fixed coordinates
      doc.add(uploadbutton1, {left: 100, top: 50});

      doc.add(uploadbutton2, {left: 100, top: 200});
    }
  }
});