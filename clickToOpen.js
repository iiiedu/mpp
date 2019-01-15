function courseLinkConversion(courseNumber){
    
    var courseLink = "https://openedx.iiiedu.org.tw/courses/course-v1:Microsoft+" + courseNumber + "+"+courseVersion[courseNumber]["currentVersion"]+"/about";
    
    return courseLink;
    //window.open(courseLink, '_blank', 'location=yes,scrollbars=yes,status=yes');  
}

function courseImageLinkConversion(courseNumber){
    console.log(courseNumber);
    var courseImageLink;
    if(courseVersion[courseNumber]["currentVersion"].substring(0,4)=="2019")
    {
        courseImageLink = "https://openedx.iiiedu.org.tw/asset-v1:Microsoft+" + courseNumber + "+"+courseVersion[courseNumber]["currentVersion"]+"+type@asset+block@"+courseNumber+"-edX-378_225.png";
    }else
    {
        courseImageLink = "https://openedx.iiiedu.org.tw/asset-v1:Microsoft+" + courseNumber + "+"+courseVersion[courseNumber]["currentVersion"]+"+type@asset+block@course_image.png";
    }
    
    console.log(courseImageLink);
    
    return courseImageLink;
    //window.open(courseLink, '_blank', 'location=yes,scrollbars=yes,status=yes');  
}


