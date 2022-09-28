setInterval(() => {
    t = new Date();
    hhour = t.getHours();
    mminutes = t.getMinutes();
    sseconds = t.getSeconds();
    

    hrotation = 30*hhour + mminutes/2;
    mrotation = 6*mminutes;
    srotation = 6*sseconds;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

   
}, 2000 );