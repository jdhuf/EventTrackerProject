window.addEventListener('load', function(e){
	init();
});

function init(){
	
	
	findExerciseById();
	loadExerciseList();
	
	loadNewExercise();
	loadUpdatedExercise();
	
	deleteExerciseById();
	
	
	}



//------------------------------------Display Error------------------------------------------

function displayError(message) {
	let dataDiv = document.getElementById('exerciseData');
	dataDiv.textContent = '';
	dataDiv.textContent = message;
}

//---------------------------------------Create------------------------------------------------

function loadNewExercise(){
	document.newExerciseForm.addNewExerciseButton.addEventListener('click', createExercise);
}

function createExercise(e){
	e.preventDefault();
	let form = document.newExerciseForm;
	let newExercise = {
		name: form.name.value,
		distance: form.distance.value,
		duration: form.duration.value,
		repetitions: form.repetitions.value
	}
	sendNewExercise(newExercise);	
	
}

function sendNewExercise(newExercise){
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/exercise', true);

	xhr.onreadystatechange = function() {
  	if (xhr.readyState === 4 ) {
    	if ( xhr.status == 200 || xhr.status == 201 ) { 
      	let newExercise = JSON.parse(xhr.responseText);
      	console.log(newExercise);
      	displayExercise(newExercise);
      	loadExerciseList();
    }
    else {
      	displayError("Error creating exercise: " + xhr.status + xhr.statusText);
    }
  }
};
	xhr.setRequestHeader("Content-type", "application/json"); 
	xhr.send(JSON.stringify(newExercise));
	
	
}

//---------------------------------------------------Update--------------------------

function loadUpdatedExercise() {
	document.updateExerciseForm.updateExerciseButton.addEventListener('click', updateExercise);
}

function updateExercise(e){
	e.preventDefault();
	let form = document.updateExerciseForm;
	let updatedExercise = 
		 {
		id: form.exerciseId.value,
        name: form.name.value,
		distance: form.distance.value,
		duration: form.duration.value,
		repetitions: form.repetitions.value
    }
	
	console.log(updatedExercise);
	sendUpdatedExercise(updatedExercise);	
	
}

function sendUpdatedExercise(updatedExercise){
	let exerciseUpdateId = document.updateExerciseForm.exerciseId.value;
	let xhr = new XMLHttpRequest();
	
	xhr.open('PUT', 'api/exercise/' + exerciseUpdateId);
	

	xhr.onreadystatechange = function() {
  	if (xhr.readyState === 4 ) {
    	if ( xhr.status == 200 || xhr.status == 201 ) { 
      	let updatedExercise = JSON.parse(xhr.responseText);
      	console.log(updatedExercise);
      	displayExercise(updatedExercise);
      	loadExerciseList();
    }
    else {
      	displayError("Error creating exercise: " + xhr.status + xhr.statusText);
    }
  }
};
	xhr.setRequestHeader("Content-type", "application/json"); 
	xhr.send(JSON.stringify(updatedExercise));
	
	
}


function displayUpdatedExercise(updatedExercise) {
	let dataDiv = document.getElementById('updatedData');
	dataDiv.textContent = '';


	let listOfExerciseData = ["Id: " + updatedExercise.id, "Name: " + updatedExercise.name, "Distance: " + updatedExercise.distance, "Duration: " + updatedExercise.duration, "Repetitions: " + updatedExercise.repetitions];
	let ul = document.createElement('ul');
	listOfExerciseData.forEach(function(value) {

		let li = document.createElement('li');
		li.textContent = value;
		ul.appendChild(li);

	});
	dataDiv.appendChild(ul);

}
	
//------------------------------------------------ List All -----------------------------------


function loadExerciseList(){
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/exercise")
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let exercise = JSON.parse(xhr.responseText);
				displayExerciseList(exercise);
			}
		}
		else {
			
		}
	}
	
	xhr.send();
}


