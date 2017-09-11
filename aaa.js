var count = "";

   var duration = 1000; 

   var num=window.document.getElementById("menu");

   document.getElementById("countdown-button").disabled=false;


var startCountDown = function()
   {
        //想做個判斷式 當選到select option不同的選項時有對應的計算秒數
                          
       if(num.value=="0"){      
             alert("請選擇菜色");
             return;

   }else if(num.value=="1"){

       count="15";


   }else if(num.value=="2"){

       count="20";
   } else if(num.value=="3"){

       count="5";
   }else if(num.value=="4"){

       count="3";
   }


           var e = document.getElementById('countdown-button'); 

           var loop = function(){

            e.value = "剩下"+(--count)+' 秒';

            if ( count > 0 )

                    setTimeout(loop, duration); //持續倒數
            else 
            {
                           
            e.value = '餐點好囉！！！';

            e.style.backgroundColor="#CB4042";
            e.style.color="#FFFFFF";

         
            document.getElementById("countdown-button").disabled=true;

            document.getElementById("potup").classList.add("finish");
            document.getElementById("cloudone").classList.add("finishflowone");
            document.getElementById("cloudtwo").classList.add("finishflowtwo");
            document.getElementById("countdown-button").disabled=true;
            
                   }
           };


             
           setTimeout(loop, duration); //開始倒數
    
   }


   function setpic(){

    if((document.getElementById("menu").value)=="1"){
     document.getElementById("pic1").style.display = "block";
     document.getElementById("pic2").style.display = "none";
     document.getElementById("pic3").style.display = "none";
     document.getElementById("pic4").style.display = "none";
     document.getElementById("pic0").style.display = "none";
 
 
 } else if((document.getElementById("menu").value)=="2"){
   document.getElementById("pic2").style.display = "block";
   document.getElementById("pic1").style.display = "none";
   document.getElementById("pic3").style.display = "none";
   document.getElementById("pic4").style.display = "none";
   document.getElementById("pic0").style.display = "none";
 }
 else if((document.getElementById("menu").value)=="3"){
   document.getElementById("pic3").style.display = "block";
   document.getElementById("pic1").style.display = "none";
   document.getElementById("pic2").style.display = "none";
   document.getElementById("pic4").style.display = "none";
   document.getElementById("pic0").style.display = "none";
 
 }
 else if ((document.getElementById("menu").value)=="4"){
   document.getElementById("pic4").style.display = "block";
   document.getElementById("pic1").style.display = "none";
   document.getElementById("pic2").style.display = "none";
   document.getElementById("pic3").style.display = "none";
   document.getElementById("pic0").style.display = "none";
 }else if((document.getElementById("menu").value)=="0") {
    document.getElementById("pic0").style.display = "block";
    document.getElementById("pic1").style.display = "none";
    document.getElementById("pic2").style.display = "none";
    document.getElementById("pic3").style.display = "none";
    document.getElementById("pic4").style.display = "none";


 }



 
 onload=function setpic(){}

}

function move(){

    document.getElementById("potup").classList.add("move");
    document.getElementById("cloudone").classList.add("flow");

}








   