$(() => {
  // Cache selectors
  const $accordion = $('.js-accordion');
  const $allPanels = $(' .accordion-panel').hide();
  const $allItems = $('.accordion-item');

  // Event listeners
  $accordion.on('click', '.accordion-toggle', function () {
    // Toggle the current accordion panel and close others
    $allPanels.slideUp();
    $allItems.removeClass('is-open');
    if (
      $(this)
        .next()
        .is(':visible')
    ) {
      $('.accordion-panel').slideUp();
    } else {
      $(this)
        .next()
        .slideDown()
        .closest('.accordion-item')
        .addClass('is-open');
    }
    return false;
  });
  openAccordeonOnAnchorLink();
});
