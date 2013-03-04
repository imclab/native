/**
    @module "montage/ui/native/input-text.reel"
    @requires montage/ui/component
    @requires montage/ui/text-input
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    TextInput = require("ui/text-input").TextInput;
/**
 * Wraps the a &lt;input type="text"> element with binding support for the element's standard attributes.
   @class module:"montage/ui/native/input-text.reel".InputText
   @extends module:montage/ui/text-input.TextInput

 */
var InputText = exports.InputText = Montage.create(TextInput, {

    select: { value: function() { this._element.select(); } }

});

