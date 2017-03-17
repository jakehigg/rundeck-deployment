//# sourceMappingURL=versionTest.js.map
var VersionIdentityTest=function(){function e(a){return new RundeckVersion({versionString:a})}var d=this,c=function(a,b,c){b!=c?jQuery(document.body).append(jQuery("<div></div>").append(jQuery('<span class="text-danger"></span>').text("FAIL: "+a+": expected: "+b+", was: "+c))):jQuery(document.body).append(jQuery("<div></div>").append(jQuery('<span class="text-success"></span>').text("OK: "+a)))};d.basicTest=function(a){c(a+"success",1,1);var b=e("0").data();c(a+"major",0,b.major);c(a+"minor",0,b.minor);
c(a+"point",0,b.point);c(a+"release",1,b.release);c(a+"tag","",b.tag)};d.fullTest=function(a){var b=e("2.3.4-5-SNAPSHOT").data();c(a+"major",2,b.major);c(a+"minor",3,b.minor);c(a+"point",4,b.point);c(a+"release",5,b.release);c(a+"tag","SNAPSHOT",b.tag);c(a+"version","2.3.4-5-SNAPSHOT",b.version)};d.noReleaseTest=function(a){var b=e("2.3.4-SNAPSHOT").data();c(a+"major",2,b.major);c(a+"minor",3,b.minor);c(a+"point",4,b.point);c(a+"release",1,b.release);c(a+"tag","SNAPSHOT",b.tag)};d.noTagTest=function(a){var b=
e("2.3.4-5").data();c(a+"major",2,b.major);c(a+"minor",3,b.minor);c(a+"point",4,b.point);c(a+"release",5,b.release);c(a+"tag","",b.tag)};d.multiTest=function(a){var b=e("2.3.4-SNAPSHOT (other-data)").data();c(a+"major",2,b.major);c(a+"minor",3,b.minor);c(a+"point",4,b.point);c(a+"release",1,b.release);c(a+"tag","SNAPSHOT",b.tag);c(a+"version","2.3.4-SNAPSHOT",b.version)};d.testAll=function(){c("Start tests",1,1);for(var a in d)if(a.endsWith("Test"))try{d[a].call(d,a+": ")}catch(b){c("Error: "+b,1,
0)}}};jQuery(function(){(new VersionIdentityTest).testAll()});