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
		
	}
	
// MOVE TUNER ON LEFT SNAP
	function moveLeft(x,y){
		console.log(x,y);	
	}	
	
// MOVE TUNER ON LEFT SNAP
	function moveCenter(x,y){
		console.log(x,y);
	}

// GET XY LOCATION WHEN CLICKING THE GRIPPER
	function gripperLocation(){
		$('#gripper').onclick(function(event){})
			console.log($(this).pageX);
			}


			
//RUN THESE FUNCTIONS ONCE THE PAGE LOADS
	dragTuner();


});
