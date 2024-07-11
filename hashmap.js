class HashMap {
    constructor() {
      this.map = {};
    }
 
    put(key, value) {
      this.map[key] = value;
    }
 
    get(key) {
      return this.map[key];
    }
 
    remove(key) {
      delete this.map[key];
    }
 
    size() {
      return Object.keys(this.map).length;
    }
 
    isEmpty() {
      return this.size() === 0;
    }
 
    clear() {
      this.map = {};
    }
 
    keys() {
      return Object.keys(this.map);
    }
 
    values() {
      return Object.values(this.map);
    }
 
    containsKey(key) {
      return this.map.hasOwnProperty(key);
    }
 
    containsValue(value) {
      return Object.values(this.map).includes(value);
    }
 
    toString() {
      return JSON.stringify(this.map);
    }
  }
 
 
  const map = new HashMap();
 
  map.put('name', 'John');
  map.put('age', 30);
  map.put('city', 'New York');
 
  console.log(map.toString());
 
  console.log(map.get('name'));
  console.log(map.get('age'));
  console.log(map.get('city'));
 
  map.remove('age');
  console.log(map.toString());
 
  console.log(map.containsKey('name'));
  console.log(map.containsKey('age'));
 
  console.log(map.containsValue('John'));
  console.log(map.containsValue('30'));
 
  console.log(map.size());
  console.log(map.isEmpty());
 
  map.clear();
  console.log(map.toString());
  console.log(map.isEmpty());
