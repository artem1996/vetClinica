import * as React from 'react';

export let ContactsLis = React.createClass({
    getInitialState: function() {
        return {
            displayedClients: [],
            displayedAnimals: [],
            animalSelected: 0,
            clientSelected: 0
        };
    },
    handleName: () => console.log("llll"),

    render: function() {
        return (
            <div className = "col-md-6 col-md-offset-3">
                <h2 align="middle">Регистрация нового клиента</h2>
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="lastName">Фамилия:</label>
                        <div className="col-xs-9">
                            <input type="text" className="form-control" id="lastName" placeholder="Введите фамилию" required onBlur={this.handleName}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="firstName">Имя:</label>
                        <div className="col-xs-9">
                            <input type="text" className="form-control" id="firstName" placeholder="Введите имя" required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="fatherName">Отчество:</label>
                        <div className="col-xs-9">
                            <input type="text" className="form-control" id="fatherName" placeholder="Введите отчество"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="inputEmail">Email:</label>
                        <div className="col-xs-9">
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="phoneNumber">Телефон:</label>
                        <div className="col-xs-5">
                            <input type="tel" className="form-control" id="phoneNumber" placeholder="Введите номер телефона"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Адрес:</label>
                        <div className="col-xs-9">
                            <textarea rows="3" className="form-control" id="postalAddress" placeholder="Введите адрес"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="comment">Комментарий:</label>
                        <div className="col-xs-9">
                            <textarea rows="3" className="form-control" id="comment" placeholder="Комментарий..."></textarea>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <div className="col-xs-offset-3 col-xs-9">
                            <input type="submit" className="btn btn-primary" value="Регистрация"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});