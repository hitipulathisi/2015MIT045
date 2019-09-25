//------------------------------------- --------------------------Admin Page, Methods-------------- -//
var config = {
    apiKey: "AIzaSyBHwHu003WnuUAx572tNDwygaL96N6ykR8",
    authDomain: "sample-f8210.firebaseapp.com",
    databaseURL: "https://sample-f8210.firebaseio.com",
    projectId: "sample-f8210",
    storageBucket: "sample-f8210.appspot.com",
    messagingSenderId: "410216991094"
  };
  firebase.initializeApp(config);


	//const db = firebase.firestore();
	const db = firebase.firestore();

	//const docRef=firestore.collection("farmer").doc("Saman");
	var textToSave="";
	var textToSave2="";
	//const docRef=db.doc("farmer/Saman");
	const docRef2=db.collection("farmer");
	const docRef3=db.collection("Machinery");
	const docRef_Rent=db.collection("Rent");
	const docRef_Admin=db.collection("Admin");


//----------------------Admin Sign Up funtion start hear--------------//
function AdminSignUp(){
		
	var name=document.getElementById("ASname").value;
	var uname=document.getElementById("ASUname").value;
	var mobile=document.getElementById("ASMNumber").value;
	var nic=document.getElementById("ASNIC").value;
	var email=document.getElementById("ASEmail").value;
	var pwd=document.getElementById("Apsw").value;// not encripted
	var cpwd=document.getElementById("Acpsw").value;
	var AccLevel = document.getElementById("AccLevel").value;
	var gjsr=document.getElementById("ASGJSR").value;
	 
	
	 
	 
	console.log("I ma going to save name " + name + " L Name "+uname+" mobile "+mobile+" email "+email+"pas: "+pwd+"Access Level : "+AccLevel+" to firesstore");
	//console.log("Line 002");
	if (name == ""||name==null) {
		alert("First Name must be filled out");
		}
	else if(uname == ""||uname==null){
		alert("Last Name must be filled out");
	}	else if(mobile == ""||mobile==null){
		alert("mobile number must be filled out");
	}
	else if(isNaN(mobile)){
		alert("mobile number must be number");
	}
	else if(nic == ""||nic==null){
		alert("nic must be filled out");
	}
	else if(email == ""||email==null){
		alert("email must be filled out");
	}
	else if(pwd == ""||pwd==null){
		alert("password must be filled out");
		}
	else if(cpwd == ""||cpwd==null){
			alert("Confirm password must be filled out");
		}
	else if(pwd!=cpwd){
		alert("password must be matched");
		document.getElementById("psw").value="";
		document.getElementById("cpsw").value="";

	}
	else if(gjsr == ""||gjsr==null){
		alert("Govi Jana Sewa Region must be filled out");
	}
	
		else{

	docRef_Admin.add({
		Name:name,
		Uname:uname,
		Mobile:mobile,
		NIC:nic,
		Email:email,
		Password:pwd,
		GJSR:gjsr,
		Access_Level:AccLevel/**/

	}).then(function () {
		console.log("Saved Status");
		alert("Saved Status Successs");
		document.getElementById("ASname").value = "";
		document.getElementById("ASUname").value = "";
		document.getElementById("ASMNumber").value="";
		document.getElementById("ASNIC").value="";
		document.getElementById("ASEmail").value="";
		document.getElementById("Apsw").value="";
		document.getElementById("Acpsw").value="";
		document.getElementById("ASGJSR").value="";	
	}).catch(function () {
		console.log("Got an error:Admin Sign Up");
		alert("Got an error:Admin Sign Up");
		document.getElementById("ASname").value = "";
		document.getElementById("ASUname").value = "";
		document.getElementById("ASMNumber").value="";
		document.getElementById("ASNIC").value="";
		document.getElementById("ASEmail").value="";
		document.getElementById("Apsw").value="";
		document.getElementById("Acpsw").value="";
		document.getElementById("ASGJSR").value="";
	});
}
	//console.log("Line 003");
}
//----------------------Admin Login funtion start hear--------------//
var  ALnic="";
var ALpsw="";
var ApassfromDB="";
//var Nemail="";
function AdminLogin(){

   ALnic=document.getElementById("ALNIC").value;
   ALpsw=document.getElementById("ALpsw").value;
   console.log("I ma going to find NIC" + ALnic + " Password : "+ALpsw+" From firesstore");
   console.log("I ma going to find NIC" + ALnic + " Password : "+ALpsw+" From firesstore");
   //Nemail=Lemail;
   //console.log("Value of Nemail P1 :"+Nemail);
	   console.log("Start find Admin");
	   try{// try catch still wont work...
	   docRef_Admin.where('NIC','==',ALnic).get().then((snapshot)=>{
		   snapshot.docs.forEach(doc => {
				AdminFindPassword(doc);
		   });
	   })
   }catch(err){
	   console.log("Error Login");
	   document.getElementById("ALNIC").value="";
	 document.getElementById("ALpsw").value="";
   }
	   
	
	   console.log("End find Admin");
   //	console.log("Value of Nemail  P2 :"+Nemail);
	   document.cookie=ALnic;
	   var bbb=document.cookie;
	   console.log("Value of NIC Admin :"+bbb);
	   
	   
}