var courseVersion={
    "DEV275x":{
        "currentVersion":"2018_T2",
        "courseName":"撰寫專業的程式碼"
    },
    "AZURE212x":{
        "currentVersion":"2018_T2",
        "courseName":"Migrating Workloads to Azure"
    },
    "DAT203.2x":{
        "currentVersion":"2018_T2",
        "courseName":"機器學習原理"
    },
    "DEV216x":{
        "currentVersion":"2018_T2",
        "courseName":"Developing Dynamic Web Applications Using Angular"
    },
    "DEV285x":{
        "currentVersion":"2018_T2",
        "courseName":"Algorithms and Data Structures"
    },
    "DEV208x":{
        "currentVersion":"2018_T2",
        "courseName":"jQuery導論"
    },
    "DEV221x":{
        "currentVersion":"2018_T2",
        "courseName":"AngularJS: Advanced Framework Techniques"
    },
    "DEVOPS200.6x":{
        "currentVersion":"2018_T2",
        "courseName":"DevOps for Databases"
    },
    "DAT214x":{
        "currentVersion":"2018_T2",
        "courseName":"Creating BI Reports with SQL Server Reporting Services"
    },
    "DEVOPS200.1x":{
        "currentVersion":"2018_T2",
        "courseName":"DevOps Practices and Principles"
    },
    "DAT207x":{
        "currentVersion":"2018_T3",
        "courseName":"Analyzing and Visualizing Data with Power BI"
    },
    "DEV211.1x":{
        "currentVersion":"2018_T1",
        "courseName":"Introduction to HTML and JavaScript"
    },
    "DAT206x":{
        "currentVersion":"2018_T4",
        "courseName":"Analyzing and Visualizing Data with Excel"
    },
    "AZURE203x":{
        "currentVersion":"2018_T2",
        "courseName":"Microsoft Azure Virtual Networks"
    },
    "AZURE202x":{
        "currentVersion":"2018_T2",
        "courseName":"Microsoft Azure Virtual Machines"
    },
    "DAT236x":{
        "currentVersion":"2018_T4",
        "courseName":"深度學習解義"
    },
    "DEV276x":{
        "currentVersion":"2018_T2",
        "courseName":"Learn to Program in Java"
    },
    "DEV262x":{
        "currentVersion":"2018_T2",
        "courseName":"Logic and Computational Thinking"
    },
    "DEV279x":{
        "currentVersion":"2018_T4",
        "courseName":"Building Interactive Prototypes using JavaScript"
    },
    "DAT251x":{
        "currentVersion":"2018_T2",
        "courseName":"Introduction to Data Modeling"
    },
    "DEV224x":{
        "currentVersion":"2018_T2",
        "courseName":"Building Your Azure Skills Toolkit"
    },
    "DAT229x":{
        "currentVersion":"2018_T2",
        "courseName":"Introduction to Big Data"
    },
    "DAT217x":{
        "currentVersion":"2018_T2",
        "courseName":"Implementing ETL with SQL Server Integration Services"
    },
    "DEV280x":{
        "currentVersion":"2018_T4",
        "courseName":"Building Functional Prototypes using Node.js"
    },
    "AZURE205x":{
        "currentVersion":"2018_T2",
        "courseName":"Microsoft Azure Storage"
    },
    "DAT222x":{
        "currentVersion":"2018_T2",
        "courseName":"Essential Statistics for Data Analysis using Excel"
    },
    "DAT248x":{
        "currentVersion":"2018_T4",
        "courseName":"Analytics Storytelling for Impact"
    },
    "DEV284x":{
        "currentVersion":"2018_T3",
        "courseName":"Designing a Technical Solution"
    },
    "DEV204.1x":{
        "currentVersion":"2018_T2",
        "courseName":"Introduction to C#"
    },
    "DAT205x":{
        "currentVersion":"2018_T2",
        "courseName":"Introduction to Data Analysis using Excel"
    },
    "DEVOPS200.3x":{
        "currentVersion":"2018_T2",
        "courseName":"Continuous Integration and Continuous Deployment"
    },
    "DAT228x":{
        "currentVersion":"2018_T2",
        "courseName":"Developing Big Data Solutions with Azure Machine Learning"
    },
    "DAT201x":{
        "currentVersion":"2018_T2",
        "courseName":"Querying Data with Transact-SQL"
    },
    "DEVOPS200.7x":{
        "currentVersion":"2018_T2",
        "courseName":"Application Monitoring and Feedback Loops"
    },
    "DAT208x":{
        "currentVersion":"2018_T3",
        "courseName":"資料科學的Python導論"
    },
    "DEV281x":{
        "currentVersion":"2018_T3",
        "courseName":"Introduction to ReactJS"
    },
    "DEV225x":{
        "currentVersion":"2018_T2",
        "courseName":"Developing IoT Solutions with Azure IoT"
    },
    "AZURE206x":{
        "currentVersion":"2018_T2",
        "courseName":"Microsoft Azure App Service"
    },
    "DAT263x":{
        "currentVersion":"2018_T3",
        "courseName":"人工智慧導論"
    },
    "DAT209x":{
        "currentVersion":"2018_T2",
        "courseName":"Programming in R for Data Science"
    },
    "DEVOPS200.4x":{
        "currentVersion":"2018_T2",
        "courseName":"Configuration Management for Containerized Delivery"
    },
    "AZURE208x":{
        "currentVersion":"2018_T2",
        "courseName":"Azure Security and Compliance"
    },
    "DAT221x":{
        "currentVersion":"2018_T4",
        "courseName":"Introduction to NoSQL Data Solutions"
    },
    "DAT227x":{
        "currentVersion":"2018_T2",
        "courseName":"Developing Business Applications with Power Apps and Microsoft Flow"
    },
    "DEVOPS200.5x":{
        "currentVersion":"2018_T2",
        "courseName":"DevOps Testing"
    },
    "DAT202.2x":{
        "currentVersion":"2018_T2",
        "courseName":"Implementing Real-Time Analytics with Hadoop in Azure HDInsight"
    },
    "DEV212x":{
        "currentVersion":"2018_T2",
        "courseName":"DevOps for Developers: How to Get Started"
    },
    "AZURE207x":{
        "currentVersion":"2018_T2",
        "courseName":"Databases in Azure"
    },
    "DAT202.3x":{
        "currentVersion":"2018_T2",
        "courseName":"Implementing Predictive Analytics with Spark in Azure HDInsight"
    },
    "DEV210x":{
        "currentVersion":"2018_T2",
        "courseName":"Introduction to C++"
    },
    "DEV204.2x":{
        "currentVersion":"2018_T2",
        "courseName":"Object Oriented Programming in C#"
    },
    "DEV247x":{
        "currentVersion":"2018_T2",
        "courseName":"Build Web APIs using ASP.NET"
    },
    "DEV277x":{
        "currentVersion":"2018_T2",
        "courseName":"Object Oriented Programming in Java"
    },
    "AZURE210x":{
        "currentVersion":"2018_T2",
        "courseName":"Automating Azure Workloads"
    },
    "DEVOPS200.2x":{
        "currentVersion":"2018_T2",
        "courseName":"Infrastructure as Code"
    },
    "DAT216x":{
        "currentVersion":"2018_T2",
        "courseName":"Delivering a Relational Data Warehouse"
    },
    "DAT204x":{
        "currentVersion":"2018_T2",
        "courseName":"Introduction to R for Data Science"
    },
    "DAT203.1x":{
        "currentVersion":"2018_T2",
        "courseName":"Data Science Essentials"
    },
    "DAT202.1x":{
        "currentVersion":"2018_T2",
        "courseName":"Processing Big Data with Hadoop in Azure HDInsight"
    },
    "DAT257x":{
        "currentVersion":"2018_T3",
        "courseName":"強化學習解義"
    },
    "DEVOPS200.9x":{
        "currentVersion":"2018_T2",
        "courseName":"Architecting Distributed Cloud Applications"
    },
    "DAT249x":{
        "currentVersion":"2018_T3",
        "courseName":"資料分析的道德與法律"
    },
    "AZURE204x":{
        "currentVersion":"2018_T2",
        "courseName":"Microsoft Azure Identity"
    },
    "DEV288x":{
        "currentVersion":"2018_T2",
        "courseName":"自然語言處理(NLP)"
    },
    "DAT210x":{
        "currentVersion":"2018_T2",
        "courseName":"Programming with Python for Data Science"
    },
    "DAT101x":{
        "currentVersion":"2018_T4",
        "courseName":"資料科學導論"
    },
    "DAT213x":{
        "currentVersion":"2018_T2",
        "courseName":"Analyzing Big Data with Microsoft R"
    },
    "DAT256x":{
        "currentVersion":"2018_T3",
        "courseName":"機器學習數學精要-Python版"
    },
    "DAT273x":{
        "currentVersion":"2018_T4",
        "courseName":"資料科學研究方法-Python版"
    },
    "DAT275x":{
        "currentVersion":"2018_T4",
        "courseName":"機器學習原理-Python版"
    },
    "DEV290x":{
        "currentVersion":"2018_T4",
        "courseName":"電腦視覺與影像分析"
    },
    "DAT280x":{
        "currentVersion":"2018_T4",
        "courseName":"Essential Math for Machine Learning: R Edition"
    },
    "DAT274x":{
        "currentVersion":"2018_T4",
        "courseName":"Data Science Research Methods: R Edition"
    },
    "DAT276x":{
        "currentVersion":"2018_T4",
        "courseName":"Principles of Machine Learning: R Edition"
    },
    "DAT102x":{
        "currentVersion":"2018_T4",
        "courseName":"Microsoft Professional Capstone : Data Science"
    },
    "DAT264x":{
        "currentVersion":"2018_T4",
        "courseName":"期末整合專案 - 人工智慧"
    },
    "DAT220x":{
        "currentVersion":"2018_T3",
        "courseName":"Delivering a Data Warehouse in the Cloud"
    },
    "DAT223.1x":{
        "currentVersion":"2018_T2",
        "courseName":"Processing Big Data with Azure Data Lake Analytics"
    },
    "DAT223.2x":{
        "currentVersion":"2018_T4",
        "courseName":"Processing Real-Time Data Streams in Azure"
    },
    "DAT223.3x":{
        "currentVersion":"2018_T2",
        "courseName":"Orchestrating Big Data with Azure Data Factory"
    },
    "DEV287x":{
        "currentVersion":"2018_T4",
        "courseName":"Speech Recognition Systems"
    },
    "AZ-900":{
        "currentVersion":"2019_T1",
        "courseName":"Microsoft Azure Fundamentals"
    }

    
};

$(document).ready(function() {

$(".card .card-text").each(function(){
 $(this).text($(this).parent().attr("data-courseid")+" "+courseVersion[$(this).parent().attr("data-courseid")]['courseName']); 
});  

$(".card img").each(function(){
 $(this).attr("src",courseImageLinkConversion($(this).parent().attr("data-courseid"))); 
});

$(".card img").css("opacity", 1.0);
$(".card img").hover(function() {
        $(this).animate({opacity: 0.5}, 500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });

$(".card span.text").css('cursor','pointer');
    
$(".card span.text").click(function() {
        var win = window.open(courseLinkConversion($(this).parent().attr("data-courseid")), '_blank');
        win.focus();
    });
});

