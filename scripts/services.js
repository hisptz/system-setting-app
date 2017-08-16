/* global angular */

'use strict';

/* Services */

var systemSettingServices = angular.module('systemSettingServices', ['ngResource'])
/*service for local db */
    .factory('LoginHttpInterceptor', function ($q, $window) {
        return {
            response: function (response) {
                // do something on success
                if (response.headers()['content-type'] === "text/html;charset=UTF-8") {

                    if (response.data.indexOf("loginPage") != -1) {
                        $window.location.href = "../../../"
                        return $q.reject(response);
                    }
                }
                return response;
            },
            responseError: function (response) {
                // do something on error
                return $q.reject(response);
            }
        };
    })
    .service("systemSettingCurrent", function ($resource, $http, $q) {
        return {}
    })
    .factory("systemLayout", function ($resource, $http, $q) {
        return {
            getGeneralSystemLayout: function () {
                var systemLeftMenu = [
                    {
                        General: [
                            {"name": "Maximum number of analytics records", "code": "", "inputType": "select"},
                            {"name": "Infrastructure Computed values", "code": "", "inputType": "select"},
                            {"name": "Infrastructural data elements", "code": "", "inputType": "select"},
                            {"name": "Infrastructural period type", "code": "", "inputType": "select"},
                            //{"name":"Default relative period for analysis","code":"","inputType":"select"},
                            //{"name":"Feedback recipients","code":"","inputType":"select"},
                            {"name": "Max offline Administrative unit levels", "code": "", "inputType": "select"},
                            {"name": "Data analysis std dev factor", "code": "", "inputType": "text"},
                            {"name": "Phone number area code", "code": "", "inputType": "text"},
                            {"name": "Enable multi-Administrative units forms", "code": "", "inputType": "checkbox"},
                            {"name": "Put analytics in maintenance mode", "code": "", "inputType": "checkbox"}

                        ]
                    }, {
                        Server: [
                            {"name": "Cache strategy", "code": "", "inputType": "select"},
                            {"name": "Number of database server CPUs", "code": "", "inputType": "select"},

                            //{"name":"System notifications email address","code":"","inputType":"text"},
                            {"name": "Server base URL", "code": "", "inputType": "text"}
                            //{"name":"Google Analytics (Universal Analytics) key","code":"","inputType":"text"}
                        ]
                    }, {
                        Appearance: [
                            //{"name":"Application title","code":"","inputType":"text"},
                            //{"name":"Application introduction","code":"","inputType":"textarea"},
                            //{"name":"Application notification","code":"","inputType":"textarea"},
                            //{"name":"Application left-side footer","code":"","inputType":"textarea"},
                            //{"name":"Application right-side footer","code":"","inputType":"textarea"},
                            //{"name":"Style","code":"","inputType":"select"},
                            {"name": "Start page", "code": "", "inputType": "select"},
                            {"name": "Help page link", "code": "", "inputType": "text"},
                            //{"name":"Flag","code":"","inputType":"select"},
                            {
                                "name": "Require authority to add to view object lists",
                                "code": "",
                                "inputType": "checkbox"
                            },
                            {
                                "name": "Show Administrative unit hierarchy During Data Estimation",
                                "code": "",
                                "inputType": "checkbox"
                            }
                            //{"name":"Customer top menu logo","code":"","inputType":"file"},
                            //{"name":"Set ARDS menu bar","code":"","inputType":"textarea","width":"500px","height":"300px"},
                        ]
                    }, {
                        DataEntry: [
                            //{"name":"Application title","code":"","inputType":"text"},
                            //{"name":"Application introduction","code":"","inputType":"textarea"},
                            //{"name":"Application notification","code":"","inputType":"textarea"},
                            //{"name":"Application left-side footer","code":"","inputType":"textarea"},
                            //{"name":"Application right-side footer","code":"","inputType":"textarea"},
                            //{"name":"Style","code":"","inputType":"select"},
                            {"name": "Type of Financial Year for Data Entry", "code": "", "inputType": "select"},
                            {"name": "Look up Table Sorting Order", "code": "", "inputType": "select"},
                            {
                                "name": "Differential forms with multiple sub-units from the rest in form selection(show 'Sub administration units' text)",
                                "code": "",
                                "inputType": "checkbox"
                            },
                            {"name": "Data entry form filter variable", "code": "", "inputType": "text"},
                            //{"name":"Help page link","code":"","inputType":"text"},
                            //{"name":"Flag","code":"","inputType":"select"},
                            {
                                "name": "Lock data entry forms after the related reports are created",
                                "code": "",
                                "inputType": "checkbox"
                            },
                            {
                                "name": "Lock data entry forms after the fiscal year end",
                                "code": "",
                                "inputType": "checkbox"
                            },
                            {
                                "name": "Number of month after end of financial year to lock data entry forms",
                                "code": "",
                                "inputType": "number"
                            }
                            // {"name":"Lock data entry forms after the fiscal year end","code":"","inputType":"select"},
                            //{"name":"Show Administrative unit hierarchy During Data Estimation","code":"","inputType":"checkbox"}
                            //{"name":"Customer top menu logo","code":"","inputType":"file"},
                            //{"name":"Set ARDS menu bar","code":"","inputType":"textarea","width":"500px","height":"300px"},
                        ]
                    },
                    //{
                    //    Email:[
                    //        {"name":"Host name","code":"","inputType":"text"},
                    //        {"name":"Port","code":"","inputType":"select"},
                    //        {"name":"Username","code":"","inputType":"text"},
                    //        {"name":"Password","code":"","inputType":"text"},
                    //        {"name":"TLS","code":"","inputType":"checkbox"},
                    //        {"name":"Email sender","code":"","inputType":"text"}
                    //    ]
                    //},
                    //{
                    //    Access:[
                    //        {"name":"Self registration account user role","code":"","inputType":"select"},
                    //        {"name":"Do not require recapture for self registration","code":"","inputType":"checkbox"},
                    //        {"name":"Self registration account Administrative unit","code":"","inputType":"select"},
                    //        {"name":"Enable user account recovery","code":"","inputType":"checkbox"},
                    //        {"name":"Allow users to grant own user roles","code":"","inputType":"checkbox"},
                    //        {"name":"Allow assigning object to related objects during add or update","code":"","inputType":"checkbox"},
                    //        {"name":"Require user account password change","code":"","inputType":"select"},
                    //        {"name":"OpenID provider","code":"","inputType":"text"},
                    //        {"name":"OpenID provider label","code":"","inputType":"text"},
                    //        {"name":"CORS whitelist","code":"","inputType":"text"}
                    //    ]
                    //},
                    //{
                    //    Approval:[
                    //        {"name":"Hide unapproved data in analytics","code":"","inputType":"checkbox"},
                    //        {"name":"Acceptance required before approval","code":"","inputType":"checkbox"},
                    //        {"name":"Approval levels","code":"","inputType":"tabs",
                    //          "tabs":[
                    //              {"name":"Approval levels","code":"aprove1","inputType":"tabs","start":"in active"},
                    //          ]
                    //        },
                    //
                    //    ]
                    //},
                    {

                        Calendar: [
                            {"name": "Calendar", "code": "", "inputType": "select"},
                            {"name": "Date format", "code": "", "inputType": "select"}
                        ]
                    }, {
                        DataImport: [
                            {
                                "name": "Require periods to match period type of Entry Form",
                                "code": "",
                                "inputType": "checkbox"
                            },
                            {
                                "name": "Require category option combos to match category combo of data element",
                                "code": "",
                                "inputType": "checkbox"
                            },
                            {
                                "name": "Require Administrative units to match assignment of Entry Form",
                                "code": "",
                                "inputType": "checkbox"
                            },
                            {
                                "name": "Require attribute option combos to match category combo of Entry Form",
                                "code": "",
                                "inputType": "checkbox"
                            },
                            {"name": "Require category option combo specified", "code": "", "inputType": "checkbox"},
                            {"name": "Require attribute option combo specified", "code": "", "inputType": "checkbox"}
                        ]
                    }, {
                        Synchronization: [
                            {"name": "Remote server URL", "code": "", "inputType": "text"},
                            {"name": "Remote server username", "code": "", "inputType": "text"},
                            {"name": "Remote server password", "code": "", "inputType": "text"},
                        ]
                    }

                ];
                return systemLeftMenu;
            },
            getSystemLayoutLeftMenu: function (keyValue) {
                var currentArrayAssociatedWithKey = null;
                var substringKeyValue = keyValue.substring("/".length);
                var systemLayoutArray = this.getGeneralSystemLayout();
                angular.forEach(systemLayoutArray, function (object, index) {
                    angular.forEach(object, function (val, key) {
                        if (substringKeyValue == key) {
                            currentArrayAssociatedWithKey = val;
                        }
                    });
                })
                return currentArrayAssociatedWithKey;
            },
            getOrganisationUnitsLevels: function () {
                var def = $q.defer();
                var organisationUnitsLevel = [];
                var promise = $http.get('../../../api/organisationUnitLevels.json?fields=id,level,displayName&paging=false&order=level:asc')
                    .then(function (response) {
                        angular.forEach(response.data.organisationUnitLevels, function (valueKey) {
                            organisationUnitsLevel.push({
                                "name": valueKey.displayName,
                                "value": valueKey.id,
                                "level": valueKey.level
                            });
                        });
                        return organisationUnitsLevel;
                    }, function () {
                        return organisationUnitsLevel;
                    });
                return promise;
            },
            getOrganisationUnits: function () {
                var def = $q.defer();
                var orgUnits = [];
                var promise = $http.get('../../../api/organisationUnits.json?filter=level:in:[1,2]&fields=id,displayName&paging=false')
                    .then(function (response) {
                        angular.forEach(response.data.organisationUnits, function (valueKey) {
                            orgUnits.push({"name": valueKey.displayName, "value": valueKey.id});
                        });
                        return orgUnits;
                    }, function () {
                        return orgUnits;
                    });
                return promise;
            },
            getSystemStyle: function () {
                var def = $q.defer();
                var styles = [];
                var promise = $http.get('../../../api/system/styles')
                    .then(function (response) {
                        angular.forEach(response.data, function (valueKey) {
                            styles.push({"name": valueKey.name, "value": valueKey.path});
                        });
                        return styles;
                    }, function () {
                        return styles;
                    });
                return promise;
            },
            getSystemStartPage: function () {
                var def = $q.defer();
                var startModules = [];
                var promise = $http.get('../../../dhis-web-commons/menu/getModules.action')
                    .then(function (response) {
                        var pageObject = {}

                        var ObjectPage =

                            angular.forEach(response.data.modules, function (valueKey) {
                                if (!valueKey.displayName) {
                                    pageObject = {"name": valueKey.name, "value": valueKey.namespace}
                                } else {
                                    pageObject = {"name": valueKey.displayName, "value": valueKey.namespace}
                                }
                                startModules.push(pageObject)
                            });
                        return startModules;
                    }, function () {
                        return startModules;
                    });
                return promise;
            },
            getSystemApps: function () {

                var def = $q.defer();
                var startApps = [];
                var hardCodedMemu = [];
                var startModules = '';
                var promise = $http.get('../../../api/apps?fields=name,folderName')
                    .then(function (response) {
                        hardCodedMemu.push({
                                "name": "Dashboard",
                                "value": "/dhis-web-dashboard-integration"
                            }, {"name": "Pivot Table", "value": "/dhis-web-pivot"},
                            {"name": "Data Visualizer", "value": "/dhis-web-visualizer"}, {
                                "name": "GIS",
                                "value": "/dhis-web-mapping"
                            }, {"name": "Data Administration", "value": "/dhis-web-maintenance-dataadmin"},
                            {"name": "Entry Forms", "value": "/dhis-web-maintenance-dataset"}, {
                                "name": "Import-Export",
                                "value": "/dhis-web-importexport"
                            }, {"name": "Administrative Units", "value": "/dhis-web-maintenance-organisationunit"},
                            {
                                "name": "Users",
                                "value": "/dhis-web-maintenance-user"
                            }, {"name": "Data Elements / Indicators", "value": "/dhis-web-maintenance"});
                        angular.forEach(response.data, function (valueKey) {
                            startApps.push({"name": valueKey.name, "value": valueKey.name});
                        });
                        startModules = hardCodedMemu.concat(startApps);
                        return startModules;
                    }, function () {
                        return startModules;
                    });
                return promise;
            },
            getSystemUserRole: function () {
                var def = $q.defer();
                var userRole = [];
                var promise = $http.get('../../../api/userRoles.json?fields=id,displayName&paging=false&order=displayName:asc')
                    .then(function (response) {
                        angular.forEach(response.data.userRoles, function (valueKey) {
                            userRole.push({"name": valueKey.displayName, "value": valueKey.id});
                        });
                        return userRole;
                    }, function () {
                        return userRole;
                    });
                return promise;
            },
            getDataElementGroup: function () {
                var dataElementGroup = [];
                var promise = $http.get('../../../api/dataElementGroups.json?fields=id,displayName&paging=false&order=displayName:asc')
                    .then(function (response) {
                        angular.forEach(response.data.dataElementGroups, function (valueKey) {
                            dataElementGroup.push({"name": valueKey.displayName, "value": valueKey.id})
                        });
                        return dataElementGroup;
                    }, function () {
                        return dataElementGroup;
                    });
                return promise;
            },
            getIndicatorGroup: function () {
                var indGroup = [];
                var promise = $http.get('../../../api/indicatorGroups.json?fields=id,displayName&paging=false&order=displayName:asc')
                    .then(function (response) {
                        angular.forEach(response.data.indicatorGroups, function (valueKey) {
                            indGroup.push({"name": valueKey.displayName, "value": valueKey.id})
                        });
                        return indGroup;
                    }, function () {
                        return indGroup;
                    });
                return promise;
            },
            getCurrentSystemSetting: function () {
                var promise = $http.get('../../../api/systemSettings')
                    .then(function (response) {
                        return response.data
                    }, function () {
                        return;
                    });
                return promise;
            },
            getCurrentConfigaration: function () {
                var promise = $http.get('../../../api/configuration.json')
                    .then(function (response) {
                        return response.data
                    }, function () {
                        return;
                    })
                return promise;
            },
            getcategoryOptions: function () {
                var promise = $http.get('../../../api/categoryOptionGroupSets.json?fields=:all&paging=false')
                    .then(function (response) {
                        return response.data
                    }, function () {
                        return;
                    })
                return promise;
            },
            getApprovalLevels: function () {
                var promise = $http.get('../../../api/dataApprovalLevels.json?fields=:all,categoryOptionGroupSet[id,displayName]&paging=false&order=level:asc,displayName:asc')
                    .then(function (response) {
                        return response.data
                    }, function () {
                        return;
                    })
                return promise;
            },
            getElementSWithOptionsForSelect: function (key, indGroup, dataGroup, orgLevel, systemSetting, configaration, styles, startModule, userRole, orgUnits, approvalLevel, optionLevl, apps) {
                var currentObjectSelect = [];
                var currentObject = this.getSystemLayoutLeftMenu(key);
                angular.forEach(currentObject, function (value) {
                    value['options'] = [];
                    if (value.name == 'Maximum number of analytics records') {
                        value['options'].push({"name": "Unlimited", "value": 0, "selected": false}, {
                            "name": "50000",
                            "value": 50000,
                            "selected": false
                        }, {"name": "100000", "value": 100000, "selected": false}, {
                            "name": 200000,
                            "value": 200000,
                            "selected": false
                        });
                        value.savingKey = "systemSettings/keyAnalyticsMaxLimit";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == systemSetting.keyAnalyticsMaxLimit) {
                                ops['selected'] = true;
                                ops.keyAnalyticsMaxLimit = ops.value;
                            } else {
                                ops.keyAnalyticsMaxLimit = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Infrastructure Computed values') {
                        value['options'] = indGroup;
                        value.savingKey = "configuration/infrastructuralIndicators";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == configaration.infrastructuralIndicators.id) {
                                ops.selected = true;
                                ops.infrastructuralIndicators = ops.value;
                            } else {
                                ops.selected = false;
                                ops.infrastructuralIndicators = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Infrastructural data elements') {
                        value['options'] = dataGroup;
                        value.savingKey = "configuration/infrastructuralDataElements";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == configaration.infrastructuralDataElements.id) {
                                ops.selected = true;
                                ops.infrastructuralDataElements = ops.value;
                            } else {
                                ops.selected = false;
                                ops.infrastructuralDataElements = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Infrastructural period type') {
                        value['options'].push({
                            "name": "Monthly",
                            "value": "Monthly",
                            "selected": false
                        }, {"name": "Quarterly", "value": "Quarterly", "selected": false}, {
                            "name": "Financial-July",
                            "value": "FinancialJuly",
                            "selected": false
                        });
                        value.savingKey = "configuration/infrastructuralPeriodType";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == configaration.infrastructuralPeriodType) {
                                ops['selected'] = true;
                                ops.infrastructuralPeriodType = ops.value;

                            } else {
                                ops.infrastructuralPeriodType = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Max offline Administrative unit levels') {
                        value['options'] = orgLevel;
                        value.savingKey = "configuration/offlineOrganisationUnitLevel";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == configaration.offlineOrganisationUnitLevel.id) {
                                ops.selected = true;
                                ops.offlineOrganisationUnitLevel = ops.value;
                            } else {
                                ops.selected = false;
                                ops.offlineOrganisationUnitLevel = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Data analysis std dev factor') {
                        value.value = systemSetting.factorDeviation;
                        value.factorDeviation = systemSetting.factorDeviation;
                        value.savingKey = "systemSettings/factorDeviation";
                    }
                    if (value.name == 'Phone number area code') {
                        value.value = systemSetting.phoneNumberAreaCode;
                        value.phoneNumberAreaCode = systemSetting.phoneNumberAreaCode;
                        value.savingKey = "systemSettings/phoneNumberAreaCode"
                    }
                    if (value.name == 'Enable multi-Administrative units forms') {
                        value.value = systemSetting.multiOrganisationUnitForms;
                        value.multiOrganisationUnitForms = systemSetting.multiOrganisationUnitForms;
                        value.savingKey = "systemSettings/multiOrganisationUnitForms";
                    }
                    if (value.name == 'Put analytics in maintenance mode') {
                        value.value = systemSetting.keyAnalyticsMaintenanceMode;
                        value.keyAnalyticsMaintenanceMode = systemSetting.keyAnalyticsMaintenanceMode;
                        value.savingKey = "systemSettings/keyAnalyticsMaintenanceMode";
                    }
                    if (value.name == 'Cache strategy') {
                        value['options'].push({"name": "No Cache", "value": "NO_CACHE", "selected": false}
                            , {"name": "Cache for One hour", "value": "CACHE_1_HOUR", "selected": false},
                            {"name": "Cache until 6 AM tomorrow", "value": "CACHE_6AM_TOMORROW", "selected": false},
                            {"name": "Cache for two weeks", "value": "CACHE_TWO_WEEKS", "selected": false});
                        value.savingKey = "systemSettings/keyCacheStrategy";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == systemSetting.keyCacheStrategy) {
                                ops['selected'] = true;
                                ops.keyCacheStrategy = ops.value;
                            } else {
                                ops.keyCacheStrategy = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Number of database server CPUs') {
                        value['options'].push({
                                "name": "Automatic (detect based on a web server)",
                                "value": "0",
                                "selected": false
                            }
                            , {"name": "1", "value": "1", "selected": false}
                            , {"name": "2", "value": "2", "selected": false},
                            {"name": "3", "value": "3", "selected": false},
                            {"name": "4", "value": "4", "selected": false},
                            {"name": "5", "value": "5", "selected": false},
                            {"name": "6", "value": "6", "selected": false},
                            {"name": "7", "value": "7", "selected": false},
                            {"name": "8", "value": "8", "selected": false},
                            {"name": "16", "value": "16", "selected": false},
                            {"name": "32", "value": "32", "selected": false});
                        value.savingKey = "systemSettings/keyDatabaseServerCpus";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == systemSetting.keyDatabaseServerCpus) {
                                ops['selected'] = true;
                                ops.keyDatabaseServerCpus = ops.value;
                            } else {
                                ops.keyDatabaseServerCpus = ops.value;
                            }
                        });
                    }
                    if (value.name == 'System notifications email address') {
                        value.value = systemSetting.keySystemNotificationsEmail;
                        value.keySystemNotificationsEmail = systemSetting.keySystemNotificationsEmail;
                        value.savingKey = "systemSettings/keySystemNotificationsEmail"
                    }
                    if (value.name == 'Server base URL') {
                        value.value = systemSetting.keyInstanceBaseUrl;
                        value.keyInstanceBaseUrl = systemSetting.keyInstanceBaseUrl;
                        value.savingKey = "systemSettings/keyInstanceBaseUrl"
                    }
                    if (value.name == 'Google Analytics (Universal Analytics) key') {
                        value.value = systemSetting.googleAnalyticsUA;
                        value.googleAnalyticsUA = systemSetting.googleAnalyticsUA;
                        value.savingKey = "systemSettings/googleAnalyticsUA"
                    }
                    if (value.name == 'Application title') {
                        value.value = systemSetting.applicationTitle;
                        value.applicationTitle = systemSetting.applicationTitle;
                        value.savingKey = "systemSettings/applicationTitle"
                    }
                    if (value.name == 'Infrastructure Computed values') {
                        value.value = systemSetting.keyApplicationIntro;
                        value.keyApplicationIntro = systemSetting.keyApplicationIntro;
                        value.savingKey = "systemSettings/keyApplicationIntro"
                    }
                    if (value.name == 'Application notification') {
                        value.value = systemSetting.keyApplicationNotification;
                        value.keyApplicationNotification = systemSetting.keyApplicationNotification;
                        value.savingKey = "systemSettings/keyApplicationNotification"
                    }
                    if (value.name == 'Application left-side footer') {
                        value.value = systemSetting.keyApplicationFooter;
                        value.keyApplicationFooter = systemSetting.keyApplicationFooter;
                        value.savingKey = "systemSettings/keyApplicationFooter"
                    }
                    if (value.name == 'Application right-side footer') {
                        value.value = systemSetting.keyApplicationRightFooter;
                        value.keyApplicationRightFooter = systemSetting.keyApplicationRightFooter;
                        value.savingKey = "systemSettings/keyApplicationRightFooter"
                    }
                    if (value.name == 'Style') {
                        value['options'] = styles;
                        value.savingKey = "systemSettings/keyCurrentStyle";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == systemSetting.keyCurrentStyle) {
                                ops.selected = true;
                                ops.keyCurrentStyle = ops.value;
                            } else {
                                ops.selected = false;
                                ops.keyCurrentStyle = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Start page') {

                        value['optionsSet'] = apps;
                        value['options'] = [];
                        value.savingKey = "systemSettings/startModule";
                        angular.forEach(value.optionsSet, function (ops) {
                            angular.forEach(startModule, function (pages) {
                                if (pages.name == ops.name) {
                                    value['options'].push(pages);
                                    //console.info(pages.name +" "+ops.name)
                                    //console.warn(systemSetting.startModule)
                                }
                            });
                        });
                        console.warn(value['options']);
                        angular.forEach(value.options, function (opt) {
                            if (opt.value == systemSetting.startModule) {
                                opt.selected = true;
                                opt.startModule = opt.value;
                            } else {
                                opt.selected = false;
                                opt.startModule = opt.value;
                            }
                        })


                    }
                    if (value.name == 'Help page link') {
                        value.value = systemSetting.helpPageLink;
                        value.helpPageLink = systemSetting.helpPageLink;
                        value.savingKey = "systemSettings/helpPageLink"
                    }
                    if (value.name == 'Flag') {
                        value['options'].push({"name": "Tanzania", "value": "tanzania", "selected": false}
                            , {"name": "Zanzibar", "value": "zanzibar", "selected": false});
                        value.savingKey = "systemSettings/keyFlag";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == systemSetting.keyFlag) {
                                ops.selected = true;
                                ops.keyFlag = ops.value;
                            } else {
                                ops.selected = false;
                                ops.keyFlag = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Require authority to add to view object lists') {
                        value.value = systemSetting.keyRequireAddToView;
                        value.keyRequireAddToView = systemSetting.keyRequireAddToView;
                        value.savingKey = "systemSettings/keyRequireAddToView"
                    }
                    if (value.name == 'Show Administrative unit hierarchy During Data Estimation') {
                        value.value = systemSetting.keyRequireShowAdministrativeHierarchyDataEstimation;
                        value.keyRequireShowAdministrativeHierarchyDataEstimation = systemSetting.keyRequireShowAdministrativeHierarchyDataEstimation;
                        value.savingKey = "systemSettings/keyRequireShowAdministrativeHierarchyDataEstimation";
                    }
                    if (value.name == "Differential forms with multiple sub-units from the rest in form selection(show 'Sub administration units' text)") {
                        value.value = systemSetting.keyRequireShowAdministrativeUnitSelection;
                        value.keyRequireShowAdministrativeUnitSelection = systemSetting.keyRequireShowAdministrativeUnitSelection;
                        value.savingKey = "systemSettings/keyRequireShowAdministrativeUnitSelection";
                    }
                    if (value.name == "Lock data entry forms after the related reports are created") {
                        value.value = systemSetting.shouldLockEntryFormBasedOnReportCreation;
                        value.shouldLockEntryFormBasedOnReportCreation = systemSetting.shouldLockEntryFormBasedOnReportCreation;
                        value.savingKey = "systemSettings/shouldLockEntryFormBasedOnReportCreation";
                    }
                    if (value.name == "Lock data entry forms after the fiscal year end") {
                        value.value = systemSetting.shouldLockEntryFormBasedEndOfFinancialYear;
                        value.shouldLockEntryFormBasedEndOfFinancialYear = systemSetting.shouldLockEntryFormBasedEndOfFinancialYear;
                        value.savingKey = "systemSettings/shouldLockEntryFormBasedEndOfFinancialYear";
                    }
                    if (value.name == "Number of month after end of financial year to lock data entry forms") {
                        value.value = systemSetting.numberOfMonthAfterEndOfFinancialYearToLockEntryForm;
                        value.numberOfMonthAfterEndOfFinancialYearToLockEntryForm = systemSetting.numberOfMonthAfterEndOfFinancialYearToLockEntryForm;
                        value.savingKey = "systemSettings/numberOfMonthAfterEndOfFinancialYearToLockEntryForm";
                    }
                    if (value.name == 'Set ARDS menu bar') {
                        value.value = systemSetting.keyObjectMenuBar;
                        value.keyObjectMenuBar = systemSetting.keyObjectMenuBar;
                        value.savingKey = "systemSettings/keyObjectMenuBar";


                    }
                    if (value.name == 'Host name') {
                        value.value = systemSetting.keyEmailHostName;
                        value.keyEmailHostName = systemSetting.keyEmailHostName;
                        value.savingKey = "systemSettings/keyEmailHostName"
                    }
                    if (value.name == 'Port') {
                        value['options'].push({"name": "587", "value": "587", "selected": false}
                            , {"name": "465", "value": "465", "selected": false}
                            , {"name": "25", "value": "25", "selected": false});
                        value.savingKey = "systemSettings/keyEmailPort";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == systemSetting.keyEmailPort) {
                                ops.selected = true;
                                ops.keyEmailPort = ops.value;
                            } else {
                                ops.selected = false;
                                ops.keyEmailPort = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Type of Financial Year for Data Entry') {
                        value['options'].push({"name": "FinancialApril", "value": "April", "selected": false}
                            , {"name": "FinancialJuly", "value": "July", "selected": false}
                            , {"name": "FinancialOctober", "value": "October", "selected": false},
                            {"name": "Calender Year", "value": "Yearly", "selected": false});
                        value.savingKey = "systemSettings/financialYearType";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == systemSetting.financialYearType) {
                                ops.selected = true;
                                ops.financialYearType = ops.value;
                            } else {
                                ops.selected = false;
                                ops.financialYearType = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Look up Table Sorting Order') {
                        value['options'].push({"name": "Ascending", "value": "asc", "selected": false}
                            , {"name": "Descending", "value": "desc", "selected": false});
                        value.savingKey = "systemSettings/lookUpTableSorting";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == systemSetting.lookUpTableSorting) {
                                ops.selected = true;
                                ops.lookUpTableSorting = ops.value;
                            } else {
                                ops.selected = false;
                                ops.lookUpTableSorting = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Data entry form filter variable') {
                        value.value = systemSetting.dataEntryFilterVariable;
                        value.dataEntryFilterVariable = systemSetting.dataEntryFilterVariable;
                        value.savingKey = "systemSettings/dataEntryFilterVariable"
                    }
                    if (value.name == 'Username') {
                        value.value = systemSetting.keyEmailUsername;
                        value.keyEmailUsername = systemSetting.keyEmailUsername;
                        value.savingKey = "systemSettings/keyEmailUsername"
                    }
                    if (value.name == 'Password') {
                        value.value = systemSetting.keyEmailPassword;
                        value.keyEmailPassword = systemSetting.keyEmailPassword;
                        value.savingKey = "systemSettings/keyEmailPassword"
                    }
                    if (value.name == 'TLS') {
                        value.value = systemSetting.keyEmailTls;
                        value.keyEmailTls = systemSetting.keyEmailTls;
                        value.savingKey = "systemSettings/keyEmailTls"
                    }
                    if (value.name == 'Email sender') {
                        value.value = systemSetting.keyEmailSender;
                        value.keyEmailSender = systemSetting.keyEmailTls;
                        value.savingKey = "systemSettings/keyEmailSender"
                    }
                    if (value.name == 'Self registration account user role') {
                        value['options'] = userRole;
                        value.savingKey = "configuration/selfRegistrationRole";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == configaration.selfRegistrationRole.id) {
                                ops.selected = true;
                                ops.selfRegistrationRole = ops.value;
                            } else {
                                ops.selected = false;
                                ops.selfRegistrationRole = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Do not require recapture for self registration') {
                        value.value = systemSetting.keySelfRegistrationNoRecaptcha;
                        value.keySelfRegistrationNoRecaptcha = systemSetting.keySelfRegistrationNoRecaptcha;
                        value.savingKey = "systemSettings/keySelfRegistrationNoRecaptcha"
                    }
                    if (value.name == 'Self registration account Administrative unit') {
                        value['options'] = orgUnits;
                        value.savingKey = "configuration/selfRegistrationOrgUnit";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == configaration.selfRegistrationOrgUnit.id) {
                                ops.selected = true;
                                ops.selfRegistrationOrgUnit = ops.value;
                            } else {
                                ops.selected = false;
                                ops.selfRegistrationOrgUnit = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Enable user account recovery') {
                        value.value = systemSetting.keyAccountRecovery;
                        value.keyAccountRecovery = systemSetting.keyAccountRecovery;
                        value.savingKey = "systemSettings/keyAccountRecovery"
                    }
                    if (value.name == 'Allow users to grant own user roles') {
                        value.value = systemSetting.keyCanGrantOwnUserAuthorityGroups;
                        value.keyCanGrantOwnUserAuthorityGroups = systemSetting.keyCanGrantOwnUserAuthorityGroups;
                        value.savingKey = "systemSettings/keyCanGrantOwnUserAuthorityGroups"
                    }
                    if (value.name == 'Allow assigning object to related objects during add or update') {
                        value.value = systemSetting.keyAllowObjectAssignment;
                        value.keyAllowObjectAssignment = systemSetting.keyAllowObjectAssignment;
                        value.savingKey = "systemSettings/keyAllowObjectAssignment"
                    }
                    if (value.name == 'Require user account password change') {
                        value['options'].push({"name": "Never", "value": "0", "selected": false}
                            , {"name": "3 Month", "value": "3", "selected": false}
                            , {"name": "6 Month", "value": "6", "selected": false}
                            , {"name": "12 Month", "value": "12", "selected": false});
                        value.savingKey = "systemSettings/credentialsExpires";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == systemSetting.credentialsExpires) {
                                ops.selected = true;
                                ops.credentialsExpires = ops.value;
                            } else {
                                ops.selected = false;
                                ops.credentialsExpires = ops.value;
                            }
                        });
                    }
                    if (value.name == 'OpenID provider') {
                        value.value = systemSetting.keyOpenIdProvider;
                        value.keyOpenIdProvider = systemSetting.keyOpenIdProvider;
                        value.savingKey = "systemSettings/keyOpenIdProvider"
                    }
                    if (value.name == 'OpenID provider label') {
                        value.value = systemSetting.keyOpenIdProviderLabel;
                        value.keyOpenIdProviderLabel = systemSetting.keyOpenIdProviderLabel;
                        value.savingKey = "systemSettings/keyOpenIdProviderLabel"
                    }
                    if (value.name == 'Hide unapproved data in analytics') {
                        value.value = systemSetting.keyHideUnapprovedDataInAnalytics;
                        value.keyHideUnapprovedDataInAnalytics = systemSetting.keyHideUnapprovedDataInAnalytics;
                        value.savingKey = "systemSettings/keyHideUnapprovedDataInAnalytics"
                    }
                    if (value.name == 'Acceptance required before approval') {
                        value.value = systemSetting.keyAcceptanceRequiredForApproval;
                        value.keyAcceptanceRequiredForApproval = systemSetting.keyAcceptanceRequiredForApproval;
                        value.savingKey = "systemSettings/keyAcceptanceRequiredForApproval"
                    }
                    if (value.name == 'Calendar') {
                        value['options'].push({"name": "Coptic", "value": "coptic", "selected": false}
                            , {"name": "Ethiopian", "value": "ethiopian", "selected": false}
                            , {"name": "Gregorian", "value": "gregorian", "selected": false}
                            , {"name": "Islamic", "value": "islamic", "selected": false}
                            , {"name": "ISO 8601", "value": "iso8601", "selected": false}
                            , {"name": "Julian", "value": "julian", "selected": false}
                            , {"name": "Nepali", "value": "nepali", "selected": false}
                            , {"name": "Thai", "value": "thai", "selected": false}
                        );
                        value.savingKey = "systemSettings/keyCalendar";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == systemSetting.keyCalendar) {
                                ops.selected = true;
                                ops.keyCalendar = ops.value;
                            } else {
                                ops.selected = false;
                                ops.keyCalendar = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Date format') {
                        value['options'].push({"name": "1981-03-31", "value": "yyyy-MM-dd", "selected": false}
                            , {"name": "03-31-1981", "value": "dd-MM-yyyy", "selected": false});
                        value.savingKey = "systemSettings/keyDateFormat";
                        angular.forEach(value.options, function (ops) {
                            if (ops.value == systemSetting.keyDateFormat) {
                                ops.selected = true;
                                ops.keyDateFormat = ops.value;
                            } else {
                                ops.selected = false;
                                ops.keyDateFormat = ops.value;
                            }
                        });
                    }
                    if (value.name == 'Require periods to match period type of Entry Form') {
                        value.value = systemSetting.keyDataImportStrictPeriods;
                        value.keyDataImportStrictPeriods = systemSetting.keyDataImportStrictPeriods;
                        value.savingKey = "systemSettings/keyDataImportStrictPeriods"
                    }
                    if (value.name == 'Require category option combos to match category combo of data element') {
                        value.value = systemSetting.keyDataImportStrictCategoryOptionCombos;
                        value.keyDataImportStrictCategoryOptionCombos = systemSetting.keyDataImportStrictCategoryOptionCombos;
                        value.savingKey = "systemSettings/keyDataImportStrictCategoryOptionCombos"
                    }
                    if (value.name == 'Require Administrative units to match assignment of Entry Form') {
                        value.value = systemSetting.keyDataImportStrictOrganisationUnits;
                        value.keyDataImportStrictOrganisationUnits = systemSetting.keyDataImportStrictOrganisationUnits;
                        value.savingKey = "systemSettings/keyDataImportStrictOrganisationUnits"
                    }
                    if (value.name == 'Require attribute option combos to match category combo of Entry Form') {
                        value.value = systemSetting.keyDataImportStrictAttributeOptionCombos;
                        value.keyDataImportStrictAttributeOptionCombos = systemSetting.keyDataImportStrictAttributeOptionCombos;
                        value.savingKey = "systemSettings/keyDataImportStrictAttributeOptionCombos"
                    }
                    if (value.name == 'Require category option combo specified') {
                        value.value = systemSetting.keyDataImportRequireCategoryOptionCombo;
                        value.keyDataImportRequireCategoryOptionCombo = systemSetting.keyDataImportRequireCategoryOptionCombo;
                        value.savingKey = "systemSettings/keyDataImportRequireCategoryOptionCombo"
                    }
                    if (value.name == 'Require attribute option combo specified') {
                        value.value = systemSetting.keyDataImportRequireAttributeOptionCombo;
                        value.keyDataImportRequireAttributeOptionCombo = systemSetting.keyDataImportRequireAttributeOptionCombo;
                        value.savingKey = "systemSettings/keyDataImportRequireAttributeOptionCombo"
                    }
                    if (value.name == 'Remote server URL') {
                        value.value = systemSetting.keyRemoteInstanceUrl;
                        value.keyRemoteInstanceUrl = systemSetting.keyRemoteInstanceUrl;
                        value.savingKey = "systemSettings/keyRemoteInstanceUrl"
                    }
                    if (value.name == 'Remote server username') {
                        value.value = systemSetting.keyRemoteInstanceUsername;
                        value.keyRemoteInstanceUsername = systemSetting.keyRemoteInstanceUsername;
                        value.savingKey = "systemSettings/keyRemoteInstanceUsername"
                    }
                    if (value.name == 'Remote server password') {
                        value.value = systemSetting.keyRemoteInstancePassword;
                        value.keyRemoteInstancePassword = systemSetting.keyRemoteInstancePassword;
                        value.savingKey = "systemSettings/keyRemoteInstancePassword"
                    }
                    if (value.name == 'Approval levels') {
                        value.level = orgLevel;
                        value.optionComb = optionLevl.categoryOptionGroupSets;
                        angular.forEach(value.tabs, function (ops) {
                            ops.aprovalLevels = approvalLevel.dataApprovalLevels;
                        });
                    }
                    currentObjectSelect.push(value);
                });
                return currentObjectSelect;

            }

        }
    });

