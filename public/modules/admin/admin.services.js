/**
 * Created by Raphson on 2/25/16.
 */
angular.module('blogger.admin.service', []).
    factory('adminService', ['$http', function($http){
        return {
            addPost : function(post, cb){
                $http.post('/api/posts/create', post).then(function(response){
                    if(response.data.success){
                        cb(true, response.data);
                    }
                    else{
                        cb(false, response.data);
                    }
                });
            }
        }

    }]);
