function handleRequest(tbodyList) {
    axios
        .get("/api/v1/media/all")
        .then(function (response) {
            let medias = response.data
            if(medias){
                console.log(medias);
                medias.forEach(element => {
                    let name = element.name;
                    let video = element.videofilename;
                    let subtitle = element.subtitlefilename;

                    let childElement = `<tr> <td> ${name} </td> <td><video preload='auto' controls width='320' height='240' crossorigin="anonymous"> <source src= "public/videos/${video}" />; Your browser doest not support video tag <track default kind="subtitles" srclang="en" src="public/subtitles/${subtitle}" /> </td> </tr>`

                    tbodyList.innerHTML += childElement;

                });

            }
            // { medias && medias.map(media =>{
                
            //         <tr>
            //             <td>{media.name}</td>
            //             <td>{media.videos.map(video =>{
            //                 {console.log(video)}
            //                 return (
            //                     <video preload='auto' controls width='320' height='240' crossorigin="anonymous">
            //                         <source src= {`${BACKEND_URI}${video}`} />; Your browser doest not support video tag
            //                         <track default kind="captions" srclang="en" src={`${BACKEND_URI}/public/subtitle/subtitle.vtt`} />
            //                     </video>
            //                 )
            //             })}</td>
            //         </tr>
            // })} 
            console.log(response.data[0].name);
        });
}

// const tbodyList = document.getElementById("tbodyList"); 
// handleRequest(tbodyList);


function checkFileType(e) {
    let video = document.getElementById("file");
    let error = document.getElementById("error");
    let filePath = video.value;
    let ext = filePath.split('.').pop();

    if (ext !== "mp4" && ext !== "mkv") {
        error.innerHTML = "Please select file with .mp4 or .mkv extension";
        video.value = video.defaultValue;
        e.preventDefault();
    } else {
        error.innerHTML = "";
    }

}
function addSubtitle() {

    const startHH = document.getElementById("startHH").value;
    const startMM = document.getElementById("startMM").value;
    const startSS = document.getElementById("startSS").value;
    const startMS = document.getElementById("startMS").value;
    const endHH = document.getElementById("endHH").value;
    const endSS = document.getElementById("endSS").value;
    const endMM = document.getElementById("endMM").value;
    const endMS = document.getElementById("endMS").value;
    const currline = document.getElementById("currline").value;

    const scriptError = document.getElementById("scriptError");

    // Start time
    // if(!checkHour(startHH)){
    //     return;
    // }
    // if(!checkMinSec(startMM,true)){
    //     return;
    // }
    // if(!checkMinSec(startSS,false)){
    //     return;
    // }
    // if(!checkMiliSec(startMS)){
    //     return;
    // }

    // // End time 
    // if(!checkHour(endtHH)){
    //     return;
    // }
    // if(!checkMinSec(endMM,true)){
    //     return;
    // }
    // if(!checkMinSec(endSS,false)){
    //     return;
    // }
    // if(!checkMiliSec(endMS)){
    //     return;
    // }


    let finalStr = `${startHH}:${startMM}:${startSS}.${startMS} --> ${endHH}:${endMM}:${endSS}.${endMS}\n${currline}\n`;
    console.log(finalStr);

    document.getElementById("finalStr").value += finalStr + "\n";

}

function checkHour(time) {
    if (isNaN(time)) {
        scriptError.innerHTML = "Value must be number ";
        return false;
    } else if (time > 23 || time < 0) {
        scriptError.innerHTML = "Hour must be in range of 0 to 23";
        return false;
    } else {
        scriptError.innerHTML = "";
        return true;
    }
}

function checkMinSec(time, isMin) {
    if (isNaN(time)) {
        scriptError.innerHTML = "Value must be number ";
        return false;
    } else if (time > 59 || time < 0) {
        scriptError.innerHTML = (isMin ? "Min" : "Sec") + " must be in range of 0 to 59";
        return false;
    } else {
        scriptError.innerHTML = "";
        return true;
    }
}

function checkMiliSec(time) {
    if (isNaN(time)) {
        scriptError.innerHTML = "Value must be number ";
        return false;
    } else if (time > 999 || time < 0) {
        scriptError.innerHTML = "MiliSec must be in range of 0 to 999";
        return false;
    } else {
        scriptError.innerHTML = "";
        return true;
    }
}