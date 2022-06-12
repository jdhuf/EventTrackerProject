window.addEventListener('load', function(e){
	init();
});

function init(){
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
