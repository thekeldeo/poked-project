import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-aria'
import 'angular-animate'
import 'angular-material';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css'
import 'angular-material/angular-material.min.css'
import './common/icon.css';

angular.module('app', [
  'ngMaterial',
  uiRouter,
  Common,
  Components,
])
  .config(($locationProvider, $mdThemingProvider, $mdIconProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    $mdThemingProvider
      .theme('default')
      .primaryPalette('grey', {
        'default': '600'
      })
      .accentPalette('teal', {
        'default': '500'
      })
      .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('defaultPrimary')
      .dark();

    $mdThemingProvider.theme('grey', 'default')
      .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
      .primaryPalette('defaultPrimary', {
        'hue-1': '50'
      });

    $mdThemingProvider.definePalette('defaultPrimary', {
      '50':  '#FFFFFF',
      '100': 'rgb(255, 198, 197)',
      '200': '#E75753',
      '300': '#E75753',
      '400': '#E75753',
      '500': '#E75753',
      '600': '#E75753',
      '700': '#E75753',
      '800': '#E75753',
      '900': '#E75753',
      'A100': '#E75753',
      'A200': '#E75753',
      'A400': '#E75753',
      'A700': '#E75753'
    });

    $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
  })

  .component('app', AppComponent);
