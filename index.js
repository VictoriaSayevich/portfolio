const btn_left = document.querySelector('.slider_btn:first-child'),
    btn_right = document.querySelector('.slider_btn:last-child');

let current_item = 1;
const slider_items = document.querySelectorAll('.slider_projects_container--element');
const count_items = slider_items.length;

const education = document.querySelector('.education-header'),
    education_item = document.querySelector('.education--card');


function HideItem(item) {
    item.classList.remove('active');
}

function ShowItem(item) {
    item.classList.add('active');
    item.addEventListener('animationed', function() {

    })
}

function AnimController(item, direction) {
    if (direction == 0) {
        item.addEventListener('animationed', () => {
            item.classList.add('to_right');
            item.classList.add('active');
            item.classList.remove('to_right');
        });

    } else {
        slider_items[current_item % count_items].addEventListener('animationed', () => {
            item.classList.remove('to_left');
            item.classList.remove('from_right');
            item.classList.add('to_right');
            item.classList.add('from_left');
        });
    }
}

function Slider(direction) {
    HideItem(slider_items[current_item % count_items]);
    ShowItem(slider_items[(current_item + 1) % count_items]);
    current_item++;
}

btn_left.addEventListener("click", () => {
    Slider(0);
});

btn_right.addEventListener("click", () => {
    Slider(1);
});

education.addEventListener("click", () => {
    if (education_item.classList.contains('active')) HideItem(education_item);
    else ShowItem(education_item);
});