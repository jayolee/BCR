
    function principle(thisObj) {
        let content = [{
            title: "Consider People’s Mindsets",
            content: ["Choose features that cater to when students are struggling or doing okay.",
            "Warrior PATHH students experience ups and downs as they navigate the 18-month program. They could be stressed, happy, frustrated, or any other mix of emotions. We need to  design experiences that meet people where they are at. Furthermore, we need to design experiences that do not exacerbate negative emotions but instead equip them with lessons that they need in order to navigate emotions and situations."]
        },
        {
            title:"Support the Journey",
            content:[
                " Minimize friction during navigation.  Utilize shortcuts to resume content.",
                "Warrior PATH teaches students that they can embrace struggle by finding new meaning and growth through the natural ups and downs of life. Students can choose to view their life as a journey. We need to find ways to support that journey by helping them understand where they are at, how far they have come, and where they are going on their journey."
            ]
        },
        {
            title:"Promote Behavior Change",
            content:[
                "Use reminders instead of forcing completion.",
                "Eighteen months is a long time. Completing Warrior PATHH requires shifts in students’ behavior and mindset in order to not only endure the program but also integrate Warrior PATHH’s lessons into their daily lives, even after they finish the program. To help students achieve behavior change, we as designers can’t provide boxes for them to check off, especially for completion’s sake. Instead, we need to help students  develop habits and proactively consider their goals."
            ]
        },{
            title: "Inspire Team Support",
            content:["Remind people of their support system. Celebrate victories rather than shame shortcomings.",
            "For a Warrior PATHH student, their Fire Team should be a constant source of motivation, support, and encouragement throughout their 18-month journey together.  Through our designs, we need to create opportunities to foster community and celebrate each other, not bring each other down."
            ]
        },{
           title:"Privacy",
           content:[
               "Respect what level of detail should be shared with loved ones.",
                "During Warrior PATHH, students share emotional and traumatic events from their past with PATHH Guides and their Fire Teams.  They share everything with each other but may not feel comfortable sharing stories, goals,  and assignments from Warrior PATHH with their loved ones. This principle helped guide us of what level of detail to share as we strengthen touchpoints with their loved ones."
           ]
        }];
      
            $(".prcpBox .iconWrapper .innerWrap").removeClass("active");
            thisObj.addClass("active");
            $("#principle .wrapper img").attr('src', thisObj.find("img").attr('src'));
            $("#principle .wrapper .title").text(content[thisObj.attr("href")].title);
            
            $("#principle .wrapper .expla").html("<p>"+content[thisObj.attr("href")].content[0] + "</p><p>" + content[thisObj.attr("href")].content[1]+"</p>");

        
    };

    function scrltoProcess(thisObj){
        window.scrollTo({ top: thisObj.offset().top, behavior: 'smooth' })
    }
    function roadmap(thisObj){
        let number = thisObj.attr("href").slice(-1) * 1 - 1; 
        let content = [
            {
                img: "images/design/roadmap/ServiceDesign_2.png",
                title: "Retreat Modules for Loved Ones",
                question: "What if sharing lessons from the retreat and disclosing their authentic self with their loved ones didn’t have to be a low point?",
                description:"Boulder Crest can create and share modules for loved ones that automatically send during and after their loved one attends a Warrior PATHH retreat via their Learning Management System. Each day’s video content can provide loved ones with an overview of what the student is experiencing during the day. When the student returns home from the retreat, they can go through an additional module together that provides opportunities for conversation and connection. Boulder Crest should also give students the choice to opt out."
            },
            {
                img: "images/design/roadmap/ServiceDesign_3.png",
                title: "Leverage Veteran Nonprofits",
                question: "What if we could help people stay engaged with the program by increasing connection touchpoints to the Warrior PATHH community?",
                description:"Boulder Crest already has formed partnerships with various veteran organizations. We see an opportunity for Boulder Crest to use those partnerships to more actively foster community within a regional model. Boulder Crest could host events at these veteran organization locations and invite Warrior PATHH alumni in the area. For nonprofits running Warrior PATHH, Boulder Crest could compile a toolkit for regional partnerships and events."
            },
            {
                img: "images/design/roadmap/ServiceDesign_4.png",
                title: "Find Warrior PATHH Students Near Me",
                question: "What if we could help people stay engaged with lessons by increasing connection touchpoints to the Warrior PATHH community?",
                description:"Boulder Crest could implement a new myPATHH feature to help connect students and alumni who go through Warrior PATHH who live near each other, whether they have gone through the program at Boulder Crest or at another nonprofit."
            },
            {
                img: "images/design/roadmap/ServiceDesign_5.png",
                title: "Improve Warrior PATHH Onboarding",
                question: "What if we could streamline the myPATHH onboarding process across Warrior PATHH locations? <br /> What if we could set up students for success in using myPATHH after the retreat, especially if they are not used to Internet technology?",
                description:"Boulder Crest should optimize in-person and digital touchpoints to improve the myPATHH onboarding experience for students"
            },
            {
                img: "images/design/roadmap/ServiceDesign_6.png",
                title: "Pathways to Care Through the Application Process",
                question: "What if we could direct people to ward and through the Warrior PATHH program so they are most likely to thrive?",
                description:"Boulder Crest should establish a protocol for their retreat locations as well as for other nonprofits delivering Warrior PATHH to establish pathways to care based on applicants’ needs.<br />When someone applies to Boulder Crest, a staff member should assess their needs and determine the best next step based on those needs. If the applicant is dealing with substance use disorder, for example, the staff member can refer them to a local treatment facility before they are ready to go through Warrior PATHH. If another nonprofit delivering Warrior PATHH has a unique mission that best serves the applicant’s needs, the staff member can refer the applicant to that nonprofit.<br />We see Gratitude America’s protocol of using a social worker to vet applicants as a valuable approach. Social workers are professionals specifically trained to understand the whole person in their environment and utilize their  knowledge of community resources. Having a social worker managing the vetting process could be recommended and replicated across all nonprofits delivering Warrior PATHH."
            }
        ];
        $(".roadmap .detail img").attr('src', content[number].img);
        $(".roadmap .detail .title").html(content[number].title);
        $(".roadmap .detail .question").html(content[number].question);
        $(".roadmap .detail .expla").html(content[number].description);
        if(window.innerWidth > 650){
        if(parseInt(thisObj.css("left"))+ 794 > window.innerWidth){
            if((parseInt(thisObj.css("left")) - 582) < 0){
                $(".detail").css("left", (parseInt(thisObj.css("left")) - 261) + "px");
                $(".detail").css("top", (parseInt(thisObj.css("top")) +170) + "px");
            } else{
            $(".detail").css("left", (parseInt(thisObj.css("left")) - 582) + "px");
            $(".detail").css("top", "32px");
            }
            
        }else {$(".detail").css("left", (parseInt(thisObj.css("left"))+ 273) + "px");
        $(".detail").css("top", "32px");}
        
    } else{
        $(".detail").css("left", 0);
                $(".detail").css("top",thisObj.offset().top - window.scrollY  );
    }
}
//retreat visit
   
