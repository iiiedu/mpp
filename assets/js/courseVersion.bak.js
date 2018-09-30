function courseLinkConversion(courseNumber){
    
    var courseLink = "https://openedx.iiiedu.org.tw/courses/course-v1:Microsoft+" + courseNumber + "+"+courseVersion[courseNumber]["currentVersion"]+"/about";
    
    return courseLink;
    //window.open(courseLink, '_blank', 'location=yes,scrollbars=yes,status=yes');  
}

var courseVersion={
    "DEV275x":{
        "currentVersion":"2017_T4"
    },
    "AZURE212x":{
        "currentVersion":"2017"
    },
    "DAT203.2x":{
        "currentVersion":"2018_T1"
    },
    "DEV216x":{
        "currentVersion":"2017_T4"
    },
    "DEV285x":{
        "currentVersion":"2017_T4"
    },
    "DAT203.3x":{
        "currentVersion":"2017"
    },
    "DEV208x":{
        "currentVersion":"2017"
    },
    "DEV221x":{
        "currentVersion":"2017"
    },
    "DAT224x":{
        "currentVersion":"2017_T4"
    },
    "DEVOPS200.6x":{
        "currentVersion":"2017"
    },
    "CLD236x":{
        "currentVersion":"2017_T4"
    },
    "DAT214x":{
        "currentVersion":"2017"
    },
    "DEVOPS200.1x":{
        "currentVersion":"2017"
    },
    "DAT207x":{
        "currentVersion":"2018_T1"
    },
    "DEV211.1x":{
        "currentVersion":"2017"
    },
    "DAT206x":{
        "currentVersion":"2018_T1"
    },
    "DEV205Bx":{
        "currentVersion":"2017"
    },
    "DEV215x":{
        "currentVersion":"2017"
    },
    "AZURE203x":{
        "currentVersion":"2017"
    },
    "DAT212x":{
        "currentVersion":"2017"
    },
    "AZURE202x":{
        "currentVersion":"2017"
    },
    "DAT236x":{
        "currentVersion":"2018_T1"
    },
    "DEV276x":{
        "currentVersion":"2017_T4"
    },
    "DEV262x":{
        "currentVersion":"2017_T4"
    },
    "DEV279x":{
        "currentVersion":"2017"
    },
    "DAT251x":{
        "currentVersion":"2018_T1"
    },
    "DEV224x":{
        "currentVersion":"2017"
    },
    "DAT229x":{
        "currentVersion":"2018_T1"
    },
    "DAT217x":{
        "currentVersion":"2017"
    },
    "DEV280x":{
        "currentVersion":"2017_T4"
    },
    "DEV204x":{
        "currentVersion":"2017_T4"
    },
    "AZURE205x":{
        "currentVersion":"2017"
    },
    "DAT222x":{
        "currentVersion":"2018_T1"
    },
    "DAT248x":{
        "currentVersion":"2017_T4"
    },
    "DEV284x":{
        "currentVersion":"2017_T4"
    },
    "DEV204.1x":{
        "currentVersion":"2017_T4"
    },
    "DAT205x":{
        "currentVersion":"2018_T1"
    },
    "DEVOPS200.3x":{
        "currentVersion":"2017"
    },
    "DAT228x":{
        "currentVersion":"2018_T1"
    },
    "DAT201x":{
        "currentVersion":"2018_T1"
    },
    "DEVOPS200.7x":{
        "currentVersion":"2017"
    },
    "CLD224x":{
        "currentVersion":"2017"
    },
    "DAT208x":{
        "currentVersion":"2018_T1"
    },
    "DEV281x":{
        "currentVersion":"2017_T4"
    },
    "INF217x":{
        "currentVersion":"2017_T4"
    },
    "DEV225x":{
        "currentVersion":"2017"
    },
    "AZURE206x":{
        "currentVersion":"2017"
    },
    "DAT263x":{
        "currentVersion":"2018_T3"
    },
    "DAT209x":{
        "currentVersion":"2018_T1"
    },
    "AZURE213x":{
        "currentVersion":"2017"
    },
    "DEVOPS200.4x":{
        "currentVersion":"2017"
    },
    "DAT211x":{
        "currentVersion":"2017"
    },
    "AZURE208x":{
        "currentVersion":"2017"
    },
    "DAT221x":{
        "currentVersion":"2017"
    },
    "DAT227x":{
        "currentVersion":"2017"
    },
    "DEVOPS200.5x":{
        "currentVersion":"2017"
    },
    "DAT202.2x":{
        "currentVersion":"2018_T1"
    },
    "DEV212x":{
        "currentVersion":"2017"
    },
    "AZURE207x":{
        "currentVersion":"2017"
    },
    "AZURE209x":{
        "currentVersion":"2017"
    },
    "DAT202.3x":{
        "currentVersion":"2018_T1"
    },
    "DEV210x":{
        "currentVersion":"2017_T4"
    },
    "DEV204.2x":{
        "currentVersion":"2017_T4"
    },
    "CLD243x":{
        "currentVersion":"2017_T4"
    },
    "CLD216x":{
        "currentVersion":"2017"
    },
    "INF219x":{
        "currentVersion":"2017_T4"
    },
    "DEV247x":{
        "currentVersion":"2017_T4"
    },
    "DEV277x":{
        "currentVersion":"2017_T4"
    },
    "AZURE210x":{
        "currentVersion":"2017"
    },
    "AZURE211x":{
        "currentVersion":"2017"
    },
    "DEVOPS200.2x":{
        "currentVersion":"2017"
    },
    "DAT216x":{
        "currentVersion":"2017"
    },
    "DAT204x":{
        "currentVersion":"2018_T1"
    },
    "AZURE214x":{
        "currentVersion":"2017"
    },
    "DAT203.1x":{
        "currentVersion":"2018_T1"
    },
    "DAT202.1x":{
        "currentVersion":"2017"
    },
    "DAT257x":{
        "currentVersion":"2018_T1"
    },
    "INF258x":{
        "currentVersion":"2017_T4"
    },
    "DEVOPS200.9x":{
        "currentVersion":"2017_T4"
    },
    "DAT249x":{
        "currentVersion":"2018_T1"
    },
    "AZURE204x":{
        "currentVersion":"2017"
    },
    "DEV288x":{
        "currentVersion":"2018_T1"
    },
    "CLD234x":{
        "currentVersion":"2017"
    },
    "DAT210x":{
        "currentVersion":"2018_T1"
    },
    "DAT101x":{
        "currentVersion":"2018_T1"
    },
    "DAT213x":{
        "currentVersion":"2018_T1"
    },
    "CLD246x":{
        "currentVersion":"2017_T4"
    }
};