'use strict';

/* App Module */

var systemSetting = angular.module('systemSetting',
                    ['ui.bootstrap',
                      'ui.bootstrap.contextMenu',
                     'ngRoute', 
                     'ngCookies', 
                     'ngSanitize',
                     'systemSettingDirectives',
                     'systemSettingControllers',
                     'systemSettingServices',
                     'systemSettingFilters',
                     'd2Directives',
                     'd2Filters',
                     'd2Services',
                     'd2Controllers',
                     'angularLocalStorage', 
                     'pascalprecht.translate',
                     'd2HeaderBar', 
                     'ngCsv',
                     'sticky'])
              
.value('DHIS2URL', '../../..')

    .config(function($httpProvider, $routeProvider, $translateProvider) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.interceptors.push('LoginHttpInterceptor');
        $routeProvider.when('/:menuID', {
            templateUrl:'views/general.html',
            controller: 'GeneralController'
        }).when('/',{
            templateUrl:'views/general.html',
            controller: 'GeneralController'
        }).otherwise({
            redirectTo : '/'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.useLoader('i18nLoader');
    })