function AdminFindPassword(doc){
   ApassfromDB=doc.data().Password;
   console.log("Farmers pass : "+ApassfromDB);
   if(ALpsw!=ApassfromDB){
	   alert("invalid password");
   }else{
	   //openProfileForm();
   //	Show_profile();
	   window.open('Admin_Profile.html', '');
	   
	   //FindProfiledata(doc);
   }
}

//------------------------------------- --------------------------Admin Profile Page, Methods-------------- -//
//----------------------Admin Login funtion start hear--------------//
var adName="";
function ReturnAdminName(){
	
	var ALnic=document.cookie;
	
	docRef_Admin.where('NIC','==',ALnic).get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			 adName=""+doc.data().Name;
			 document.getElementById("APP1").innerHTML = ""+adName+"";
			 console.log("Name"+adName);
			
		});
		
		
	})
	
}
var AcLevel;
function ShowAccLevel(){
	
	var ALnic=document.cookie;
	
	docRef_Admin.where('NIC','==',ALnic).get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			 AcLevel=""+doc.data().Access_Level;
			 
			 console.log("Access Level  :"+AcLevel);
			
		});
		
		if(AcLevel=='NationalL'){
			document.getElementById("APP2").innerHTML = "National Level";
		}
		else if(AcLevel=='ProvincialL'){
			document.getElementById("APP2").innerHTML = "Provincial Level";
		}
		else if(AcLevel=='DistrictL'){
			document.getElementById("APP2").innerHTML = "District Level";
		}else {
			document.getElementById("APP2").innerHTML = "Govi Jana Sewa Region(GJSR) Level";
		}
	})
	//return AcLevel;
}
function ReturnAccLevel(){
	
	var ALnic=document.cookie;
	
	docRef_Admin.where('NIC','==',ALnic).get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			 AcLevel=""+doc.data().Access_Level;
			 
			 console.log("Access Level  :"+AcLevel);
			
		});
		
	
	})
	return AcLevel;
}
var TMCount=0;
function ReturnTotalNumberOfMachi(){
	var Cs="";
	var ALnic=document.cookie;
	var GJSR="";
	
	docRef_Admin.where('NIC','==',ALnic).get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			 AcLevel=""+doc.data().Access_Level;
			 GJSR=""+doc.data().GJSR;
			 
			 console.log("Access Level  :"+AcLevel);
			
		});
		
		if(AcLevel=='NationalL'){
			docRef3.get().then((snapshot)=>{
				snapshot.docs.forEach(doc => {
					 Cs=""+doc.data().CSNumber;
					 TMCount=TMCount+1;
					 
					 
					
				});
				console.log("TMCount  :"+TMCount);
			document.getElementById("APP3").innerHTML = ""+TMCount;
			})
			
		}
		else if(AcLevel=='ProvincialL'){
			document.getElementById("APP2").innerHTML = "Provincial Level";
			docRef3.where('MGJSR','==','Gokarella').get().then((snapshot)=>{  
				snapshot.docs.forEach(doc => {
					 Cs=""+doc.data().CSNumber;
					 TMCount=TMCount+1;
					 
					 
					
				});
				
				console.log("TMCount  :"+TMCount);
			document.getElementById("APP3").innerHTML = ""+TMCount;
			})
			docRef3.where('MGJSR','==','plonnaruwa').get().then((snapshot)=>{  
				snapshot.docs.forEach(doc => {
					 Cs=""+doc.data().CSNumber;
					 TMCount=TMCount+1;
					 
					 
					
				});
				console.log("TMCount 2 :"+TMCount);
			document.getElementById("APP3").innerHTML = ""+TMCount;
			})
		}
		else if(AcLevel=='DistrictL'){
			document.getElementById("APP2").innerHTML = "District Level";
		}else {
			
			docRef3.where('MGJSR','==',GJSR).get().then((snapshot)=>{  
				snapshot.docs.forEach(doc => {
					 Cs=""+doc.data().CSNumber;
					 TMCount=TMCount+1;
					 
					 
					
				});
				console.log("TMCount 2 :"+TMCount);
			document.getElementById("APP3").innerHTML = ""+TMCount;
			})
		}
	})
}
var TMCountR=0;
function ReturnTotalNumberOfMachiAVRent(){
	var Cs="";
	var ALnic=document.cookie;
	var GJSR="";
	
	docRef_Admin.where('NIC','==',ALnic).get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			 AcLevel=""+doc.data().Access_Level;
			 GJSR=""+doc.data().GJSR;
			 
			 console.log("Access Level  :"+AcLevel);
			
		});
		
		if(AcLevel=='NationalL'){
			docRef3.where('AvailableR','==','Yes').get().then((snapshot)=>{
				snapshot.docs.forEach(doc => {
					 Cs=""+doc.data().CSNumber;
					 TMCountR=TMCountR+1;
					 
					 
					
				});
				console.log("TMCount rent :"+TMCountR);
			document.getElementById("APP4").innerHTML = ""+TMCountR;
			})
			
		}
		else if(AcLevel=='ProvincialL'){
			document.getElementById("APP2").innerHTML = "Provincial Level";
			docRef3.where('MGJSR','==','Gokarella').where('AvailableR','==','Yes').get().then((snapshot)=>{  
				snapshot.docs.forEach(doc => {
					 Cs=""+doc.data().CSNumber;
					 TMCountR=TMCountR+1;
					 
					 
					
				});
				
				console.log("TMCount  :"+TMCountR);
			document.getElementById("APP4").innerHTML = ""+TMCountR;
			})
			docRef3.where('MGJSR','==','plonnaruwa').where('AvailableR','==','Yes').get().then((snapshot)=>{  
				snapshot.docs.forEach(doc => {
					 Cs=""+doc.data().CSNumber;
					 TMCountR=TMCountR+1;
					 
					 
					
				});
				console.log("TMCount 2 :"+TMCountR);
			document.getElementById("APP4").innerHTML = ""+TMCountR;
			})
		}
		else if(AcLevel=='DistrictL'){
			document.getElementById("APP4").innerHTML = "District Level";
		}else {
			
			docRef3.where('MGJSR','==',GJSR).where('AvailableR','==','Yes').get().then((snapshot)=>{  
				snapshot.docs.forEach(doc => {
					 Cs=""+doc.data().CSNumber;
					 TMCountR=TMCountR+1;
					 
					 
					
				});
				console.log("TMCount 2 :"+TMCountR);
			document.getElementById("APP4").innerHTML = ""+TMCountR;
			})
		}
	})
}

