/* 
  Author(s): Jacy Yu,
             Justin Yin,
             Yi Yang,
             Cameron Fritz
  
  Date Created: 3/3/2020
  Last Updated: 3/17/2020
  
  File: dressme.js
  Purpose: Event listeners and scripts to communicate with the dressme server
*/

// Makes sure that event listeners are added after the web page is loaded
window.onload = function() {
    if (document.getElementById("upload")) {
        document.getElementById("upload").style.display = "None";
    }
    if (document.getElementById("chooseOutfit")) {
        document.getElementById("chooseOutfit").style.display = "None";
    }
}

// Changes display to allow users to upload pictures
function addClothes(user) {
    document.getElementById("upload").style.display = "inline";
    document.getElementById("chooseOutfit").style.display = "None";
    document.getElementById("show").style.display = "None";
    document.querySelector(".pictures").style.display = "None";
}

// Displays the outfit picker and displays the outfit picked
function displayOutfitChoices(user) {
    sendGet("Outfits");
    document.getElementById("chooseOutfit").style.display = "inline";
    document.querySelector("#chosenOutfit").innerHTML = "None";
    removeDomain = user.substring(0, user.lastIndexOf("@"));
    removeSpecialChar = removeDomain.replace(/@[^@]+$/, '');
    user = removeSpecialChar;

	// Retrieves the images for the choosen outfit and displays them
    retrieveBranchNames(user)
    document.getElementById("getOutfit").addEventListener("click", retrieveImages => {
        selected = document.getElementById("chosenOutfit")
        selectedVal = selected.options[selected.selectedIndex].value
        var allPictures = document.querySelector(".pictures");
        allPictures.innerHTML = "";
        retrieveOutfits(user, selectedVal).then(function(result) {
            console.log(result)
            for (i = 0; i < result.length; i++) {
                image = result[i];
                var picture = document.createElement("img");
                picture.src = image;
                picture.className = "img";
                picture.style.borderColor = "lightgray";
                picture.style.borderStyle = "solid";
                picture.style.borderWidths = "1px";
                allPictures.appendChild(picture);
            }
        }).catch(function(error) {
            console.log(error)
        })
    })
}

// Event listeners that call a request chain for getting the proper clothing
function allButton(user) {
    var allPictures = document.querySelector(".pictures");
    allPictures.innerHTML = "";
    sendGet("All");

    removeDomain = user.substring(0, user.lastIndexOf("@"));
    removeSpecialChar = removeDomain.replace(/@[^@]+$/, '');
    user = removeSpecialChar;


    retrieve(user, "all").then(function(result) {
        for (i = 0; i < result.length; i++) {
            image = result[i];
            var picture = document.createElement("img");
            picture.src = image;
            picture.className = "img"
            allPictures.appendChild(picture);
        }
    }).catch(function(error) {
        console.log(error)
    })
}

function shirts(user) {
    var shirtPictures = document.querySelector(".pictures");
    shirtPictures.innerHTML = "";
    sendGet("Shirts");

    removeDomain = user.substring(0, user.lastIndexOf("@"));
    removeSpecialChar = removeDomain.replace(/@[^@]+$/, '');
    user = removeSpecialChar;


    retrieve(user, "shirts").then(function(result) {
        for (i = 0; i < result.length; i++) {
            image = result[i];
            var picture = document.createElement("img");
            picture.src = image;
            picture.className = "img"
            shirtPictures.appendChild(picture);
        }
    }).catch(function(error) {
        console.log(error)
    })
}

function pants(user) {
    var pantPictures = document.querySelector(".pictures");
    pantPictures.innerHTML = "";
    sendGet("Pants");

    removeDomain = user.substring(0, user.lastIndexOf("@"));
    removeSpecialChar = removeDomain.replace(/@[^@]+$/, '');
    user = removeSpecialChar;


    retrieve(user, "pants").then(function(result) {
        for (i = 0; i < result.length; i++) {
            image = result[i];
            var picture = document.createElement("img");
            picture.src = image;
            picture.className = "img"
            pantPictures.appendChild(picture);
        }
    }).catch(function(error) {
        console.log(error)
    })
}

