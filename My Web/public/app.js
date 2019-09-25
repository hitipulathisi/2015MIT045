// JavaScript Document
//--------------------Functions Login Form---------------//
function openLoginForm() {
  document.getElementById("LoginForm").style.display = "block";
}
function closeLoginForm() {
  document.getElementById("LoginForm").style.display = "none";
}

//--------------------Functions SignUp Form---------------//
function openSingUpForm() {
  document.getElementById("SingUpFormFM").style.display = "block";
  //document.getElementById("LoginForm").style.display = "none";
}
function closeSingUpForm() {
  document.getElementById("SingUpFormFM").style.display = "none";
}
//--------------------Add Machinery Form---------------//
function openAF_Machinery() {
  document.getElementById("Add_Farming_Machinery").style.display = "block";
  
}
function closeAF_Machinery(){
  document.getElementById("Add_Farming_Machinery").style.display = "none";
}
//--------------------Rent Machinery Form---------------//

function open_Machinery_R() {
	var Lnic=document.cookie;
	console.log("Lnic  :" + Lnic);
	if (Lnic == ""||Lnic==null) {
		alert("First you must Login to Rent Machinery");
		}else{

	document.getElementById("Machinery_Rent_FM").style.display = "block";
	}
  }
  function close_Machinery_R(){
	document.getElementById("Machinery_Rent_FM").style.display = "none";
  }
//--------------------Change Password Form---------------//

function Open_ChanegePassword_FM() {
	var Lnic=document.cookie;
	if (Lnic == ""||Lnic==null) {
		alert("First you must Login to Change Password");
		}else{
	document.getElementById("Change_Password_FM").style.display = "block";
		}
  }
  function Close_ChanegePassword_FM(){
	document.getElementById("Change_Password_FM").style.display = "none";
  }
//-------------------- Remove password Form---------------//

function Open_Remove_Machinery_FM() {
	document.getElementById("Remove_Machinery_FM").style.display = "block";
	
  }
  function Close_Remove_Machinery_FM(){
	document.getElementById("Remove_Machinery_FM").style.display = "none";
  }


//------------------------------initialise Fierbase --------------------- -//
 
