const loadPhone = async(searchText,isshowall)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displyPhone(phones,isshowall)

}

const displyPhone = (phones,isShowAll) =>{
    // console.log(phones)
    const phoneContainer = document.getElementById('phone-container');
    // clear container when a data call it's show .again search a new data then previous data remove
    phoneContainer.innerText='';
    const showAll = document.getElementById('show-all-card');
    if(phones.length>12 && !isShowAll){
        showAll.classList.remove('hidden');
    }
    else{
        showAll.classList.add('hidden');
    }
    if(isShowAll){
        phones=phones.slice(0,12);
    }
    
    phones.forEach(phone =>{
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList=`card w-96 bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show details</button>
                      </div>
                    </div>

        `;
        phoneContainer.appendChild(phoneCard);

    });
    spinner(false);
}

function handleClick (isshowall){
    // console.log('hi')
    spinner(true);
    const inputFiled = document.getElementById('input-filed');
    const inputText =  inputFiled.value ;
    console.log(inputText);
    loadPhone(inputText,isshowall)

}

const spinner = (isloading)=>{
    const loading = document.getElementById('loading-spinner');
    if(isloading){
        loading.classList.remove('hidden');
    }
    else{
        loading.classList.add('hidden');

    }

}

const showAll=()=>{
    handleClick(true)
}

const handleShowDetails =async(id)=>{
    console.log('gurar dim',id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    console.log(data)
}


// loadPhone();