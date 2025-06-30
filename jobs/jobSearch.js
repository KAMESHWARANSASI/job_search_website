const categories = Array.from(jCategory);

document.getElementById("searchBar").addEventListener("keyup", (e) => {
    const seachData = e.target.value.toLowerCase();

    const FilterData = categories.filter((item) => {


        return item.title.toLowerCase().includes(seachData);
    });

    displayItems(FilterData);
});

function displayItems(items) {
    const rootElement = document.getElementById('root');
    rootElement.innerHTML = "";

    items.forEach((item) => {
        const { index, image, title, rate, av } = item;
        const jList = document.createElement('div');
        jList.className = "jList";
        jList.innerHTML = `
                 <img src="${image}" alt="">
                <h3>${title}</h3>
                <p>${rate}</p>
                <span id="key">${av}</span>`;

        rootElement.appendChild(jList);

        jList.addEventListener("click", () => {
            console.log("...............")
            window.location.href = `../jobs/job-detail.html?id=${index}`;
        });
    });
};