console.log("Java Script File Load Sucessfully");


  // Initialize Firebase
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
	//const outputHeader=document.querySelector("#farmerHead");
	//const inputTextField=document.querySelector("#farmerName");
	//const saveB=document.querySelector("#saveButton");

	function saveBut(){
		textToSave=document.getElementById("farmerName").value;
		textToSave2=document.getElementById("farmerNIC").value;
		console.log("I ma going to save " + textToSave +" && "+textToSave2+ " to fierstore");
		docRef2.add({
			uname: textToSave,
			NIC:textToSave2
		}).then(function () {
			console.log("Saved Status");
		}).catch(function () {
			console.log("Got an error: In Save");
		});
	}
	 function LoadBut(){
		//farmerHead.innerText="Farmer Name:Is aaaa";
		 docRef.get().then(function(doc){
				if(doc&& doc.exists){
					const myData=doc.data();
					farmerHead.innerText="Farmer Name:"+myData.uname;
				}
		 }).catch(function () {
			console.log("Got an error: In load");
		});
	 }

	 //----------------------sign up funtion start hear--------------//
	 var name="";
	 var uname="";
	 var mobile="";
	 var nic="";
	 var email="";
	 var pwd="";
	 var cpwd="";
	 var address="";
	 var gjsr="";
	 var day="";
	 var month="";
	 var year="";
	 var gender="";


	function SignUp(){
		
		name=document.getElementById("Sname").value;
		 uname=document.getElementById("SUname").value;
		 mobile=document.getElementById("SMNumber").value;
		 nic=document.getElementById("SNIC").value;
		 email=document.getElementById("SEmail").value;
		 pwd=document.getElementById("psw").value;// not encripted
		 cpwd=document.getElementById("cpsw").value;
		 address=document.getElementById("SAddress").value;
		 gjsr=document.getElementById("SGJSR").value;
		 day=document.getElementById("Day").value;
		 month=document.getElementById("Month").value;
		 year=document.getElementById("Year").value;
		 gender = document.getElementById("gender").value;
		
		 
		 
		console.log("I ma going to save name " + name + " L Name "+uname+" mobile "+mobile+" email "+email+"pas: "+pwd+"day :"+day+"gender : "+gender+" to firesstore");
		console.log("Line 002");
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
		else if(address == ""||address==null){
			alert("adress must be filled out");
		}
		else if(gjsr == ""||gjsr==null){
			alert("Govi Jana Sewa Region must be filled out");
		}
		else if(isNaN(day)||(day<1)||(day>31)){
			alert("invalide date");
		}
		else if(isNaN(month) || month<1 || month>12){
			alert("invalide month");
		}
		else if(isNaN(year) || year<1900 || year>2010){
			alert("invalide year");
		}
			else{

		docRef2.add({
			name:name,
			uname:uname,
			Mobile:mobile,
			NIC:nic,
			Email:email,
			password:pwd,
			Address:address,
			GJSR:gjsr,
			Bday:day,
			Bmonth:month,
			Byear:year,
			Gender:gender/**/

		}).then(function () {
			console.log("Saved Status");
			alert("Saved Status Successs");
			document.getElementById("Sname").value = "";
			document.getElementById("SUname").value = "";
			document.getElementById("SMNumber").value="";
			document.getElementById("SNIC").value="";
			document.getElementById("SEmail").value="";
			document.getElementById("psw").value="";
			document.getElementById("cpsw").value="";
			document.getElementById("SAddress").value="";
			document.getElementById("SGJSR").value="";
			document.getElementById("Day").value="";
			document.getElementById("Month").value="";
			document.getElementById("Year").value="";
		}).catch(function () {
			console.log("Got an error: Sign Up");
			document.getElementById("Sname").value = "";
			document.getElementById("SUname").value = "";
			document.getElementById("SMNumber").value="";
			document.getElementById("SNIC").value="";
			document.getElementById("SEmail").value="";
			document.getElementById("psw").value="";
			document.getElementById("cpsw").value="";
			document.getElementById("SAddress").value="";
			document.getElementById("SGJSR").value="";
			document.getElementById("Day").value="";
			document.getElementById("Month").value="";
			document.getElementById("Year").value="";
		});
	}
		console.log("Line 003");
	}
	
	// create element and render farmers
 //var li="";
 //var name="";
 //var usname="";
 //var Mob="";
 //var E_mail="";


 //----------------------Show Farmers funtion start hear--------------//
 
function renderFarmer(doc){
	console.log("Strat Render farmer");
	 var li= document.createElement('tr');
	 var ul= document.getElementById("farmer_list");
     let name= document.createElement('td');
	let usname=document.createElement('td');
	let Mob=document.createElement('td');
    let E_mail=document.createElement('td');

		li.setAttribute('data-id',doc.id);
	
    name.textContent= "Name: "+ doc.data().name;
	usname.textContent="User Name: "+ doc.data().uname;
	Mob.textContent="Mobile: "+ doc.data().Mobile;
	E_mail.textContent= "email: "+doc.data().Email;   
    
  li.appendChild(name);
	li.appendChild(usname);
	li.appendChild(Mob);
	li.appendChild(E_mail);
    
	
	//ul.appendChild(li);
	
	name= doc.data().name;
	usname= doc.data().uname;
	Mob= doc.data().Mobile;
	E_mail= doc.data().Email;

	//li.setAttribute('id',name);*/

	console.log("name: "+name+" Las: "+usname+" Mob: "+Mob+" E mail: "+E_mail);
	//li.appendChild(document.createTextNode(name));
	ul.appendChild(li);

	console.log("End Render farmer");

	}
function Show_Farmer(){
	console.log("Start Show farmer");
	docRef2.get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
		   renderFarmer(doc);
		});
	})
	console.log("End Show farmer");
}

//----------------------Image Slider java script start hear--------------//
var i=0;
var images=[];
var time=3500;

images[0]='Homeimgbase.jpg';
images[1]='Tractor.jpg';
images[2]='Harvesters.jpg';

