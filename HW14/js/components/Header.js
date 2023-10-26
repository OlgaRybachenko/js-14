const Header = function() {

    this.cartItems = 0;
    this.nav = '';

    this.init = () => {
        let headerElem = document.createElement('header');
        headerElem.classList.add('header');
        headerElem.innerHTML = `
            <div class="content">
            <a class="header_logo"  href="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RTXZORRoLmKNkka9nFKd3vroyPQkimTlQD_r8KqSOTWLPiMPGh6McSNzgo8Vjf8-EH0&usqp=CAU">
            </a>
            <a class="cart" href="#cart">
                <span class="cart_count"> ${this.cartItems}<span>
            </a>
            </div>
    `;
        headerElem.querySelector('.content').append(this.nav);
        return headerElem;
    }
    this.updateCategories = () => {
        document.querySelector('.header').querySelector('.nav')?.remove();
        document.querySelector('.header').querySelector('.content').append(this.nav);
    }
    this.updateCart = () => {
        document.querySelector('.header').querySelector('.cart_count').innerHTML = `${this.cartItems}`; 
    }
    
}

export default new Header();