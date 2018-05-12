import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return [
        <div id="page-content">
          <p id="university-name-header">Черкаський національний університет імені Богдана Хмельницького</p>
          <p id="syllabus-header">Розклад занять</p>
          <div id="controls">
              <div id="nni-faculty-input-wrapper">
                  <label htmlFor="nni-faculty-input" id="nni-faculty-input-label">ННІ або факультет</label>
                  <select id="nni-faculty-input">
                      <option id="nni-ep">
                          ННІ економіки і права
                      </option>
                      <option id="nni-im">
                          ННІ іноземних мов
                      </option>
                      <option id="nni-iot">
                          ННІ інформаційних та освітніх технологій
                      </option>
                      <option id="nni-if">
                          ННІ історії і філософії
                      </option>
                      <option id="nni-posrm">
                          ННІ педагогічної освіти, соціальної роботи і мистецтва
                      </option>
                      <option id="nni-pn">
                          ННІ природничих наук
                      </option>
                      <option id="nni-ufsk">
                          ННІ української філології та соціальних комунікацій
                      </option>
                      <option id="nni-fksz">
                          ННІ фізичної культури, спорту і здоров’я
                      </option>
                      <option id="f-psy">
                          Психологічний факультет
                      </option>
                      <option id="f-otius">
                          Факультет обчислювальної техніки, інтелектуальних та управляючих систем
                      </option>
                      <option id="nnc-imo">
                          Навчально-науковий центр «Інститут міжнародної освіти»
                      </option>
                      <option id="i-dppo">
                          Інститут доуніверситетської підготовки і післядипломної освіти
                      </option>
                  </select>
              </div>
              <div id="flex-group-subgroup-wrapper">
                  <label htmlFor="group-input" id="group-input-label">Група</label><input type="text" id="group-input"/>
                  <label htmlFor="subgroup-input" id="subgroup-input-label">Підгрупа</label><input type="number" id="subgroup-input"/>
              </div>
              <div id="flex-date-input-wrapper">
                  <label htmlFor="from-date" id="from-date-label">З дати</label><input type="date" id="from-date"/>
                  <label htmlFor="to-date" id="to-date-label">По дату</label><input type="date" id="to-date"/>
              </div>
              <input type="button" id="submit-btn" className="btn" value="Показати розклад"/>
          </div>
        </div>,
        <div className="table-content" id="table-content"></div>,
        <div className="footer"></div>
    ]
  }
}

export default App;