function changImages(){
	document.slider.src=images[i];
	if(i<images.length-1){
		i++;
	}else{
		i=0;
	}
	setTimeout(changImages,time);
}
window.onload=changImages;
	
	
 //----------------------Login funtion start hear--------------//
 var  Lnic="";
 var Lpsw="";
 var passfromDB="";
 //var Nemail="";
function Login(){

	Lnic=document.getElementById("LNIC").value;
	Lpsw=document.getElementById("Lpsw").value;
	console.log("I ma going to find NIC" + Lnic + " Password : "+Lpsw+" From firesstore");
	//Nemail=Lemail;
	//console.log("Value of Nemail P1 :"+Nemail);
		console.log("Start find farmer");
		try{// try catch still wont work...
		docRef2.where('NIC','==',Lnic).get().then((snapshot)=>{
			snapshot.docs.forEach(doc => {
				 FindPassword(doc);
			});
		})
	}catch(err){
		console.log("invalid NIC");
		document.getElementById("LNIC").value="";
	  document.getElementById("Lpsw").value="";
	}
		
	 
		console.log("End find farmer");
	//	console.log("Value of Nemail  P2 :"+Nemail);
		document.cookie=Lnic;
		var bbb=document.cookie;
		console.log("Value of Nemail  P3 :"+bbb);
		
		
}



function FindPassword(doc){
	passfromDB=doc.data().password;
	console.log("Farmers pass : "+passfromDB);
	if(Lpsw!=passfromDB){
		alert("invalid password");
	}else{
		//openProfileForm();
	//	Show_profile();
		window.open('profile.html', '');
		
		//FindProfiledata(doc);
	}
}
//----------------------Loading data to profile page start hear--------------//
function Show_profile(){
	var SPnic=document.cookie;
	console.log("Value of nnn :"+SPnic);
	//Lemail=document.getElementById("Pname").value;
docRef2.where('NIC','==',SPnic).get().then((snapshot)=>{//where('Email','==',Lemail)
	snapshot.docs.forEach(doc => {
		FindProfiledata(doc);
	});
})
}
function FindProfiledata(doc){
	name= doc.data().name;
	usname= doc.data().uname;
	Mob= doc.data().Mobile;
	E_mail= doc.data().Email;
	address=doc.data().Address;
	gjsr=doc.data().GJSR;
		console.log("Farmers name : "+name+" Last Name : "+usname+" Mobile :"+Mob+" E mail :"+E_mail);
	document.getElementById("Pname").value= " "+name; 
	document.getElementById("Puname").value = " "+usname; 
	document.getElementById("PEmail").value = ""+E_mail; 
	document.getElementById("PMobile").value = ""+Mob;
	document.getElementById("PAddress").value = ""+address;
	document.getElementById("PGJSR").value = ""+gjsr;	
}

//------------------------------Add farming Machinery --------------------- -//
var csnumber="";
var mtype="";
var mbrand="";
var mmodelN="";
var mwidth="";
var mheigth="";
var maverage_eff="";
var AvRent="";

