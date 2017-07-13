/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('eventApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/calendar", {templateUrl: "partials/calendar.html", controller: "ScheduleCtrl"})
    // .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    // .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    // .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    // .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ( $window, $scope ) {
  $scope.nightLevel = '1';
  $window.addEventListener('scroll', function() {
    var scrollAspect = $window.scrollY * 4;
      $scope.nightLevel = $window.innerHeight > scrollAspect ? (1 - scrollAspect / $window.innerHeight) : 0;
      $scope.$apply(function(){
          $scope.nightLevel = $scope.nightLevel + '';
      });
      
      
  });
  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

app.controller('ScheduleCtrl', function ( $window, $scope ) {
  

  //responsiveTable ('table');
  //responsiveTable ('.table-class');
  responsiveTable('#table-id');


  balanceSize();  // on load get balance on size if the browser has small screen
  

// get responsive table for small screens 

/*  the concept for that tool
* if the screen width lt 1000 the table hide the table ,
* and for each td in table row append two bootstrap div col-xs-6 one for td and the other for the opposite th 
*
* Now You have the concept so you can develop your own code :) and control on xs divs view
*/
  function responsiveTable (table){

      var RowNum = 0;                   // to append row number before each data

      $(table+' tr:gt(0)').each(function(){       // select all table rows except table header row

        // append the header for row number to the small table 
        $('.table-xs').append('<div class="row-header"> <h5> Session '+RowNum+'</h5> </div>');

        $(this).find('td').each(function(){   // select all table data 

          // for each td get it's equivalent header and append header text to the small table header div
          $('.table-xs').append('<div class="col-xs-6 header">'+$('th').eq($(this).index()).text()+'</div>');
        
          // for each td get it's text and append it to the small table data div
          $('.table-xs').append('<div class="col-xs-6 data">'+$(this).text()+'</div>');
      
        });
        
        RowNum++;
      
      });

    }

    balanceSize();

  // IMPORTANT on resize fun will be excessive load on your processor if you have many rows 

  $(window).resize(function(){      
    if ($(window).width() < 1000 ){
      balanceSize(); // balance the size on resize 
    }
  });


  
    // balance size will make all headers height equal data height !!! Just to fill the BG color ><

  function balanceSize(){
    var i = 0 ;   
    $('.header').each(function(){

      $(this).height($('.data').eq(i).height());

      i++;
    });
  }


});


/*
* Developed By Yasser Mas 
*/
