import './styles/style.css'
import './styles/card.css'
import './styles/follow-me.css'
import './styles/drawing.css'

document.querySelector('#app').innerHTML = `
<div class="follow-me-wrapper">
    <div id="drawing" class="drawing">
        <div id="drawingImage" class="drawing-wrapper">
            <div class="drawing-eye-socket drawing-eye-socket--left">
                <div class="drawing-eye drawing-eye--left"></div>
            </div>
            <div class="drawing-eye-socket drawing-eye-socket--right">
                <div class="drawing-eye drawing-eye--right"></div>
            </div>
            <img src="/scared_bugs_bunny.png" alt="bugs-bunny">
        </div>
    </div>
    <div class="card">
    <div class="card__subcard">
        <h2>Lorem Ipsum Dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, velit.</p>
    </div>
    <div class="card__subcard card__subcard--second">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>
</div>
`

function getAngleFromCenter(div, event) {

    const rect = div.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const radians = Math.atan2(mouseY - centerY, mouseX - centerX);

    let degrees = (radians * 180) / Math.PI - 90;
    degrees = (degrees < 0 ? degrees + 360 : degrees) + 180;
    return degrees % 360;
}

const myDiv = document.querySelector('#drawing');

document.addEventListener("mousemove", function(event) {
    const angle = getAngleFromCenter(myDiv, event);
    const eyes = document.querySelectorAll('.drawing-eye-socket')

    eyes.forEach( eye => {
        eye.style.transform = `rotate(${angle}deg)`;
    })
});


