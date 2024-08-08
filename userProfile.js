let profileContainer = document.getElementById("profileContainer");
profileContainer.classList.add("d-flex", "flex-column", "justify-content-center");

let imgContainer = document.createElement("div");
profileContainer.appendChild(imgContainer);

let profileImageEl = document.createElement("img");
profileImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png";
profileImageEl.classList.add("profile-img");
imgContainer.appendChild(profileImageEl);

let profileNameEl = document.createElement("h1");
profileNameEl.textContent = "VENKATESH YELISETTI";
profileNameEl.classList.add("profile-name");
profileContainer.appendChild(profileNameEl);

let age = document.createElement("p");
age.classList.add("age");
age.textContent = "age : 22";
profileContainer.appendChild(age);