function AShowALL_AMachinery(){
	
	console.log("Start Show All Machinery");
	docRef3.where('AvailableR','==','Yes').get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			ArenderMachinery(doc); 
		});
	})
	console.log("End Show All Machinery");
	
}
function AShowALL_Machinery(){
	
	console.log("Start Show All Machinery");
	docRef3.get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			ArenderMachinery(doc); 
		});
	})
	console.log("End Show All Machinery");
	
}
function ArenderMachinery(doc){
	console.log("Strat Render Machinery_List");
	 var li= document.createElement('tr');
	 var ul= document.getElementById("AMachinery_List");
     let csnumber= document.createElement('td');
	let mtype=document.createElement('td');
	let mbrand=document.createElement('td');
	let mmodelN=document.createElement('td');
	let mwidth=document.createElement('td');
	let mheigth=document.createElement('td'); 
	let maverage_eff=document.createElement('td');
	let mgjsr=document.createElement('td');
	let mavelabileR=document.createElement('td');


		li.setAttribute('data-id',doc.id);
		
    csnumber.textContent= "CSNmber :"+ doc.data().CSNumber;
	mtype.textContent="   Type :"+ doc.data().Type;
	mbrand.textContent="   Brand : "+ doc.data().Brand;
	mmodelN.textContent="   Model Number : "+ doc.data().ModelNumber;
	mwidth.textContent= "   Width : "+doc.data().Width;   
	mheigth.textContent= "   Heigth: "+doc.data().Heigth;
	maverage_eff.textContent= "  Efficincy: "+doc.data().AvarageEff; 
	mgjsr.textContent= "  GJSR: "+doc.data().MGJSR;    
	mavelabileR.textContent= "  Avalability : "+doc.data().AvailableR;     
    
  li.appendChild(csnumber);
	li.appendChild(mtype);
	li.appendChild(mbrand);
	li.appendChild(mmodelN);
	li.appendChild(mwidth);
	li.appendChild(mheigth);
	li.appendChild(maverage_eff);
	li.appendChild(mgjsr);
	li.appendChild(mavelabileR);
    
	
	//ul.appendChild(li);
	
	//name= doc.data().name;
	//usname= doc.data().uname;
	//Mob= doc.data().Mobile;
	//E_mail= doc.data().Email;

	//li.setAttribute('id',name);*/

	//console.log("name: "+name+" Las: "+usname+" Mob: "+Mob+" E mail: "+E_mail);
	//li.appendChild(document.createTextNode(name));
	ul.appendChild(li);

	console.log("End Render Machinery_List");

	}

/*
function ReturnGJSR(){
	
	var Lnic=document.cookie;
	console.log("Start Show Machinery");
	docRef2.where('NIC','==',Lnic).get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			 gjsr=""+doc.data().GJSR;
			 console.log("GJSR1"+gjsr);
			
		});
		console.log("GJSR2"+gjsr);
		
	})
	console.log("GJSR3"+gjsr);
	console.log("End Show Machinery");
	return gjsr;
}
*/