function Add_Machinery(){
  var Mnic=document.cookie;
  var mgjsr=ReturnGJSR();
  console.log("GJSR :"+mgjsr);
  console.log("MNIC :"+Mnic);
  csnumber=document.getElementById("CSNumber").value;
  mtype=document.getElementById("MType").value;
  mbrand=document.getElementById("MBrand").value;
  mmodelN=document.getElementById("MModel_No").value;
  mwidth=document.getElementById("MWidth").value;
  mheigth=document.getElementById("MHeight").value;
  maverage_eff=document.getElementById("MAverage_Eff").value;
  AvRent=document.getElementById("MARent").value;
	console.log("I ma going to add farming machinery " + csnumber + " Type "+mtype+" Brand "+mbrand+" Model No "+mmodelN+"width: "+mwidth+" to firesstore");
	// need to validate and add information to db...
	if (csnumber == ""||csnumber==null) {
		alert("Chassis/Serial Number must be filled out");
		}
	else if(mbrand == ""||mbrand==null){
		alert("Brand must be filled out");
	}else if(mmodelN== ""||mmodelN==null){
		alert("model must be filled out");
	}else if(mwidth == ""||mwidth==null||isNaN(mwidth)) {
		alert("width must be filled out");
	}else if(mheigth == ""||mheigth==null||isNaN(mheigth)) {
		alert("heigth must be filled out");
	}else if(maverage_eff == ""||maverage_eff==null){
		alert("efficincy must be filled out");
	}
	else{
		console.log("Passe Validation");
		docRef3.add({
			NIC:Mnic,
			CSNumber:csnumber,
			Type:mtype,
			Brand:mbrand,
			ModelNumber:mmodelN,
			Width:mwidth,
			Heigth:mheigth,
			AvarageEff:maverage_eff,
			AvailableR:AvRent,
			MGJSR:mgjsr
		}).then(function () {
			console.log("Farming machinery added");
			alert("Farming machinery added");
			document.getElementById("CSNumber").value="";
			//document.getElementById("MType").value="";
			document.getElementById("MBrand").value="";
			document.getElementById("MModel_No").value="";
			document.getElementById("MWidth").value="";
			document.getElementById("MHeight").value="";
			document.getElementById("MAverage_Eff").value="";
			document.location.reload(true);
		}).catch(function () {
			console.log("Got an error: Sign Up");
			document.getElementById("CSNumber").value="";
			//document.getElementById("MType").value;
			document.getElementById("MBrand").value="";
			document.getElementById("MModel_No").value="";
			document.getElementById("MWidth").value="";
			document.getElementById("MHeight").value="";
			document.getElementById("MAverage_Eff").value="";
		});
	}
	
}
//------------------------------Reset farming Machinery --------------------- -//
function Reset_Machinery(){
	document.getElementById("CSNumber").value="";
	document.getElementById("MBrand").value="";
	document.getElementById("MModel_No").value="";
	document.getElementById("MWidth").value="";
	document.getElementById("MHeight").value="";
	document.getElementById("MAverage_Eff").value="";
}
//------------------------------Render farming Machinery //Profile page methods--------------------- -//
function Show_Machinery(){
	var Lnic=document.cookie;
	console.log("Start Show Machinery");
	docRef3.where('NIC','==',Lnic).get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			renderMachinery(doc);
		});
	})
	console.log("End Show Machinery");
}
function renderMachinery(doc){
	console.log("Strat Render Machinery_List");
	 var li= document.createElement('tr');
	 var ul= document.getElementById("Machinery_List");
     let csnumber= document.createElement('td');
	let mtype=document.createElement('td');
	let mbrand=document.createElement('td');
	let mmodelN=document.createElement('td');
	let mwidth=document.createElement('td');
	let mheigth=document.createElement('td'); 
	let maverage_eff=document.createElement('td');
	let mavelabileR=document.createElement('td');


		li.setAttribute('data-id',doc.id);
		
    csnumber.textContent= "CSNmber :"+ doc.data().CSNumber;
	mtype.textContent="   Type :"+ doc.data().Type;
	mbrand.textContent="   Brand : "+ doc.data().Brand;
	mmodelN.textContent="   Model Number : "+ doc.data().ModelNumber;
	mwidth.textContent= "   Width : "+doc.data().Width;   
	mheigth.textContent= "   Heigth: "+doc.data().Heigth;
	maverage_eff.textContent= "  Efficincy: "+doc.data().AvarageEff;   
	mavelabileR.textContent= "  Avalability : "+doc.data().AvailableR;     
    
  li.appendChild(csnumber);
	li.appendChild(mtype);
	li.appendChild(mbrand);
	li.appendChild(mmodelN);
	li.appendChild(mwidth);
	li.appendChild(mheigth);
	li.appendChild(maverage_eff);
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
function CheckUserLogin(){
	var Lnic=document.cookie;
	if (Lnic == ""||Lnic==null) {
		alert("First you must Login to access profile data");
		}
	else{
		Show_profile();
		Show_Machinery();
		console.log("User Already Loged in");
	}
}
function SignOut(){
	var Lnic=document.cookie;
	if (Lnic == ""||Lnic==null) {
		alert("First you must Login");
		}
	else{
		document.cookie="";
		console.log("SignOut Successful ");
		alert("SignOut Successful");
		document.location.reload(true);
	}

}
//------------------------------Edit(Update) Profile data methods //Profile page methods--------------------- -//
var ObjectID="";
function ReturnID(){
	
	var Lnic=document.cookie;
	//console.log("Start Show Machinery");
	docRef2.where('NIC','==',Lnic).get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			 ObjectID=""+doc.id;
			 console.log("ID 01"+ObjectID);
			
		});
		console.log("ID 2"+ObjectID);
		
	})
	console.log("ID 3"+ObjectID);
	//alert("Farmers ID :"+ObjectID);
	//console.log("End Show Machinery");
	return ObjectID;
}
function EditName(){
	var id=ObjectID;
	var New_Name= document.getElementById("Pname").value;
	if(New_Name == ""||New_Name==null){
		alert("invalide Name");
	}else{
	docRef2.doc(id).update({
		name:New_Name
	}).then(function () {
		console.log("Name Chanege successed");
		alert("Name Chanege successed successed");
	    
		//document.location.reload(true);
	}).catch(function () {
		console.log("Got an error: Name Chanege ");
		
	});
}
}
function EditUserName(){
	var id=ObjectID;
	var New_UserName= document.getElementById("Puname").value;
	if(New_UserName == ""||New_UserName==null){
		alert("invalide User Name");
	}else{
	docRef2.doc(id).update({
		uname:New_UserName
	}).then(function () {
		console.log("User Name Chanege successed");
		alert("User Name Chanege successed successed");
	    
		//document.location.reload(true);
	}).catch(function () {
		console.log("Got an error: User Name Chanege ");
		
	});
}
}
function EditMobile(){
	var id=ObjectID;
	var New_Mobile= document.getElementById("PMobile").value;
	if(New_Mobile == ""||New_Mobile==null){
		alert("invalide Mobile");
	}else{
	docRef2.doc(id).update({
		Mobile:New_Mobile
	}).then(function () {
		console.log("Mobile Chanege successed");
		alert("Mobile successed successed");
	    
		//document.location.reload(true);
	}).catch(function () {
		console.log("Got an error: Mobile Chanege ");
		
	});
}
}
function EditEmail(){
	var id=ObjectID;
	var New_Email= document.getElementById("PEmail").value;
	if(New_Email == ""||New_Email==null){
		alert("invalide Email");
	}else{
	docRef2.doc(id).update({
		Email:New_Email
	}).then(function () {
		console.log("Email Chanege successed");
		alert("Email successed successed");
	    
		//document.location.reload(true);
	}).catch(function () {
		console.log("Got an error: Email Chanege ");
		
	});
}
}
function EditAddress(){
	var id=ObjectID;
	var New_Address= document.getElementById("PAddress").value;
	if(New_Address == ""||New_Address==null){
		alert("invalide New Address");
	}else{
	docRef2.doc(id).update({
		Address:New_Address
	}).then(function () {
		console.log("New Address Chanege successed");
		alert("New Address successed successed");
	    
		//document.location.reload(true);
	}).catch(function () {
		console.log("Got an error: Email Chanege ");
		
	});
}
}
function EditGJSR(){
	var id=ObjectID;
	var New_GJSR= document.getElementById("PGJSR").value;
	if(New_GJSR == ""||New_GJSR==null){
		alert("invalide New GJSR");
	}else{
	docRef2.doc(id).update({
		GJSR:New_GJSR
	}).then(function () {
		console.log("New GJSR Chanege successed");
		alert("New GJSR successed successed");
	    
		//document.location.reload(true);
	}).catch(function () {
		console.log("Got an error: GJSR Chanege ");
		
	});
}
}
var DPass="";
function RetuenOldPassword(){
	var Lnic=document.cookie;
	
	docRef2.where('NIC','==',Lnic).get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			 DPass=""+doc.data().password;
			 console.log("db pass 01 :"+DPass);
			
		});
		//console.log("ID 2"+ObjectID);
		
	})
 
}
function ChangePassword(){
	var id=ObjectID;
	
	var oPass=document.getElementById("OPass").value;
	var coPass=document.getElementById("COPass").value;
	var nPass=document.getElementById("NPass").value;
	var cnPass=document.getElementById("CNPass").value;
	var dPass=DPass;
	console.log("old pass 01 :"+oPass);
	console.log("D pass pass 02 :"+dPass);
	
	
	 if(oPass == ""||oPass==null){
		alert("Enter Old Password");
	}
	else if(coPass == ""||coPass==null){
		alert("Enter Confirm old Password");
	}
	else if(nPass == ""||nPass==null){
		alert("Enter New Password");
	}
	else if(cnPass == ""||cnPass==null){
		alert("Enter Confirm New Password");
	}
	else if(oPass != coPass){
		alert("Password doesnt match");
		document.getElementById("OPass").value="";
	    document.getElementById("COPass").value="";
	}
	else if(nPass != cnPass){
		alert("Password doesnt match");
		document.getElementById("NPass").value="";
	    document.getElementById("CNPass").value="";
	}
	else if(dPass != oPass){
		alert("Invalid Password");
		document.getElementById("OPass").value="";
	    document.getElementById("COPass").value="";
	}
	else{
		docRef2.doc(id).update({
			password:nPass
		}).then(function () {
			console.log("New Password Chanege successed");
			alert("New Password Chanege  successed");
		document.getElementById("OPass").value="";
		document.getElementById("COPass").value="";
		document.getElementById("NPass").value="";
	    document.getElementById("CNPass").value="";
			
			//document.location.reload(true);
		}).catch(function () {
			console.log("Got an error: Password Chanege ");
			
		});
		
	}
}

