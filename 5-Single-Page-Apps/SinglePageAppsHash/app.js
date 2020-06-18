window.addEventListener('hashchange', function(){
    console.log('hash changeed' + window.location.hash);

    //you can then do something if the bookmark or hashlocation changes; pretend like these are urls and the page went out to go get and load the new url when in fact the page stayed the same but you made an ajax call to get new info to display
    if(window.location.hash == '#bookmark/1'){
        console.log('page 1 is cool.');
        
    }
    if(window.location.hash == '#bookmark/2'){
        console.log('page 2 is cool.');
        
    }
    if(window.location.hash == '#bookmark/3'){
        console.log('page 3 is cool.');
        
    }
    if(window.location.hash == '#bookmark/4'){
        console.log('page 4 is cool.');
        
    }
});