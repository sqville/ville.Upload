/* ************************************************************************

   License: MIT license

   Authors: Chris Eskew (sqville) - sqville@gmail.com

************************************************************************ */

qx.Theme.define("ville.upload.Appearance",
{
  appearances :
  {   
    upload : {
      alias: "atom",

      style : function(states)
      {
        var decorator = "upload-area";

        if (!states.disabled)
          if (states.hovered && !states.pressed && !states.checked)
            decorator = "upload-area-hovered";

        return {
          center: true,
          decorator : decorator,
          padding: [3, 8],
          cursor: states.disabled ? undefined : "pointer",
          minWidth: 5,
          minHeight: 5
        };
      }
    },
  
   "upload/icon" : {
      style : function(states)
      {
        return {
          scale : true,
          width : 64,
          height : 64
        };
      }
    },

    "upload/label": {
      alias: "atom/label",

      style(states) {
        return {
          textColor: states.disabled ? "text-disabled" : undefined
        };
      }
    }
  }
});