var MiD="";
var Mnic="";
function ReturnMachineryID(){
var rcsnumber=document.getElementById("RCSNumber").value;
if(rcsnumber == ""||rcsnumber==null){
	alert("invalide CS Number");
	
}else{
docRef3.where('CSNumber','==',rcsnumber).get().then((snapshot)=>{
	snapshot.docs.forEach(doc => {
		 MiD=""+doc.id;
		 Mnic=""+doc.data().NIC;
		 console.log("Machinery ID :"+MiD);
		 console.log("Machinery Owner NIC :"+Mnic);
		 document.getElementById("RMID").value=MiD;
	});
	//console.log("ID 2"+ObjectID);
	
})
}
}
function RemoveMachinery(){
	var id=MiD;
	var Lnic=document.cookie;
	console.log("Owner NIC :"+Lnic);
	var mnic=Mnic;
	if(id== ""||id==null){
		alert("Please enter CS Number");
	}
	else if(mnic!= Lnic){
		alert("You Cannot remove Machinery you dont own");
		document.getElementById("RCSNumber").value="";
		document.getElementById("RMID").value="";
	}
	else{
		docRef3.doc(id).delete();
		alert("Remove Machinery Successed");
		
	}
	//document.location.reload(true);
}



//------------------------------------- --------------------------Machiery Rent Page Methods-------------- -//