function outerwear(user) {
    var outerwearPictures = document.querySelector(".pictures");
    outerwearPictures.innerHTML = "";
    sendGet("Outerwear");

    removeDomain = user.substring(0, user.lastIndexOf("@"));
    removeSpecialChar = removeDomain.replace(/@[^@]+$/, '');
    user = removeSpecialChar;


    retrieve(user, "outerwear").then(function(result) {
        for (i = 0; i < result.length; i++) {
            image = result[i];
            var picture = document.createElement("img");
            picture.src = image;
            picture.className = "img";
            outerwearPictures.appendChild(picture);
        }
    }).catch(function(error) {
        console.log(error)
    })
}

function accessories(user) {
    var accessPictures = document.querySelector(".pictures");
    accessPictures.innerHTML = "";
    sendGet("Accessories");

    removeDomain = user.substring(0, user.lastIndexOf("@"));
    removeSpecialChar = removeDomain.replace(/@[^@]+$/, '');
    user = removeSpecialChar;


    retrieve(user, "accessories").then(function(result) {
        for (i = 0; i < result.length; i++) {
            image = result[i];
            var picture = document.createElement("img");
            picture.src = image;
            picture.className = "img"
            accessPictures.appendChild(picture);
        }
    }).catch(function(error) {
        console.log(error)
    })
}

function footwear(user) {
    var footPictures = document.querySelector(".pictures");
    footPictures.innerHTML = "";
    sendGet("Footwear");

    removeDomain = user.substring(0, user.lastIndexOf("@"));
    removeSpecialChar = removeDomain.replace(/@[^@]+$/, '');
    user = removeSpecialChar;


    retrieve(user, "footwear").then(function(result) {
        for (i = 0; i < result.length; i++) {
            image = result[i];
            var picture = document.createElement("img");
            picture.src = image;
            picture.className = "img"
            footPictures.appendChild(picture);
        }
    }).catch(function(error) {
        console.log(error)
    })
}

function hats(user) {
    var hatPictures = document.querySelector(".pictures");
    hatPictures.innerHTML = "";
    sendGet("Hats");

    removeDomain = user.substring(0, user.lastIndexOf("@"));
    removeSpecialChar = removeDomain.replace(/@[^@]+$/, '');
    user = removeSpecialChar;


    retrieve(user, "hats").then(function(result) {
        for (i = 0; i < result.length; i++) {
            image = result[i];
            var picture = document.createElement("img");
            picture.src = image;
            picture.className = "img"
            hatPictures.appendChild(picture);
        }
    }).catch(function(error) {
        console.log(error)
    })
}

function others(user) {
    var otherPictures = document.querySelector(".pictures");
    otherPictures.innerHTML = "";
    sendGet("Others");

    removeDomain = user.substring(0, user.lastIndexOf("@"));
    removeSpecialChar = removeDomain.replace(/@[^@]+$/, '');
    user = removeSpecialChar;


    retrieve(user, "others").then(function(result) {
        for (i = 0; i < result.length; i++) {
            image = result[i];
            var picture = document.createElement("img");
            picture.src = image;
            picture.className = "img"
            otherPictures.appendChild(picture);
        }
    }).catch(function(error) {
        console.log(error)
    })
}

// Sends the request to the server
function sendGet(clothType) {
    document.getElementById("upload").style.display = "None";
    document.getElementById("chooseOutfit").style.display = "None";
    document.querySelector(".pictures").innerHTML = "";
    document.getElementById("show").style.display = "inline";
    document.querySelector(".pictures").style.display = "inline";
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", updateShow);
    xhr.open("GET", "http://localhost:8080/display?clothType=" + clothType);
    xhr.send();
}

// Updates the show with the response
function updateShow() {
    let display = document.getElementById("show");
    display.innerHTML = this.response;
}

