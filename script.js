const modal = document.querySelector(".modal-overlay");
const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
	modalContainer.innerHTML= "";
	modal.classList.remove("open-modal");
	location.reload();
})

const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function() {
	addFormCountry();
});

const filterBtn= document.querySelector(".filter-btn");
filterBtn.addEventListener('click', function() {
	addFormFilter();
});


const addFormFilter=() =>{
	modal.classList.add("open-modal");
	const form = document.createElement('form');
	form.classList.add('filter-form');
	form.innerHTML = ` <label class="filter-label" for="date">DATA FILTER</label>
				<input type="date" 
				name="filter-date"
				id="filter-date"
				value= "2020-12-21"
				min= "2010-01-01" max= "2020-12-31" class="type1">
	  <input type="submit" value="FILTER" class="saugoti-btn" />`;
	modalContainer.appendChild(form);
}

const addFormCountry=() => {
	modal.classList.add("open-modal");
	const form = document.createElement('form');
	form.classList.add('add-form');
	form.setAttribute('id', "form-add-city")
	form.innerHTML = ` <h2 class="modal-header"> Pridėti šalį </h2>
	  <label for="name">Pavadinimas</label>
	  <input type="text" id="country_name" name="name" class="type1" />
	  <label for="area">Užimamas plotas</label>
	  <input type="number" id="country_area" name="area" class="type1" />
	  <label for="population">Gyventojų skaičius</label>
	  <input type="number" id="country_population" name="population" class="type1" />
	  <label for="calling_code">Šalies tel. kodas</label>
	  <input type="text" id="country_code" name="calling_code" class="type1" />
	  <input type="submit" value="SAUGOTI" class="saugoti-btn"/>`;
	modalContainer.appendChild(form);
}