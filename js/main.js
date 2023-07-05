const section = document.querySelector('section');
const stars = document.querySelectorAll('.fa-star');
const faces =  document.querySelectorAll('.face');

console.log(stars);

const colors = ['red', 'orange', 'lightblue', 'lightgreen', 'green'];

change(0);

stars.forEach((star, i) => {
    star.addEventListener('click', () => {
        console.log(`Star Clicked ${i}`);
        change(i);
    });
});

function change(i) {
    stars.forEach((star, j) => {
        if (j < i + 1) {
            star.classList.add('active');
        }
        else {
            star.classList.remove('active');
        }
    });

    faces.forEach((emo) => {
        //emo.style.transform = `translateX(-${i * 50}px)`;
        console.log(`this one ${emo}`);
        emo.style.color = `${colors[i]}`;
        section.style.background =  `${colors[i]}`;
    });
}


