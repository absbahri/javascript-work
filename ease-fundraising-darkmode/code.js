// https://stackoverflow.com/questions/50840168/how-to-detect-if-the-os-is-in-dark-mode-in-browsers
var isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
var isIOS = /(iPhone|iPod|iPad)/i.test(navigator.platform);

// My Own Code
(function(){
    if(isMacLike){
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            alert('Dark Mode Enabled');
            var $body = document.getElementsByTagName('body')[0];
            
            $body.classList.add('dark-mode');
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            alert('Light Mode Enabled')
        }
    }

})()


// https://www.geeksforgeeks.org/how-to-create-a-style-tag-using-javascript/
function createStyle(styles) {
      
    /* Create style document */
    var css = document.createElement('style');
    css.type = 'text/css';
  
    if (css.styleSheet) 
        css.styleSheet.cssText = styles;
    else 
        css.appendChild(document.createTextNode(styles));
      
    /* Append style to the tag name */
    document.getElementsByTagName("head")[0].appendChild(css);
}
  
var styles = '.dark-mode .bg-white,.dark-mode .retailer-wall,.dark-mode .v2 .banner-hero-variant .hero-callout{background-color:#333!important}.dark-mode .background{background-color:#0c0c0c!important}.dark-mode .bg-black{--bg-opacity:1;background-color:invert(#000);background-color:invert(rgba(0,0,0,var(--bg-opacity)))}.dark-mode .bg-brand-neutral{--bg-opacity:1;background-color:invert(#495c63);background-color:invert(rgba(73,92,99,var(--bg-opacity)))}.dark-mode .bg-brand-border{--bg-opacity:1;background-color:invert(#d0d0d0);background-color:invert(rgba(208,208,208,var(--bg-opacity)))}.dark-mode .bg-brand-border-light{--bg-opacity:1;background-color:invert(#d8d8d8);background-color:invert(rgba(216,216,216,var(--bg-opacity)))}.dark-mode .bg-brand-error{--bg-opacity:1;background-color:invert(#b11013);background-color:invert(rgba(177,16,19,var(--bg-opacity)))}.dark-mode .bg-brand-error-light{--bg-opacity:1;background-color:invert(#ffd9d9);background-color:invert(rgba(255,217,217,var(--bg-opacity)))}.dark-mode .bg-brand-warning{--bg-opacity:1;background-color:invert(#ffd35c);background-color:invert(rgba(255,211,92,var(--bg-opacity)))}.dark-mode .bg-brand-info-light{--bg-opacity:1;background-color:invert(#d8eaf5);background-color:invert(rgba(216,234,245,var(--bg-opacity)))}.dark-mode .bg-brand-success-light{--bg-opacity:1;background-color:invert(#e7f5e7);background-color:invert(rgba(231,245,231,var(--bg-opacity)))}.dark-mode .bg-brand-light-grey{--bg-opacity:1;background-color:invert(#f3f3f3)}.dark-mode .bg-brand-success{--bg-opacity:1;background-color:invert(#69c364);background-color:invert(rgba(105,195,100,var(--bg-opacity)))}.dark-mode .bg-brand-confirmed{--bg-opacity:1;background-color:invert(#378433);background-color:invert(rgba(55,132,51,var(--bg-opacity)))}.dark-mode .bg-brand-prompt{--bg-opacity:1;background-color:invert(#ebf7f7);background-color:invert(rgba(235,247,247,var(--bg-opacity)))}.dark-mode .bg-social-facebook{--bg-opacity:1;background-color:invert(#3b5999);background-color:invert(rgba(59,89,153,var(--bg-opacity)))}.dark-mode .bg-social-whatsapp{--bg-opacity:1;background-color:invert(#25d366);background-color:invert(rgba(37,211,102,var(--bg-opacity)))}.dark-mode .bg-social-twitter{--bg-opacity:1;background-color:invert(#55acee);background-color:invert(rgba(85,172,238,var(--bg-opacity)))}.dark-mode .heading-1,.dark-mode .heading-2,.dark-mode .v2 .testimonial__quote,.dark-mode b,.dark-mode h1,.dark-mode h2,.dark-mode h3,.dark-mode h4,.dark-mode h5,.dark-mode h6,.dark-mode legend,.dark-mode strong{color:#00bebe}.dark-mode .sub-heading,.dark-mode label,.dark-mode p{color:#fff!important}.dark-mode .btn--secondary,.dark-mode .efr-button:not(.no-border),.dark-mode button{transition:ease-in-out all .2s!important;color:#fff!important;background-color:#e6006f!important}.dark-mode .efr-header{background-color:#333}.dark-mode .btn--secondary:hover,.dark-mode .efr-button:not(.no-border):hover,.dark-mode button:hover{transition:ease-in-out all .2s!important;color:#e6006f!important;border-color:#fff!important;background-color:#fff!important}';
createStyle(styles)


function styleImages(){
    
    var imageWall = document.getElementsByClassName('image-wall');
    console.log(imageWall)
}

styleImages();
