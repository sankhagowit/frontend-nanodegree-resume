/*
ABSTRACTION OF HELPER FUNCTIONS
*/

function formatInput(formatFunc, input) {
  // function which takes the format function from helper.js ex (HTMLheaderName)
  // and the desired string input from the input object
  // and uses replace method returning the desired formatted input HTML
  // use output of function with the addInput function to append to HTML
  var formattedInput = formatFunc.replace("%data%",input);
  return formattedInput;
}

function addInput(desiredClassString, concatInput) {
  //function takes the ID or class you'd like to add the formatted
  // concatInput to with the append method where the %data% tag is
  // make sure to include :last if you're appending to a class in the
  // desiredClassString argument
  $(desiredClassString).append(concatInput);
}

/*
OBJECTS FOLLOWING DATA SCHEMA
*/

var bio = {
  name: "Bobby Sankhagowit",
  role: "Technical Problem Solver",
  contacts: {
    email: "bobby@sankhagowit.com",
    mobile: "512-555-5555",
    github: "sankhagowit",
    twitter: "@bobsank",
    location: "Houston, TX"
  },
  biopic: "images/me.png",
  welcomeMessage: "Hello! Welcome to my resume! <- summary here?",
  skills: [
    "Awesomeness",
    "Statistics, Statistical Learning",
    "HTML & CSS",
    "R & MATLAB",
    "Financial Forecasting",
    "Business Planning"
  ]
};

var work = {
  jobs: [
    {
      employer: "ExxonMobil",
      dates: "May 2016- March 2017",
      description: "Coordinated planning for implementation of $290 million project for refining and chemicals organizations. Led development of business and staffing plan for team increasing from 9 to 50 engineers",
      location: "Houston, TX",
      title: "Business Model Redesign Analyst",
    },
    {
      employer: "ExxonMobil",
      dates: "February 2015 - May 2016",
      description: "Directed drilling and completion rigs during 6 month campaign (47 wells, $261 million). Delivered technical assessment of 50 well targets within one month for strategic partner vote. Evaluated decision quality of 2014 and 2015 drilling strategy for senior management",
      location: "Houston, TX",
      title: "Reservoir Engineer, West Africa Operations Technical"
    },
    {
      employer: "ExxonMobil",
      dates: "September 2013 - February 2015",
      description: "Advised lead country manager on capital allocation ($1 billion/year) and business strategy. Reconciled monthly financial & operating performance (97 kBD, 462 MMCFD) for senior management. Led 5 engineers in technical evaluation of 1.2 billion barrels proved reserves for SEC SMOG reporting",
      location: "Houston, TX",
      title: "Planning Advisor, United States Production Company"
    },
    {
      employer: "ExxonMobil",
      dates: "August 2011- September 2013",
      description: "Influenced operators and engineers to execute initiatives increasing production from offshore platforms. Formulated subsurface strategy aligning separate functions on project priorities over the next year. Presented economic evaluation securing $80 million capital investment for 2 large projects. Obtained $2.2 million for small projects that paid out within 6 months",
      location: "Houston, TX",
      title: "Reservoir Engineer, California Operations Technical"
    }
  ]
};

var education = {
  schools: [
    {
      name: "Stanford University",
      dates: "2013 - 2015",
      degree: "MS",
      major: ["Management Science and Engineering"],
      location: "Palo Alto, CA",
      url: "https://msande.stanford.edu/"
    },
    {
      name: "University of Texas at Austin",
      dates: "2007 - 2011",
      degree: "BS",
      major: ["Chemical Engineering"],
      location: "Austin",
      url: "http://che.utexas.edu/"
    }
  ],
  onlineCourses: [
    {
      title: "Front End Web Development Nanodegree",
      school: "Udacity",
      dates: "2017",
      url: "url here"
    }
  ]
};

var projects = {
  projects: [
    {
      title: "project1",
      dates: "February 2017",
      description: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at nesciunt, magni ipsum? Pariatur soluta neque a aut facere, laudantium doloribus fugiat temporibus explicabo molestias",
      images: ["images/htmlcode-382_small_1x.png"]
    },
    {
      title: "project2",
      dates: "February 2017",
      description: "nostrum odit itaque quaerat quibusdam necessitatibus sapiente animi! Rem cum tempora reiciendis, eius asperiores magnam.",
      images: ["images/python-382_small_1x.png"]
    }
  ]
};

/*
ENCAPSULATION OF DISPLAY FUNCTIONS
*/

$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  $("#skills").append(HTMLskills.replace("%data%",bio.skills));
}

projects.display = function() {
  for (var proj =0; proj < projects.projects.length; proj++) {
    $("#projects").append(HTMLprojectStart);
    addInput(".project-entry:last",formatInput(HTMLprojectTitle,projects.projects[proj].title));
    addInput(".project-entry:last",formatInput(HTMLprojectDates,projects.projects[proj].dates));
    addInput(".project-entry:last",formatInput(HTMLprojectDescription,projects.projects[proj].description));
    addInput(".project-entry:last",formatInput(HTMLprojectImage,projects.projects[proj].images));
  }
};

// function displayWork() {
//   for (var job in work.jobs){
//     var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
//     var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
//     $(".work-entry:last").append(formattedEmployer+formattedTitle);
//     var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
//     var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
//     $(".work-entry:last").append(formattedDates+formattedLocation);
//     $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
//   }
// }

work.display = function() {
  for (var job = 0; job < work.jobs.length; job++) {
    $("#workExperience").append(HTMLworkStart); //function requires the desired text to input
    var formattedEmployer = formatInput(HTMLworkEmployer,work.jobs[job].employer);
    var formattedTitle = formatInput(HTMLworkTitle,work.jobs[job].title);
    addInput(".work-entry:last",formattedEmployer+formattedTitle);
    var formattedDates = formatInput(HTMLworkDates,work.jobs[job].dates);
    var formattedLocation = formatInput(HTMLworkLocation,work.jobs[job].location);
    addInput(".work-entry:last",formattedDates+formattedLocation);
    addInput(".work-entry:last",formatInput(HTMLprojectDescription,work.jobs[job].description));
  }
};

/*
INVOKING DISPLAY FUNCTIONS
*/
// displayWork();
work.display();
projects.display();


/*
OTHER FUNCTIONS
*/

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function locationizer(work_obj) {
  var locations = [];
  for(i=0;i<work_obj.jobs.length;i++){
    locations.push(work_obj.jobs[i].location);
  }
  return locations;
}

$("#mapDiv").append(googleMap);

// $("#main").append(internationalizeButton);
// function inName() {
//   var finalName = bio.name;
//   var names = bio.name.split(" ");
//   names[1] = names[1].toUpperCase();
//   names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//   bio.name = names.join(" ");
//   return bio.name;
// }
var awesomeThoughts = "I am Bobby and I am AWESOME";
console.log(awesomeThoughts);
