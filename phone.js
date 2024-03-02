const loadPhone = async (searchPhone, isShowAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
  const data = await res.json();
  const phones = data.data;

  displayPhones(phones, isShowAll);
}



const displayPhones = (phones, isShowAll) => {
  console.log(phones);
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';
  const showAll = document.getElementById('show-all');
  if(phones.length > 12 && !isShowAll){
    showAll.classList.remove('hidden');
  }
  else{
    showAll.classList.add('hidden');
  };

  if(!isShowAll){
    phones = phones.slice(0,12);
  };
  

  phones.forEach(phone =>{
    console.log(phone);
    const phoneCard = document.createElement('div');
  phoneCard.classList = `card w-96 bg-gray-100 shadow-xl`;
  phoneCard.innerHTML = `<figure><img src="${phone.image}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
  `;
  phoneContainer.appendChild(phoneCard);
  });
  toggleSearchButton(false);
}

const handleSearch = (isShowAll) =>{
  toggleSearchButton(true);
  const inputField = document.getElementById('input-field');
  const searchPhone = inputField.value;

  loadPhone(searchPhone, isShowAll);
}


const toggleSearchButton = (isLoading) =>{
  const loadinSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadinSpinner.classList.remove('hidden');
  }
  else{
    loadinSpinner.classList.add('hidden');
  }
}

const showAllPhone = () =>{
  handleSearch(true);
}



loadPhone()