// Function for uploading the image to the database
function upload(user, selectedVal, image, imageName) {
    // Format parameters
    var rawImageName = imageName.replace(/\..+$/, '')
    var storageRef = firebase.storage().ref("users/" + user + "/" + selectedVal + "/" + imageName);

    // Checks if image already exists
    if (imageName in firebase.storage().ref("users/" + user + "/all/")) {
        var uploadTask = storageRef.put(image);
    } else {
        var uploadTask = storageRef.put(image);
        var storageRef = firebase.storage().ref("users/" + user + "/all/" + imageName);
        var uploadTask = storageRef.put(image);
    }

    console.log(user, selectedVal, image, imageName)
        // Option to add later: fixing unintended overwrite when using 2 of the same image names

    uploadTask.on("state_changed", function(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + " done");
    }, function(error) {
        console.log(error.message);
    }, function() {
        // Strip email
        removeDomain = user.substring(0, user.lastIndexOf("@"));
        removeSpecialChar = removeDomain.replace(/@[^@]+$/, '')
        user = removeSpecialChar

        storageRef.getDownloadURL().then(function(downloadURL) {
            var postKey = firebase.database().ref(user + "/" + selectedVal + "/" + rawImageName).key;
            var updates = {};
            var postData = {
                url: downloadURL,
                name: imageName
            };

            // Check if image already exists in all folder
            var ref = firebase.database().ref()
            ref.child(user).once("value", gotUserData);

            function gotUserData(snapshot) {
                // If image doesn't exist, create the branches
                if (!snapshot.exists()) {
                    updates["/" + user + "/" + selectedVal + "/" + postKey] = postData;
                    updates["/" + user + "/all/" + postKey] = postData;
                    firebase.database().ref().update(updates)
                }
                // Go through each branch and check if the image name already exists
                snapshot.forEach(userSnapshot => {
                    if (rawImageName === userSnapshot.key) {
                        updates["/" + selectedVal + "/" + postKey] = postData;
                        firebase.database().ref().update(updates)
                    } else {
                        updates["/" + user + "/all/" + postKey] = postData;
                        firebase.database().ref().update(updates)
                        updates["/" + user + "/" + selectedVal + "/" + postKey] = postData;
                        firebase.database().ref().update(updates)
                    }
                })
            }
        });
    });
}

// Function for retrieving an image from the database
function retrieve(user, choice) {
    return new Promise(function(resolve, reject) {
        try {
            var db = firebase.database().ref().child(user + "/" + choice);
            console.log(db)
            db.once("value", pics => {
                if (!pics.exists()) {
                    resolve([])
                } else {
                    var picHtml = []
                    pics.forEach(pic => {
                        picHtml.push(pic.val().url)
                    })
                    resolve(picHtml)
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}

// Function for retrieving the names of the outfits to allow the user to select from outfits they own
function retrieveBranchNames(user) {
    return new Promise(function(resolve, reject) {
        var db = firebase.database().ref().child(user + "/outfits/");
        let branches = []
        db.once("value", function(snapshot) {
            snapshot.forEach(branchSnapshot => {
                branches.push(branchSnapshot.key)
            })
            resolve(branches)
        })
    }).then(function(value) {
        var allOutfits = document.querySelector("#chosenOutfit");
        for (i = 0; i < value.length; i++) {
            branch = value[i];
            var newBranch = document.createElement("option");
            newBranch.value = branch
            newBranch.text = branch
            allOutfits.appendChild(newBranch);
        }
    })
}

// Function for retrieving the outfit and its associated images
function retrieveOutfits(user, choice) {
    return new Promise(function(resolve, reject) {
        try {
            var db = firebase.database().ref().child(user + "/outfits/" + choice);
            db.on("value", pics => {
                if (!pics.exists()) {
                    resolve([])
                } else {
                    var picHtml = []
                    pics.forEach(pic => {
                        picHtml.push(pic.val().url)
                    })
                    resolve(picHtml)
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}