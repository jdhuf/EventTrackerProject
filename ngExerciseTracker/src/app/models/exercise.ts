export class Exercise {

  id: number;
  name: string;
  distance: number;
  duration: number;
  repetitions: number;
// TODO: other properties of entity


constructor(
  id: number = 0,
  name: string = '',
  distance: number = 0,
  duration: number = 0,
  repetitions: number = 0

)

{
  this.id = id;
  this.name = name;
  this.distance = distance;
  this.duration = duration;
  this.repetitions = repetitions
}

}
