jQuery(document).ready(function( $ ) {

	$(window).on("scroll", make_it_scroll);


	// myPosition();
	
});
function make_it_scroll(){
	
	//check view port when scrolling
	let height = $(window).scrollTop();
	console.log(height);

	const heightBlock1 = $(".block_1").height();
	const heightBlock2 = $(".block_2").height();
	const heightBlock3 = $(".block_3").height();
	const heightBlock4 = $(".block_4").height();

	const topBlock1 = $(".block_1").position().top - 10;
	const topBlock2 = $(".block_2").position().top - 10;
	const topBlock3 = $(".block_3").position().top - 10;
	const topBlock4 = $(".block_4").position().top - 10;

	const width= $(".block_1").width();
	const rightBlock = width - 20;

	const botBlock1 = heightBlock1 + topBlock1 - 10;
	const botBlock2 = heightBlock2 + topBlock2 - 10;
	const botBlock3 = heightBlock3 + topBlock3 - 10;
	const botBlock4 = heightBlock4 + topBlock4 - 10;

	let leftObject = getLeftPositionOfObject();
	let topObject = getTopPositionOfObject();
	//rotate object
	rotateObject(rightBlock);
	//need object top and left. Position to start: topBlock , rightBlock and botBlock.

	if(height <= botBlock1){
		startAtRightPoint(topBlock1, botBlock1 , leftObject + 5, rightBlock);
	}else if ( height <= botBlock2){
		startAtLeftPoint(topBlock2 , botBlock2 , leftObject + 5, rightBlock );
	}
}
function getLeftPositionOfObject(){
	return $("#object_box").position().left;
}
function getTopPositionOfObject(){
	return $("#object_box").position().top;
}
function startAtLeftPoint (top, bottom , left, right) {
  let object = $('.box_animation')

  object.animate({
    top: top + 'px',
    left: left + 'px'
  }, 3000);

  object.animate({
    top: bottom + 'px',
    left: left + 'px'
  }, 3000);
  object.animate({
    top: bottom + 'px',
    left: right + 'px'
  }, 3000);
  // turn back
  object.animate({
    top: bottom + 'px',
    left: left + 'px'
  }, 3000);

  object.animate({
    top: top + 'px',
    left: left + 'px'
  }, 3000);
  object.animate({
    top: top + 'px',
    left: right + 'px'
  }, 3000);
}

function startAtRightPoint (top, bottom, left, right) {
  let object = $('.box_animation')
  object.animate({
    top: top + 'px',
    left: right + 'px'
  }, 3000);

  object.animate({
    top: bottom + 'px',
    left: right + 'px'
  }, 3000);

  object.animate({
    top: bottom + 'px',
    left: left + 'px'
  }, 3000);
  // turn back
  object.animate({
    top: bottom + 'px',
    left: right + 'px'
  }, 3000);

  object.animate({
    top: top + 'px',
    left: right + 'px'
  }, 3000);
  object.animate({
    top: top + 'px',
    left: left + 'px'
  }, 3000);
}




function rotateObject(blockWidth){

	setInterval(function(){
		top = getTopPositionOfObject();
		left = getLeftPositionOfObject();

		//block1
		if(left == blockWidth ){//vertical
			$("#object_box").removeClass("rotateBox_Origin");	
			$("#object_box").addClass("rotateBox");
		};
		if( (left < blockWidth && top == topBlock1) || (left < blockWidth && top == botBlock1) ){//horizontal
			$("#object_box").removeClass("rotateBox");
			$("#object_box").addClass("rotateBox_Origin");	
		}
		//block2

	}, 10);	
}