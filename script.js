const sortBtns = document.querySelectorAll(".job-id > *");
const sortItem = document.querySelectorAll(".job-container > *");

sortBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        sortBtns.forEach((button) => {

            button.classList.remove("active")
        });

        btn.classList.add("active")
        console.log(btn)
        // filter items

        const targetData = btn.getAttribute("data-target");
        console.log(targetData);
        sortItem.forEach((item) => {
            console.log(item);

            // item.addEventListener("click", () => {
            //     console.log("...............")
            //     window.location.href = `./jobs/job-detail.html?id=${index}`;
            // });
            item.classList.add("delete");


            if (item.getAttribute("data-item") ===
                targetData || targetData == "all") {
                item.classList.remove("delete")
            }
        })

    });
});



