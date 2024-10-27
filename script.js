// script that spawns header and footer to all pages
document.querySelector("header").innerHTML = `
<nav>
    <ul>
		<li class="logo" style="float:left"><a href="/">
		<img src="/resources/images/placeholder-logo.png" alt="sz5ylv1a" height="40" type="img/png">
		</a></li>
		<li class="drop">
		<button onclick="dropDown()" class="btn dropbtn">&#9776;</button>
			<div id="droppp" class="dropmenu">
				<a href="/">Home</a>
				<a href="/about.html">About Me</a>
				<a href="/socials.html">Socials</a>
				<a class="droplastoption" href="/changelog.html">Changelog</a>
			</div>
		</li>
		<!-- <li class="darkbtn"><button onclick="darkMode()" class="btn darktoggle"><i class="fa-solid fa-moon"></i></button></li> -->
		<li class="desknav"><a href="/changelog.html">Changelog</a></li>
		<li class="desknav"><a href="/socials.html">Socials</a></li>
		<li class="desknav"><a href="/about.html">About Me</a></li>
		<li class="desknav"><a href="/">Home</a></li>
	</ul>
</nav>
`;
document.querySelector("footer").innerHTML = `
<div class="currentver">v0.1.1 &bull; Last updated: 10/27/2024 &bull; <a href="https://github.com/sz5ylv1a/sz5ylv1a.github.io" target="_blank">Source Code</a></div>
<div class="fakecrdate">sz5ylv1a &copy; 2017-<year id="currentYear"></year></div>
`;


// mobile dropdown menu
function dropDown() {
	document.getElementById("droppp").classList.toggle("show");
}
	window.onclick = function(event) {
		if (!event.target.matches('.dropbtn')) {
			var dropdowns = document.getElementsByClassName("dropmenu");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				}
			}
		}
	}

// automatic current year indicator thing for footer
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year;