class Contact {
    get id() {
      return this._id;
    }
    set id(id) {
      let IdRegex = RegExp('^[0-9]{1,}$');
      if (IdRegex.test(id)) {
        this._id = id;
      }
      else throw "Incorrect Id"
    }
    get name() {
      return this._name;
    }
    set name(name) {
      let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
      if (nameRegex.test(name))
        this._name =name;
      else throw "name is incorrect";
    }
  
    get address() {
      return this._address;
    }
    set address(address) {
      this._address = address;
    }
  
    get city() {
      return this._city;
    }
    set city(city) {
      this._city = city;
    }
  
    get state() {
      return this._state;
    }
    set state(state) {
      this._state = state;
    }
  
    get zip() {
      return this._zip;
    }
    set zip(zip) {
      this._zip = zip;
    }
  
    get phone() {
      return this._phone;
    }
    set phone(phone) {
      this._phone=phone;
    }
  
    toString() {
        return "id = " + this.id + " , fullName : " + this.name+ ",address=" + this.address + ",city=" + this.city + ",state=" + this.state + " , zipcode : " + this.zip +",phoneNumber = " + this.phone; 
    }
  }
  