function displayExerciseList(exerciseList) {
	let tbody = document.getElementById('exerciseRows');
	tbody.textContent = '';
	let totalDist = 0;
	let totalDur = 0;
	let totalReps = 0;
	
	
	for (let exercise of exerciseList) {
		
		totalDist += exercise.distance;
		totalDur += exercise.duration;
		totalReps += exercise.repetitions;
		
		let tr = document.createElement('tr');
		tbody.appendChild(tr);
		
				
		let td = document.createElement('td');				
		td.textContent = exercise.id;				
		tr.appendChild(td);
			
		td = document.createElement('td');
		td.textContent = exercise.name;		
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.textContent = exercise.distance;
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.textContent = exercise.duration;
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.textContent = exercise.repetitions;
		tr.appendChild(td);
		

//---------------------------totals----------------------------------------------------------		
		let tbodyDist = document.getElementById('totalDist');
		let tbodyDur = document.getElementById('totalDur')
		let tbodyReps = document.getElementById('totalReps');
		
		
		tbodyDist.textContent = "Distance: " + totalDist;
		tbodyDur.textContent = "Duration: " + totalDur;
		tbodyReps.textContent = "Repetitions: " + totalReps;
//--------------------------------------------------------------------------------------------		
	
		
		
		
		
		
		console.log(Number.parseInt(exercise.repetitions))
	

		
		tr.addEventListener('click', function(e){
			
			console.log('clicked row ' );
			e.preventDefault();
			
			
			console.log(e.target);
			let id = e.target.parentElement.firstElementChild.textContent;
				console.log(id);
			getExercise(id);
			
		});
		
		
	}
	console.log(totalReps);
	console.log(document.getElementById('exerciseData').textContent)
	console.log(tbody.children[0]);
	console.log(tbody.children[0].children[0].textContent);
	let number1 = Number.parseInt(tbody.children[0].children[4].textContent);
	let number2 = Number.parseInt(tbody.children[1].children[4].textContent);
	
	let numOfReps = Number.parseInt(tbody.children[1].children[4].textContent);
	
	let sum = number1 + number2;
	console.log(sum);

	//console.log((tbody.children[0].children[4].textContent.value) + (tbody.children[1].children[4].valueOf(textContent))
	
}

//------------------------------------------Find By Id-----------------

function findExerciseById() {
		document.exerciseForm.findExerciseButton.addEventListener('click', function(event) {
		event.preventDefault();
		let exerciseId = document.exerciseForm.exerciseId.value;
		if (!isNaN(exerciseId) && exerciseId > 0) {
			getExercise(exerciseId);
		}
	});}

function getExercise(exerciseId) {
	
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/exercise/' + exerciseId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 && xhr.responseText) {
				let exercise = JSON.parse(xhr.responseText);
				displayExercise(exercise);

			}
			else {
				displayError('Exercise not found.');

			}

		}
	}

	xhr.send();
}

function displayExercise(exercise) {
	let dataDiv = document.getElementById('exerciseData');
	dataDiv.textContent = '';

	
	let listOfExerciseData = ["Id: " + exercise.id, "Name: " + exercise.name, "Distance: " + exercise.distance, "Duration: " + exercise.duration, "Repetitions: " + exercise.repetitions];
	let ul = document.createElement('ul');
	listOfExerciseData.forEach(function(value) {

		let li = document.createElement('li');
		li.textContent = value;
		ul.appendChild(li);

	});
	dataDiv.appendChild(ul);

}

//---------------------------------------------------------Delete By ID---------------

function deleteExerciseById() {
		document.deleteExerciseForm.deleteExerciseButton.addEventListener('click', function(event) {
		event.preventDefault();
		let exerciseToDeleteId = document.deleteExerciseForm.exerciseId.value;
		if (!isNaN(exerciseToDeleteId ) && exerciseToDeleteId > 0) {
			deleteExercise(exerciseToDeleteId);
		}
	});}

function deleteExercise(exerciseToDeleteId) {
	
	
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/exercise/' + exerciseToDeleteId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			
			loadExerciseList();
			console.log('line 268')
			}
			
			else {
				displayError('Exercise not found.');

			}
		
	}

	xhr.send();
	
}


//----------------------------------------------------------Totals------------------------------






