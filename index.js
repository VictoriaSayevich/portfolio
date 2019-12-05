const btns_slider = document.querySelectorAll('.slider_btn');
let current_item = 0;
const slider_items = document.querySelectorAll('.slider_projects_container--element');
const count_items = slider_items.length;

function HideItem(item) {
    item.classList.remove('active');
}

function ShowItem(item) {
    item.classList.add('active');
}

function Slider() {
    HideItem(slider_items[current_item % count_items]);
    ShowItem(slider_items[(current_item + 1) % count_items]);
    current_item++;
}

[].forEach.call(btns_slider, btn => {
    btn.addEventListener("click", Slider);
});