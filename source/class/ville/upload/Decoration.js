/* ************************************************************************

   License: MIT license

   Authors: Chris Eskew (sqville) - sqville@gmail.com

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