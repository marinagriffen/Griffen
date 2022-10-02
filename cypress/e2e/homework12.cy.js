//Тест на добавление товара в корзину



describe ('Add to cart', () => {
    it('test1', () => {
        cy.viewport(1920, 1080);
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
        cy.wait(10000);
        cy.get('[data-hook="add-to-cart"]').click();
        cy.wait(10000);
        cy.get('iframe').then(function($iFrame){
            const iframe = $iFrame.contents().find('body');
            cy.wrap(iframe).find('.cart-content').then((el) => {
                expect(el.text()).to.be.equal('Croc Clutch');
            })

         
        })
    
    })
})


//пример Стаса

it('AddCard', () => {
    cy.viewport(1600,900);
    cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
    cy.wait(6000);
    //Добавьте товар через кнопку add to card
    cy.get('[data-hook="add-to-cart"]').wait(2000).click();
    //Получить iframe
    cy.get('iframe')
    .then(($iframe) => {
      const $body = $iframe.contents().find('body');
      //Проверить что миникарт есть
      const miniCart = cy.wrap($body).find('.minicart');
      expect(miniCart).to.exist;
      //Взять cart-widget-name и его текст проверить что товар называется корректно
      cy.wrap($body).find('[data-hook="cart-widget-name"]').then((el) => {
        expect(el.text()).to.be.equal(' Croc Clutch ');
      })
    })
  });





//Мультиплекс


describe ('Multiplex', () => {
    it('Facebook', () => {
        cy.viewport(2048,1080)
        cy.visit('https://friends.multiplex.ua/login');
        cy.get('[href="https://auth2.multiplex.ua/fblogin"]').click()
        cy.contains('https://www.facebook.com/v3.2/dialog/oauth')
    });


    it('Google', () => {
        cy.viewport(2048,1080)
        cy.visit('https://friends.multiplex.ua/login');
        cy.get('[href="https://auth2.multiplex.ua/galogin""]').click()
        cy.contains('https://accounts.google.com/o/oauth2/auth')
    });


    it('Apple', () => {
        cy.viewport(2048,1080)
        cy.visit('https://friends.multiplex.ua/login');
        cy.get('[href="https://auth2.multiplex.ua/aplogin"]').click()
        cy.contains('https://appleid.apple.com/auth')
    });


})