function ShowALL_Machinery(){
	console.log("Start Show All Machinery");
	docRef3.where('AvailableR','==','Yes').get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			renderMachinery(doc); //---------------write under Profile page methods--------//
		});
	})
	console.log("End Show All Machinery");
	
}
var gjsr="";
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
//function SaveVlaue(doc)
function ShowALL_Machinery_InMyRegion(){
	var va=ReturnGJSR();
	if(va == ""||va==null){
		alert("You must first login to see Machinery in your region ");
	}else{
	console.log("Start Show All Machinery");
	docRef3.where('MGJSR','==',va).where('AvailableR','==','Yes').get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			renderMachinery(doc); //---------------write under Profile page methods--------//
		});
	})
	console.log("End Show All Machinery");
}
}

//------------------------------------- --------------------------Machiery Rent Page, Rent popup Methods-------------- -//

function Rent(){
	var Lnic=document.cookie;
	var Rcsnumber=document.getElementById("RCSNumber").value;
	var Rdate=document.getElementById("Rdate").value;
	var RStime=document.getElementById("RStime").value;
	var REtime=document.getElementById("REtime").value;
	var ownNic=ReturnOwnNIC();
	console.log("Ownern NIC in Rent:"+ownNic);
	if (Rcsnumber == ""||Rcsnumber==null) {
		alert("Chassis/Serial Number must be filled out");
		}
	else if(Rdate == ""||Rdate==null){
		alert("Date must be filled out");
	}
	else if(RStime == ""||RStime==null){
		alert("Time must be filled out");
	}
	else if(REtime == ""||REtime==null){
		alert("Time must be filled out");
	}
	else if(ownNic == ""||ownNic==null){
		alert("Invalid Chassis/Serial Number ");
		document.getElementById("RCSNumber").value="";
	}
	else if(Lnic == ""||Lnic==null){
		alert("You must first login to rent a Machinery ");
		
	}else{
		docRef_Rent.add({
			
			CSNumber:Rcsnumber,
			OwnerNIC:ownNic,
			RenterNIC:Lnic,
			Date:Rdate,
			Start_Time:RStime,
			End_Time:REtime,
			
	}).then(function () {
		console.log("Farming machinery renting successed");
		alert("Farming machinery renting successed");
	    Rcsnumber=document.getElementById("RCSNumber").value="";
	    Rdate=document.getElementById("Rdate").value="";
		RStime=document.getElementById("RStime").value="";
		REtime=document.getElementById("REtime").value="";
		document.getElementById("RMNic").value="";
		//document.location.reload(true);
	}).catch(function () {
		console.log("Got an error: Rent Machinery");
		Rcsnumber=document.getElementById("RCSNumber").value="";
	    Rdate=document.getElementById("Rdate").value="";
	    RStime=document.getElementById("RStime").value="";
		REtime=document.getElementById("REtime").value="";
		document.getElementById("RMNic").value="";
	});
}
}
function Reset_Machinery_rent(){
	Rcsnumber=document.getElementById("RCSNumber").value="";
	    Rdate=document.getElementById("Rdate").value="";
	    RStime=document.getElementById("RStime").value="";
		REtime=document.getElementById("REtime").value="";
		document.getElementById("RMNic").value="";
}

