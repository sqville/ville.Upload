/* ************************************************************************

   Copyright: 2022 

   License: MIT license

   Authors: sqville

************************************************************************ */

qx.Theme.define("ville.upload.Decoration",
{
  decorations :
  {
    "upload-area" :
    {
      style :
      {
        width : 1,
        radius : 3,
        style : "dashed",
        color: "button-border"
      }
    },

    "upload-area-hovered" :
    {
      include: "upload-area",

      style :
      {
        color: "button-border-hovered"
      }
    }
  }
});