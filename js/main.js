var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById ("siteUrl");
var sitesInfo=[];


if (localStorage.getItem("sitesInfo")==null){
    sitesInfo=[];
}else{
    sitesInfo=JSON.parse(localStorage.getItem("sitesInfo"))
    displaySite(sitesInfo)
}
function addInfo(){
    if (validateSiteName()==true) {

        if(validateSiteUrl()==true){
var sites={
    name:siteName.value,
    url:siteUrl.value,
}

sitesInfo.push(sites);

displaySite(sitesInfo);
clearForm();
localStorage.setItem("sitesInfo",JSON.stringify(sitesInfo))
}else{
    alert(`Site Name or Url is not valid, Please follow the rules below :

    Site name must contain at least 3 characters
    Site URL must be a valid one`)
}
    }
}

function clearForm(){
    siteName.value="";
    siteUrl.value="";
    
}
function displaySite(sites){
var cartona="";
for(var i=0;i<sites.length;i++){
    cartona += `<tr>
    <td>${i+1}</td>
    <td>${sites[i].name}</td>
    <td>
        <button class="btn btn-primary btn-md"> <i class="fa-solid fa-eye pe-2"></i>Visit</button>
    </td>
    <td>
      <button onclick="deleteSite(${i})" class="btn btn-danger btn-md"><i class="fa-solid fa-trash-can"></i> Delete</button>
    </td>
</tr>`;
}
document.getElementById("hii").innerHTML=cartona;

}
function deleteSite(index){
    sitesInfo.splice(index,1) 
    localStorage.setItem("sitesInfo",JSON.stringify(sitesInfo))

    displaySite(sitesInfo)
}

function validateSiteName(){
    var regex = /^[A-Za-z]{3,}$/
    if(regex.test(siteName.value)==true){
        
        siteName.style.border="none"

        return true
    }else{
        siteName.style.border="2px solid red"
      
        return false
    }
}
function validateSiteUrl(){
    var regex = /^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/
    if(regex.test(siteUrl.value)==true){
        
        siteUrl.style.border="none"

        return true
    }else{
        siteUrl.style.border="2px solid red"
      
        return false
    }
}