var ownNIC="";
var ownName="";
var ocsnumber="";
function ReturnOwnNIC(){
	ocsnumber=document.getElementById("RCSNumber").value;
	console.log("Start find owner");
	docRef3.where('CSNumber','==',ocsnumber).get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			 ownNIC=""+doc.data().NIC;
			 console.log("owner NIC"+ownNIC);
			 document.getElementById("RMNic").value=ownNIC;

			
		});
		console.log("Owner Nic"+ownNIC);
		//alert("Owner Nic :"+ownNIC);
	})
	console.log("owner NIC"+ownNIC);
	console.log("End Show Machinery");
	return ownNIC;

}

function Check_Rent_Availability(){ 
	var Vcsnumber=document.getElementById("RCSNumber").value;
	var Rdate=document.getElementById("Rdate").value;
	var RStime=document.getElementById("RStime").value;
	var REtime=document.getElementById("REtime").value;
	var ddate="";
	var dstime="";
	var detime="";
	var availa=0;
	
	
	docRef_Rent.where('CSNumber','==',Vcsnumber).where('Date','==',Rdate).get().then((snapshot)=>{
		snapshot.docs.forEach(doc => {
			 ddate=""+doc.data().Date;
			 dstime=""+doc.data().Start_Time;
			 detime=""+doc.data().End_Time;
			 console.log("D date :"+ddate);
			 if(ddate!=null||ddate!=""){
				availa=1;
			 }else{
			 availa=0;
			}
			 
			
		});
		console.log("Availa :"+availa);
		if(availa==0){
			alert("Your requested Machinery is : Available On that day");
		}else{
			alert("Your requested Machinery is : Not Available On that day");
			//document.getElementById("Rdate").value="";
		}

	})
	
	
}

//------------------------------------- --------------------------Admin Page, Methods-------------- -//
