$(document).ready(function(){

	
// MAKES THE TUNER BAR DRAGGABLE	
	function dragTuner(){
		$('#tunerArea').draggable(
			
			// SETS THE DRAG EVENT ON THE TUNER AREA ID OBJECT
			{drag: function(){
			
			
			var windowWidth = $(document).width();
			var xPos = $(this).offset().left;
       
            // SNAP TO LEFT TUNER BAR
            if( xPos < windowWidth*.07){	
				snapLeft();
            }
            
            // SNAP TO MIDDLE TUNER BAR
            if( xPos > windowWidth*.07){
				snapCenter();
				}         
			}
		});
	}
	
// SNAP TUNER BAR TO LEFT
	function snapLeft(){
            	
	//SWITCH THE TUNE AREA
		$('#tunerArea').removeClass("tunerArea_hor");
		$('#tunerArea').addClass("tunerArea_vert");
		            
		//SWITCH THE TUNER BAR
		$('#tunerBar').removeClass("tunerBar_hor");
		$('#tunerBar').addClass("tunerBar_vert");
		            
		//SWITCH THE GRADIENT BAR
		$('#gradientBar').removeClass("tunerGradient_hor");
		$('#gradientBar').addClass("tunerGradient_vert");
		            
		//SWITCH THE GRIPPER BAR
		$('#gripper').removeClass("gripperArea_hor");
		$('#gripper').addClass("gripperArea_vert");
		
		// MOVE THE TUNER UNDER THE MOUSE
		$(document).mousedown(function(e){
			$('#tunerArea').offset({top:e.pageY, left: e.pageX});
		});
		
		// SNAP THE TUNER TO FINAL POSITION
		$(document).mouseup(function(e){
			$('#tunerArea').css({
				"top": "10%",
				"left": "2%"
				});
		});
		           
	}	

// SNAP TUNER BAR TO RIGHT
	function snapCenter(){
	//SWITCH THE TUNE AREA
		$('#tunerArea').removeClass("tunerArea_vert");
		$('#tunerArea').addClass("tunerArea_hor");
		            
		$('#tunerBar').removeClass("tunerBar_vert");
		$('#tunerBar').addClass("tunerBar_hor");
		            
		//SWITCH THE GRADIENT BAR
		$('#gradientBar').removeClass("tunerGradient_vert");
		$('#gradientBar').addClass("tunerGradient_hor");
		            
		//SWITCH THE GRIPPER BAR
		$('#gripper').removeClass("gripperArea_vert");
		$('#gripper').addClass("gripperArea_hor");	
		
		// SNAP THE TUNER TO FINAL POSITION
		$(document).mouseup(function(e){
			$('#tunerArea').css({
				"top": "80%",
				"left": "10%"
				});
		});
	}


			
//RUN THESE FUNCTIONS ONCE THE PAGE LOADS
	dragTuner();


});
