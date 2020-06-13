/* Sorts the Module settings v0.1 */

Hooks.once('renderSettingsConfig', async function() {

    // wrap each set of module configs in a wrapper div
    var $modulesSettings = $("div.tab[data-tab='modules']  > div.settings-list");
    $modulesSettings.find('h2').each(function() {
    $(this).nextUntil("h2").addBack().wrapAll('<div class="sort-container"></div>');
    });

    // give each wrapper element an ID that url-safe(ish) matches the module name
    $('.sort-container').find('h2').each(function() {
        $(this).parent().attr("id", ($(this).text().toLowerCase()).replace(/\s+/g, '-')  );
    });

    // sort the divs alphabetically
    var alphabeticallyOrderedDivs = $('.sort-container').sort(function(a, b) {
        return String.prototype.localeCompare.call( $(a).attr('id'), $(b).attr('id') );
    });

    // remove them and re-add them
    var container = $modulesSettings;
    container.detach().empty().append(alphabeticallyOrderedDivs);
    $("div.tab[data-tab='modules']").append(container);

});

