$(document).ready(function(){
	
	// MAKES THE TUNER BAR DRAGGABLE	
	function dragTuner(){
		$('#tunerArea').draggable(
			
			// SETS THE DRAG EVENT ON THE TUNER AREA ID OBJECT
			{drag: function(){
			
			
			var windowWidth = $(document).width();
			var xPos = $(this).offset().left;
            var yPos =  $(this).offset.top;
       
            $('.coordinates p').text(xPos);
            
            // CHECK TO SEE IF THE USER MOVES THE BAR TO THE LEFT OF THE SCREEN
            if( xPos < windowWidth*.07){
	            
	            // IF THE USER MOVES THE BAR TO THE LEFT, CHANGE THE CSS
	            console.log("Change the CSS sheet")
	            $('#tunerArea').switchClass("tunerArea_vert");
            }
            
            
            
            // CHECK TO SEE IF THE USER MOVES THE BAR TO THE RIGHT OF THE SCREEN
            
			}}
		
		);
	}

	function snapTuner(){
	
		var tunerXPos = $('#tunerArea').offset().left;
		var windowWidth = $(document).width();
		
		console.log("The window is " + windowWidth + " pixels wide. The Tuner left margin is " + tunerXPos + (" pixels wide."));
	}

	
	dragTuner();
	snapTuner(); 

});
