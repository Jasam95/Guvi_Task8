//mainPage items
  const menuItems = [
  { text: "Kathak", url: "kathak.jpg" },
  { text: "Bengal Dance", url: "bengal dance.jpg" },
  { text: "Bhangra Dance", url: "bhangra.jpg" },
  { text: "Manipuri Dance", url: "Manipuri_Dance.jpg" },
  { text: "Kuchupudi", url: "kuchipudi.jpg" }
];


  const itemsPerPage = 1;
  const totalPages = menuItems.length;
  let currentPage = 0;

// Create containers

    const flexContainer = document.createElement('div');
    flexContainer.id="flex-container";
    document.body.appendChild(flexContainer);

    const imageContainer = document.createElement('div');
    imageContainer.id="image-container";
    flexContainer.appendChild(imageContainer);

    const descContainer = document.createElement('div');
    descContainer.id="description";
    flexContainer.appendChild(descContainer);


    const paginationContainer = document.createElement('div');
    paginationContainer.id="pagination";
    document.body.appendChild(paginationContainer);

//intial load page
    function displaydefault(){
    imageContainer.innerHTML = "";
    const img = document.createElement("img");
    img.src = "main.png";
    imageContainer.appendChild(img);
    
    descContainer.innerHTML="";
    const description = document.createElement("h3");
    description.textContent="Event Dance List";
    descContainer.appendChild(description);

    const unOrderedList = document.createElement("ol");
    descContainer.appendChild(unOrderedList);

// Generate <li><a>...</a></li>
    menuItems.forEach(item => {
    const listTag = document.createElement("li");
    const anchorTag = document.createElement("a");
    anchorTag.href = item.url;
    anchorTag.textContent = item.text;
    anchorTag.target= "_blank";

    listTag.appendChild(anchorTag);
    unOrderedList.appendChild(listTag);
  });
}

// pagination using DOM  
    function setupPagination() {
      paginationContainer.innerHTML = '';

//First Button
      const firstBtn = document.createElement('button');
      firstBtn.textContent = 'First';
      firstBtn.className = 'page-btn';
      firstBtn.onclick = () => {
          displayImage(menuItems[0],0);     
      };
      paginationContainer.appendChild(firstBtn);


// Prev button
      const prevBtn = document.createElement('button');
      prevBtn.textContent = '<<';
      prevBtn.className = 'page-btn';
      prevBtn.onclick = () => {
        if (currentPage > 0) {
          currentPage--;
          displayImage(menuItems[currentPage],currentPage);     
        }
      };
      paginationContainer.appendChild(prevBtn);

// Page number buttons
      for (let i = 0; i <= totalPages-1; i++) {
        const btn = document.createElement('button');
        btn.textContent = i+1;
        btn.className = 'page-btn';
        btn.addEventListener('click', () => {
          currentPage = i;
         displayImage(menuItems[i], i);
        });
        paginationContainer.appendChild(btn);
      }

// Next button
      const nextBtn = document.createElement('button');
      nextBtn.textContent = '>>';
      nextBtn.className = 'page-btn';
      nextBtn.onclick = () => {
        if (currentPage < totalPages) {
          displayImage(menuItems[currentPage],currentPage);
          currentPage++;       
        }
      };
      paginationContainer.appendChild(nextBtn);

//Last Button
      const lastBtn = document.createElement('button');
      lastBtn.textContent = 'Last';
      lastBtn.className = 'page-btn';
      lastBtn.onclick = () => {
          displayImage(menuItems[totalPages-1],totalPages-1);  
          currentPage =   totalPages-1;
      };
      paginationContainer.appendChild(lastBtn);

      
    function displayImage(item, index) {
    imageContainer.innerHTML = "";
    const img = document.createElement("img");
    img.src = item.url;
    imageContainer.appendChild(img);

    descContainer.innerHTML="";
    const headedescr = document.createElement("h3");
    headedescr.textContent =item.text;
    descContainer.appendChild(headedescr);

    const description = document.createElement("p");
    description.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga ex accusamus, vitae quidem totam ipsa reprehenderit a earum. Commodi voluptatibus facere perspiciatis? Officiis aspernatur vel alias necessitatibus consequuntur unde.";
    descContainer.appendChild(description);
    highlightPage(index);
    }

}

 function highlightPage(index) {
      const buttons = paginationContainer.querySelectorAll('.page-btn');
      buttons.forEach(btn => {      
        if ((btn.textContent)-1 == index) {
          btn.classList.add('activebutton');
        }else{
          btn.classList.remove('activebutton');
        }
        if((btn.textContent == '>>' && index == totalPages -1) 
            || (btn.textContent == '<<' && index==0)){
            btn.classList.add('cursorpoint');
        }else{
            btn.classList.remove('cursorpoint');
        }
      });
    }
    
    // Init
    displaydefault();
    setupPagination();
