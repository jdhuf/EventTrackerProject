export class Exercise {

  id: number | null;
  name: string | null;
  distance: number | null;
  duration: number | null;
  repetitions: number | null;
// TODO: other properties of entity


constructor(
  id: number | null = 0,
  name: string | null = '',
  distance: number | null = 0,
  duration: number | null = 0,
  repetitions: number | null = 0

)

{
  this.id = id;
  this.name = name;
  this.distance = distance;
  this.duration = duration;
  this.repetitions = repetitions
}

}
