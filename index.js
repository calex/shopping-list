function shoppingListControls() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();

        const stringToAdd = $(event.currentTarget).find('#shopping-list-entry').val();

        $('.shopping-list').append(`
            <li>
                <span class="shopping-item">${stringToAdd}</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
            </li>`
        );
    }); 

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        this.closest('li').remove();
    }); 

    $('.shopping-list').on('click', '.shopping-item-toggle', event => {
        const parentListItem = event.currentTarget.closest('li');
        
        $(parentListItem).find('.shopping-item').toggleClass('shopping-item__checked');
    }); 
}

$(shoppingListControls);