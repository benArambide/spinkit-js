/**
* 18-12-2014 
* v1- spin kit js
**/
var method_prefix = "spin_";



$(document).ready(function() {
		spinKIT('fading_circle','Loading...');
});

/** main function to call sping loading **/
function spinKIT(style,message)
{
	$overlay = $('<div>', { id:'spin-kit-loading' ,class:'spin-overlay'} );
	$overlay.append(
		$('<div>', {class:'spin-wrap'} )
		.append('<p>'+message+'</p>')
		.append( window[method_prefix + style ]()));

	/** adding overlay and loading **/
	$('body').append($overlay);
}



function spin_plane()
{
	$wrap = $('<div>',{ class :'sk-spinner sk-spinner-rotating-plane'});
	$wrap.addClass('spin-white');
	return $wrap;
}

function spin_bounce()
{
	$wrap = $('<div>',{ class :'sk-spinner sk-spinner-double-bounce'});
	$wrap
	.append( $('<div>', { class:'sk-double-bounce1 spin-white'}))
	.append( $('<div>', { class:'sk-double-bounce2 spin-white'}));
	return $wrap;
}

function spin_wave()
{
	$wrap = $('<div>',{ class :'sk-spinner sk-spinner-wave'});

	for (var i = 1 ; i <= 5; i++) {
		$wrap.append( $('<div>', { class:'sk-rect'+i+' spin-white'}));
	};		
	return $wrap;
}

function spin_dots()
{
	$wrap = $('<div>',{ class :'sk-spinner sk-spinner-chasing-dots'});
	$wrap
	.append( $('<div>', { class:'sk-dot1 spin-white'}))
	.append( $('<div>', { class:'sk-dot2 spin-white'}));		
	return $wrap;
}

function spin_circle()
{
	$wrap = $('<div>',{ class :'sk-spinner sk-spinner-circle'});

	for (var i = 1 ; i <= 12; i++) {
		$wrap.append( $('<div>', { class:'sk-circle'+i+' sk-circle '}));
	};	
	return $wrap;
}


function spin_fading_circle()
{
	$wrap = $('<div>',{ class :'sk-spinner sk-spinner-fading-circle'});

	for (var i = 1 ; i <= 12; i++) {
		$wrap.append( $('<div>', { class:'sk-circle'+i+' sk-circle '}));
	};	
	return $wrap;
}