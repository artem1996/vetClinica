import * as React from 'react';
import {Animals} from './Animals.jsx';
import {Clients} from './Clients.jsx';

var CLIENTS = [
    {
        id: 1,
        name: 'АБАБАБ',
        phoneNumber: '+250966666666',
        animals: [1, 2, 3, 4]
    }, {
        id: 2,
        name: 'АББББ',
        phoneNumber: '+250966344466',
        animals: [3, 4]
    }, {
        id: 3,
        name: 'АВГ',
        phoneNumber: '+250976654433',
        animals: [5, 6]
    }, {
        id: 4,
        name: 'ДОМ',
        phoneNumber: '+250456784935',
        animals: [7, 8]
    }
];
var ANIMALS = [
    {
        id: 1,
        idContact: [1],
        name: "koshka",
        kind: "koshka",
        breed: "Naglaya",
        age: 18,
        color: "Рыжая",
        gender: "Ж",
        lastUse: "12.01.1999"
    },
    {
        id: 2,
        idContact: [1, 2],
        name: "Layka",
        kind: "собака",
        breed: "Двортерьер",
        age: 5,
        color: "Белая",
        gender: "М",
        lastUse: "12.01.2015"
    },
    {
        id: 3,
        idContact: [2, 4],
        name: "koshka1",
        kind: "koshka",
        breed: "Naglaya",
        age: 18,
        color: "Рыжая",
        gender: "Ж",
        lastUse: "12.01.1999"
    },
    {
        id: 4,
        idContact: [2, 3],
        name: "Layka1",
        kind: "собака",
        breed: "Двортерьер",
        age: 5,
        color: "Белая",
        gender: "М",
        lastUse: "12.01.2015"
    },
    {
        id: 5,
        idContact: [3, 4],
        name: "koshka2",
        kind: "koshka",
        breed: "Naglaya",
        age: 18,
        color: "Рыжая",
        gender: "Ж",
        lastUse: "12.01.1999"
    },
    {
        id: 6,
        idContact: [3, 1],
        name: "Layka2",
        kind: "собака",
        breed: "Двортерьер",
        age: 5,
        color: "Белая",
        gender: "М",
        lastUse: "12.01.2015"
    },
    {
        id: 7,
        idContact: [4, 2],
        name: "Tupaya",
        kind: "koshka",
        breed: "Tupaya",
        age: 6,
        color: "Черная",
        gender: "Ж",
        lastUse: "13.03.2014"
    },
    {
        id: 8,
        idContact: [4, 1],
        name: "Dog",
        kind: "собака",
        breed: "Эльдельтерьер",
        age: 9,
        color: "Белая",
        gender: "М",
        lastUse: "8.03.2016"
    }
];


function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) return 1;
    }
    return 0;
}

export let ContactsList = React.createClass({
    getInitialState: function() {
        return {
            displayedClients: [],
            displayedAnimals: [],
            animalSelected: 0,
            clientSelected: 0
        };
    },

    handleSearch: function(event) {
        if(event.target.value.length == 0 || event.target.value == '#') {
            this.setState({
                displayedClients: [],
                displayedAnimals: [],
                animalSelected: 0,
                clientSelected: 0
            });
            return;
        }
        if(event.target.value[0] == '#') {
            var idAnimal =event.target.value.substr(1);
            var displayedAnimals = ANIMALS.filter(function(el){
                return ('' + el.id).indexOf(idAnimal) == 0;
            });
            this.setState({
                displayedAnimals: displayedAnimals,
                displayedClients: []
            });
            return;
        }
        if(event.target.value[0] >= "Ё" && event.target.value[0] <= "ё") {
            var displayedClients = CLIENTS.filter(function(el){
                return el.name.indexOf(event.target.value) == 0;
            });
            this.setState({
                displayedClients: displayedClients,
                displayedAnimals: []
            });
            return;
        }
        console.log("It`s Phone Number!");
    },

    handleGetClient: function(animal) {
        var displayedClients = CLIENTS.filter(function(el){
            return find(animal.idContact, el.id);
        });
        this.setState({
            displayedClients: displayedClients,
            animalSelected: animal.id
        });
        console.log(animal);
    },

    handleGetAnimal: function(client) {
        var displayedAnimals = ANIMALS.filter(function(el){
            return find(client.animals, el.id);
        });
        this.setState({
            displayedAnimals: displayedAnimals,
            clientSelected: client.id
        });
        console.log(client);
    },

    render: function() {
        var getClients = this.handleGetClient;
        var getAnimals = this.handleGetAnimal;
        let clientSelected = this.state.clientSelected;
        let animalSelected = this.state.animalSelected;
        return (
            <div>
                <div className="input-group col-md-5"><input type="text" className="form-control" onChange={this.handleSearch} />
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <td>ФИО</td>
                                <td>Телефон</td>
                            </tr>
                            </thead>
                            <tbody id="clients">
                            {
                                this.state.displayedClients.map(function(el) {
                                    return <Clients
                                        key={el.id}
                                        name={el.name}
                                        phoneNumber={el.phoneNumber}
                                        getAnimal={function(){getAnimals(el)}}
                                        selected={el.id == clientSelected}
                                    />;
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <td>Кличка</td>
                                <td>Вид</td>
                                <td>Порода</td>
                                <td>Возраст</td>
                                <td>Окрас</td>
                                <td>Пол</td>
                                <td>Последнее посещение</td>
                            </tr>
                            </thead>
                            <tbody id="animals">
                            {
                                this.state.displayedAnimals.map(function(el) {
                                    return <Animals
                                        key={el.id}
                                        name={el.name}
                                        kind={el.kind}
                                        breed={el.breed}
                                        age={el.age}
                                        color={el.color}
                                        gender={el.gender}
                                        lastUse={el.lastUse}
                                        getClients={function(){getClients(el)}}
                                        selected={el.id == animalSelected}
                                    />;
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
});