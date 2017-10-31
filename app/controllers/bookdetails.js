// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = arguments[0] || {};
$.titleLabel.text = args.title || 'Default Title';
$.authorLabel.text = args.author || 'Default author'; 