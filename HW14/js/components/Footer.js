const Footer = function() {

    this.init = () => {
        let footerElem = document.createElement('footer');
        footerElem.classList.add('footer');
        footerElem.innerHTML = `
            <div class="content">
                <a class="footer__logo" href="#">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RTXZORRoLmKNkka9nFKd3vroyPQkimTlQD_r8KqSOTWLPiMPGh6McSNzgo8Vjf8-EH0&usqp=CAU">
                </a>
                <ul class="footer__info">
                    <li>+375 29 100 10 10</li>
                    <li>Minsk, Pritytskogo, 35</li>
                    <li>onlintstore@gmail.com</li>
                </ul>
            </div>
        `;

        return footerElem;
    }
}

export default new Footer().init();