/*
ABSTRACTION OF HELPER FUNCTIONS
*/
function formatInput(formatFunc, input) {
    // function which takes the format function from helper.js ex (HTMLheaderName)
    // and the desired string input from the input object
    // and uses replace method returning the desired formatted input HTML
    // use output of function with the addInput function to append to HTML
    var formattedInput = formatFunc.replace("%data%", input);
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
    welcomeMessage: "Hello! Welcome to my online resume! Having a technical challenge that is data intensive? I can help!",
    skills: [
        "Financial Forecasting",
        "Business Planning, Financial Accounting",
        "Production Operations",
        "Statistical Learning",
        "JavaScript, HTML & CSS",
        "R & MATLAB"
    ]
};

var work = {
    jobs: [{
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
            location: "Kome, Chad",
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
            location: "Santa Barbara, CA",
            title: "Reservoir Engineer, California Operations Technical"
        }
    ]
};

var education = {
    schools: [{
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
    onlineCourses: [{
        title: "Front End Web Development Nanodegree",
        school: "Udacity",
        dates: "2017",
        url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var projects = {
    projects: [{
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

// if (bio.skills.length > 0){
//   $("#header").append(HTMLskillsStart);
//   $("#skills").append(HTMLskills.replace("%data%",bio.skills));
//   //now we need to get the contact info in here somehow... reread that section
//
// }

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    for (contact in bio.contacts) {
        var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
        formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);
        $("#topContacts").append(formattedContact);
    }
    addInput("#header", formatInput(HTMLbioPic, bio.biopic));
    addInput("#header", formatInput(HTMLwelcomeMsg, bio.welcomeMessage));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            addInput("#skills", formatInput(HTMLskills, bio.skills[i]));
        }
    }
}

projects.display = function() {
    for (var proj = 0; proj < projects.projects.length; proj++) {
        $("#projects").append(HTMLprojectStart);
        addInput(".project-entry:last", formatInput(HTMLprojectTitle, projects.projects[proj].title));
        addInput(".project-entry:last", formatInput(HTMLprojectDates, projects.projects[proj].dates));
        addInput(".project-entry:last", formatInput(HTMLprojectDescription, projects.projects[proj].description));
        addInput(".project-entry:last", formatInput(HTMLprojectImage, projects.projects[proj].images));
    }
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart); //function requires the desired text to input
        var formattedEmployer = formatInput(HTMLworkEmployer, work.jobs[job].employer);
        var formattedTitle = formatInput(HTMLworkTitle, work.jobs[job].title);
        addInput(".work-entry:last", formattedEmployer + formattedTitle);
        var formattedDates = formatInput(HTMLworkDates, work.jobs[job].dates);
        var formattedLocation = formatInput(HTMLworkLocation, work.jobs[job].location);
        addInput(".work-entry:last", formattedDates + formattedLocation);
        addInput(".work-entry:last", formatInput(HTMLprojectDescription, work.jobs[job].description));
    }
};

education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        addInput(".education-entry:last", formatInput(HTMLschoolName, education.schools[school].name));
        var formattedDegree = formatInput(HTMLschoolDegree, education.schools[school].degree);
        var formattedMajor = formatInput(HTMLschoolMajor, education.schools[school].major);
        addInput(".education-entry:last", formatInput(HTMLschoolDates, education.schools[school].dates));
        addInput(".education-entry:last", formattedMajor + formattedDegree);
    }
    for (school = 0; school < education.onlineCourses.length; school++) {
        if (school === 0) {
            $("#education").append(HTMLonlineClasses);
        } //this is the header for online section
        $("#education").append(HTMLonlineStart);
        var formattedSchool = formatInput(HTMLonlineSchool, education.onlineCourses[school].school);
        var formatedTitle = formatInput(HTMLonlineTitle, education.onlineCourses[school].title);
        addInput(".online-education-entry", formatedTitle + formattedSchool);
        addInput(".online-education-entry", formatInput(HTMLonlineDates, education.onlineCourses[school].dates));
        addInput(".online-education-entry", formatInput(HTMLonlineURL, education.onlineCourses[school].url));
    }
};

/*
INVOKING DISPLAY FUNCTIONS
*/
// displayWork();
bio.display();
work.display();
projects.display();
education.display();


/*
OTHER FUNCTIONS
*/

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function locationizer(work_obj) {
    var locations = [];
    for (i = 0; i < work_obj.jobs.length; i++) {
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
