import 'angular-material.css';
import 'toastr.scss';
import './app.scss';
import 'angular';
import 'jquery';
import 'jquery-sparkline';
import sjCore from 'sanji-core-ui';
import component from './component';

let app = angular.module('webapp', [sjCore, component]);
app.config(restProvider => {
  restProvider.configure({basePath: '/api/v1'});
});

class AppController {
  constructor($translate, LANG_KEYS) {
    this.$translate = $translate;
    this.currentLang = $translate.use();
    this.langs = LANG_KEYS;
    this.data = [9,4,6,5,6,4,5,7,9,3,6,5];
    this.cpu1 = 25;
    this.cpu2 = 30;
    this.cpu3 = 51;
    this.cpu4 = 71;
    this.line = {};
    this.bar = {};
    this.line.options = {
      width: '100%',
      height: '45px',
      lineColor: '#fff',
      fillColor: 'rgba(0,0,0,0)',
      lineWidth: 1.25,
      maxSpotColor: 'rgba(255,255,255,0.4)',
      minSpotColor: 'rgba(255,255,255,0.4)',
      spotColor: 'rgba(255,255,255,0.4)',
      spotRadius: 3,
      highlightSpotColor: 'rgba(255,255,255,0.4)',
      highlightLineColor: 'rgba(255,255,255,0.4)'
    };
    this.bar.options = {
      width: '100%',
      height: '45px',
      lineColor: 'rgb(0,135,135)',
      fillColor: 'rgba(0,0,0,0)',
      lineWidth: 1.25,
      maxSpotColor: 'rgb(0,135,135)',
      minSpotColor: 'rgb(0,135,135)',
      spotColor: 'rgb(0,135,135)',
      spotRadius: 3,
      highlightSpotColor: 'rgb(0,135,135)',
      highlightLineColor: 'rgb(0,135,135)'
    };
  }

  changeLang(lang) {
    this.$translate.use(lang);
  }
}
app.controller('AppController', AppController);
