/* global angular */

'use strict';

/* Controllers */
var systemSettingControllers = angular.module('systemSettingControllers', [])

//Controller for settings page
.controller('MainController', function($scope,$http, storage, $timeout,$window, ModalService,systemLayout,$location,$q) {
        $scope.systemSettingMenu=systemLayout.getGeneralSystemLayout();

        $scope.showCurrentTriggeredMenu=function(key){
            $scope.loadStatus=true;
            console.log(key);
            $scope.loading="Loading please wait....";
           var promises={indGroup:systemLayout.getIndicatorGroup(),
                      dataGroup:systemLayout.getDataElementGroup(),
                      orgLevel:systemLayout.getOrganisationUnitsLevels(),
                      currentSetting:systemLayout.getCurrentSystemSetting(),
                      currentConfig:systemLayout.getCurrentConfigaration(),
                      style:systemLayout.getSystemStyle(),
                      startPage:systemLayout.getSystemStartPage(),
                      userRole:systemLayout.getSystemUserRole(),
                      orgUnits:systemLayout.getOrganisationUnits(),
                      approvalLevel:systemLayout.getApprovalLevels(),
                      optionCombo:systemLayout.getcategoryOptions(),
                      apps:systemLayout.getSystemApps()
                      }
            $timeout(function(){
            $q.all(promises).then(function(data){
            $scope.foundAssociation=systemLayout.getElementSWithOptionsForSelect(key,data.indGroup,data.dataGroup,data.orgLevel,
                 data.currentSetting,data.currentConfig,data.style,data.startPage,data.userRole,data.orgUnits,data.approvalLevel,data.optionCombo,data.apps);
               console.log($scope.foundAssociation);
            });
        $location.path(key);
        $scope.heading=key.substring('/'.length)+" Settings";
             $scope.loadStatus=false;
            },2000)

        }
        $scope.showCurrentTriggeredMenu('/General');
}).controller('GeneralController', function($scope,$http, storage, $timeout,$window, ModalService,systemLayout,$location,$interval) {
        $scope.selectedContent=[];
        $http.defaults.headers.post["Content-Type"] = "text/plain";
        $scope.saveSetting=function(keyNum,SaveKey){
            $scope.saveKey=$scope.selectedContent[keyNum];
            $http({
                method:'POST',
                url:'../../../api/'+SaveKey,
                data:$scope.saveKey
            }).then(function(data){
                if(data.data.httpStatus=="OK"){
                    setHeaderDelayMessage( "System Setting Updated" );
                }else{
                    setHeaderDelayMessage( "System Configuration Updated" );
                }
            },function(error){
                setHeaderDelayMessage("Error: "+error.data.message);
            });
        }
        $scope.saveText=function(keyNum,SaveKey){
            $scope.saveKey=$scope.selectedContent[keyNum];
            var postType='POST';
            if($scope.saveKey==null||$scope.saveKey==undefined ||$scope.saveKey==''){

                postType='DELETE'
            }
            $http({
                method:postType,
                url:'../../../api/'+SaveKey,
                data:$scope.saveKey
             }).then(function(data){
                if(data.data.httpStatus=="OK"){
                    setHeaderDelayMessage( "System Setting Updated" );
                }else{
                    setHeaderDelayMessage( "System Configuration Updated" );
                }

            },function(error){
                setHeaderDelayMessage("Error: "+error.data.message);
            });
        }
        $scope.saveTextArea=function(keyNum,SaveKey){
            $scope.saveKey=$scope.selectedContent[keyNum];
            var postType='POST';
            if($scope.saveKey==null||$scope.saveKey==undefined ||$scope.saveKey==''){

                postType='DELETE'
            }
            $http({
                method:postType,
                url:'../../../api/'+SaveKey,
                data:$scope.saveKey
             }).then(function(data){
                if(data.data.httpStatus=="OK"){
                    setHeaderDelayMessage( "System Setting Updated" );
                }else{
                    setHeaderDelayMessage( "System Configuration Updated" );
                }

            },function(error){
                setHeaderDelayMessage("Error: "+error.data.message);
            });
        }
        $scope.saveCheckBox=function(keyNum,SaveKey){
            $scope.saveKey=$scope.selectedContent[keyNum];
              $http({
                method:'POST',
                url:'../../../api/'+SaveKey+'?value='+$scope.saveKey,
                data:$scope.saveKey
            }).then(function(data){
                if(data.data.httpStatus=="OK"){
                    setHeaderDelayMessage( "System Setting Updated" );
                }else{
                    setHeaderDelayMessage( "System Configuration Updated" );
                }
            },function(error){
                setHeaderDelayMessage("Error: "+error.data.message);
            });
        }
        $scope.showForm=function(variable) {
            $scope.linkValue = variable;
        }
        $scope.hideForm=function(variable){
            $scope.linkValue=variable;
        }
        $scope.selectedItem='';
        $scope.selectedOptions='';
        $scope.sendApprovalLevel=function(approvalLevel,categoryOption){
            $http.defaults.headers.post["Content-Type"] = "application/json";
            $http({
                method:'POST',
                url:'../../../api/dataApprovalLevels',
                data:{name:approvalLevel.name,orgUnitLevel:approvalLevel.level}
            }).then(function(data){
                if(data.data.httpStatus=="OK"){
                    setHeaderDelayMessage( "System Setting Updated" );
                }else{
                    setHeaderDelayMessage( "System Configuration Updated" );
                }
                $scope.linkValue='approvalHide';
                $location.reload();
             },function(error){
                setHeaderDelayMessage("Error: "+error.data.message);
            });
        }
        $scope.menuOptions = [
            ['<i class="fa fa-trash">&nbsp;&nbsp;Remove</i>', function ($itemScope) {
                $http({
                    method:'DELETE',
                    url:'../../../api/dataApprovalLevels/'+$itemScope.level.id
                 }).then(function(data){
                    if(data.data.httpStatus=="OK"){

                      setHeaderDelayMessage( "System Setting Updated" );

                    }else{
                        setHeaderDelayMessage( "System Configuration Updated" );
                    }
                    $location.reload();
                 },function(error){
                    setHeaderDelayMessage("Error:Failed to remove ");
                });
                 console.log($itemScope.level.id);
            }]
        ]
});