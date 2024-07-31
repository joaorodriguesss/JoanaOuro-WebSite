$(document).ready(function () {
    let currentBanner = 0;
    const banners = $('.banner');
    const bannerCount = banners.length;
    let bannerInterval;
  
    function showBanner(index) {
      banners.removeClass('active');
      banners.eq(index).addClass('active');
    }
  
    function nextBanner() {
      currentBanner = (currentBanner + 1) % bannerCount;
      showBanner(currentBanner);
    }
  
    function prevBanner() {
      currentBanner = (currentBanner - 1 + bannerCount) % bannerCount;
      showBanner(currentBanner);
    }
  
    function resetInterval() {
      clearInterval(bannerInterval);
      bannerInterval = setInterval(nextBanner, 5000);
    }
  
    $('.next').click(function() {
      nextBanner();
      resetInterval();
    });
  
    $('.prev').click(function() {
      prevBanner();
      resetInterval();
    });
  
    // Show the first banner immediately
    showBanner(currentBanner);
  
    // Start the interval
    bannerInterval = setInterval(nextBanner, 5000);
  });
  
  