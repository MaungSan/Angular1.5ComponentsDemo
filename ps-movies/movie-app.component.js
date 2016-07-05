(function() {
    "use strict";
    
    var module = angular.module("psMovies");
    
    module.component("movieApp", {
        templateUrl: "/ps-movies/movie-app.component.html",
        $routeConfig: [
            { path: "/list", component:"movieList", name: "List" },
            { path: "/about", component: "about", name: "About" },
            { path: "/contact", component: "contact", name: "Contact-Us" },
            { path: "/details/:id/...", component: "movieDetails", name:"Details"},
            { path: "/**", redirectTo: ["List", ""] }
        ]                   
    });
    
    module.component("about", {
       template: "About us ..." 
    });
	module.component("contact", {
       template: "Contact Us ..." 
    });
}());