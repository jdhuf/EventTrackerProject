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

function loadNewExercise(){
	document.newExerciseForm.addNewExerciseButton.addEventListener('click', createExercise);
}

function loadUpdatedExercise() {
	document.updateExerciseForm.updateExerciseButton.addEventListener('click', updateExercise);
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
    }
    else {
      	displayError("Error creating exercise: " + xhr.status + xhr.statusText);
    }
  }
};
	xhr.setRequestHeader("Content-type", "application/json"); 
	xhr.send(JSON.stringify(newExercise));
	
}

function displayError(message) {
	let dataDiv = document.getElementById('exerciseData');
	dataDiv.textContent = '';
	dataDiv.textContent = message;
}

function updateExercise(e){
	e.preventDefault();
	let form = document.updateExerciseForm;
	let updatedExercise = {
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
	
	let exerciseIdToUpdate = document.updateExerciseForm.exerciseId.value;
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/exercise/' + exerciseIdToUpdate, true);

	xhr.onreadystatechange = function() {
  	if (xhr.readyState === 4 ) {
	console.log('line 82 hi')
	console.log(xhr.status + 'line 83')
    	if ( xhr.status == 400 || xhr.status == 201 ) { 
		console.log('line 84 hi')
      	let updatedExercise = JSON.parse(xhr.responseText);
      	console.log(updatedExercise);
      	displayExercise(updatedExercise);
    }
    else {
      	displayError("Error updating exercise: " + xhr.status + xhr.statusText);
    }
  }
};
	xhr.setRequestHeader("Content-type", "application/json"); 
	console.log("hi");
	xhr.send(updatedExercise);
	
}

function findExerciseById() {
		document.exerciseForm.findExerciseButton.addEventListener('click', function(event) {
		event.preventDefault();
		let exerciseId = document.exerciseForm.exerciseId.value;
		if (!isNaN(exerciseId) && exerciseId > 0) {
			getExercise(exerciseId);
		}
	});}
	

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
	for (let exercise of exerciseList) {
		
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
	}
}



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

