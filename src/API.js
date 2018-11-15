class API {

  static init () {
    this.baseUrl = 'http://localhost:3001'
  }

  static getCategories () {
    return fetch('http://localhost:3001/categories')
  .then(resp => resp.json())
  }

  static getStores () {
    return fetch('http://localhost:3001/stores')
      .then(resp => resp.json())
  }

  static postNewUser (newUser) {
    return fetch('http://localhost:3001/stores', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    }).then(resp => resp.json())
  }

  static getSoldItems (currentUsername) {
    return fetch(`http://localhost:3001/stores/${currentUsername}/sold_items`)
      .then(resp => resp.json())
  }

  static getTransaktions () {
    return fetch('http://localhost:3001/transaktions')
      .then(resp => resp.json())
  }

}

API.init()

window.API = API

export default API
