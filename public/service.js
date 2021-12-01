
export default class SwapiApi {
    _apiBase = 'https://swapi.dev/api';
  
   async getResource (url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if(!res.ok) {
          throw new Error (`Couldn't fetch ${url}` + `answer status ${res.status}`);
  
      }
      const answer = res.json();
      return answer;
    }
  
   async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results;
    }
  
    async getPerson(id) {
      const person = await this.getResource(`/people/${id}`);
      return this._parsePerson(person);
    }
  
    async getAllPlanet() {
       const res = await this.getResource(`/planets/`);
       return res.results;
     }
  
     async getPlanet(id) {
       const planet = await this.getResource(`/planets/${id}`);
       return this._parsePlanet(planet);
     }
  
     async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
      }
  
      async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}`);
        return this._parseStarship(starship);
      }
  
      _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
      }
  
      _parsePlanet(planet) {
          return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
          }
      }
  
      _parsePerson(person) {
          return {
            id:this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            height: person.height
          }
      }
  
      _parseStarship(starship) {
        return {
          id:this._extractId(starship),
          name: starship.nane,
          model: starship.model,
          length: starship.length,
          cargoCapacity: starship.cargo_capacity,
          passengers: starship.passengers
        }
      }
  }
  