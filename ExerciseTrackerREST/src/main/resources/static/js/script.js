window.addEventListener('load', function(e){
	init();
});

function init(){
	document.exerciseForm.findExerciseButton.addEventListener('click', function(event) {
		event.preventDefault();
		let exerciseId = document.exerciseForm.exerciseId.value;
		if (!isNaN(exerciseId) && exerciseId > 0) {
			getExercise(exerciseId);
		}
	});
	loadExerciseList();

	
}

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
