  
//circle1


  var bar1 = new ProgressBar.Circle(circle1, {
  color: '#2BC0E5',
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2BC0E5', width: 1 },
  to: { color: '#2BC0E5', width: 4 },

  step: function(state, circle1) {


    var value1 = Math.round(circle1.value() * 100);
    if (value1 === 0) {
      circle1.setText('');
    } else {
      circle1.setText(value1 + '%');
 
    }

  }
});
bar1.text.style.fontFamily = 'Nilland';
bar1.text.style.fontSize = '2rem';

bar1.animate(0.7);   

//circle2

  var bar2 = new ProgressBar.Circle(circle2, {
  color: '#2BC0E5',
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2BC0E5', width: 1 },
  to: { color: '#2BC0E5', width: 4 },

  step: function(state, circle2) {
  

    var value2 = Math.round(circle2.value() * 100);
    if (value2 === 0) {
      circle2.setText('');
    } else {
      circle2.setText(value2 + '%');
 
    }

  }
});
bar2.text.style.fontFamily = 'Nilland';
bar2.text.style.fontSize = '2rem';

bar2.animate(0.6);   

//circle3

  var bar3 = new ProgressBar.Circle(circle3, {
  color: '#2BC0E5',
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2BC0E5', width: 1 },
  to: { color: '#2BC0E5', width: 4 },

  step: function(state, circle3) {
  

    var value3 = Math.round(circle3.value() * 100);
    if (value3 === 0) {
      circle3.setText('');
    } else {
      circle3.setText(value3 + '%');
 
    }

  }
});
bar3.text.style.fontFamily = 'Nilland';
bar3.text.style.fontSize = '2rem';

bar3.animate(0.3);   


//circle 4

  var bar4 = new ProgressBar.Circle(circle4, {
  color: '#2BC0E5',
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2BC0E5', width: 1 },
  to: { color: '#2BC0E5', width: 4 },

  step: function(state, circle4) {
  

    var value4 = Math.round(circle4.value() * 100);
    if (value4 === 0) {
      circle4.setText('');
    } else {
      circle4.setText(value4 + '%');
 
    }

  }
});
bar4.text.style.fontFamily = 'Nilland';
bar4.text.style.fontSize = '2rem';

bar4.animate(0.3);  

//circle 5


  var bar5 = new ProgressBar.Circle(circle5, {
  color: '#2BC0E5',
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2BC0E5', width: 1 },
  to: { color: '#2BC0E5', width: 4 },

  step: function(state, circle5) {
  

    var value5 = Math.round(circle5.value() * 100);
    if (value5 === 0) {
      circle5.setText('');
    } else {
      circle5.setText(value5 + '%');
 
    }

  }
});
bar5.text.style.fontFamily = 'Nilland';
bar5.text.style.fontSize = '2rem';

bar5.animate(0.7);  

//circle 6


  var bar6 = new ProgressBar.Circle(circle6, {
  color: '#2BC0E5',
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2BC0E5', width: 1 },
  to: { color: '#2BC0E5', width: 4 },

  step: function(state, circle6) {
  

    var value6 = Math.round(circle6.value() * 100);
    if (value6 === 0) {
      circle6.setText('');
    } else {
      circle6.setText(value6 + '%');
 
    }

  }
});
bar6.text.style.fontFamily = 'Nilland';
bar6.text.style.fontSize = '2rem';

bar6.animate(0.4);  


  
//circle7


  var bar7 = new ProgressBar.Circle(circle7, {
  color: '#2BC0E5',
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2BC0E5', width: 1 },
  to: { color: '#2BC0E5', width: 4 },

  step: function(state, circle7) {


    var value7 = Math.round(circle7.value() * 100);
    if (value7 === 0) {
      circle7.setText('');
    } else {
      circle7.setText(value7 + '%');
 
    }

  }
});
bar7.text.style.fontFamily = 'Nilland';
bar7.text.style.fontSize = '2rem';

bar7.animate(0.2);   


  //circle8


  var bar8 = new ProgressBar.Circle(circle8, {
  color: '#2BC0E5',
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2BC0E5', width: 1 },
  to: { color: '#2BC0E5', width: 4 },

  step: function(state, circle8) {


    var value8 = Math.round(circle8.value() * 100);
    if (value8 === 0) {
      circle8.setText('');
    } else {
      circle8.setText(value8 + '%');
 
    }

  }
});
bar8.text.style.fontFamily = 'Nilland';
bar8.text.style.fontSize = '2rem';

bar8.animate(0.4);   

 //circle9


  var bar9 = new ProgressBar.Circle(circle9, {
  color: '#2BC0E5',
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2BC0E5', width: 1 },
  to: { color: '#2BC0E5', width: 4 },

  step: function(state, circle9) {


    var value9 = Math.round(circle9.value() * 100);
    if (value9 === 0) {
      circle9.setText('');
    } else {
      circle9.setText(value9 + '%');
 
    }

  }
});
bar9.text.style.fontFamily = 'Nilland';
bar9.text.style.fontSize = '2rem';

bar9.animate(0.35);   

 //circle10


  var bar10 = new ProgressBar.Circle(circle10, {
  color: '#2BC0E5',
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2BC0E5', width: 1 },
  to: { color: '#2BC0E5', width: 4 },

  step: function(state, circle10) {


    var value10 = Math.round(circle10.value() * 100);
    if (value10 === 0) {
      circle10.setText('');
    } else {
      circle10.setText(value10 + '%');
 
    }

  }
});
bar10.text.style.fontFamily = 'Nilland';
bar10.text.style.fontSize = '2rem';

bar10.animate(0.3);   

 //circle11


  var bar11 = new ProgressBar.Circle(circle11, {
  color: '#2BC0E5',
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2BC0E5', width: 1 },
  to: { color: '#2BC0E5', width: 4 },

  step: function(state, circle11) {


    var value11= Math.round(circle11.value() * 100);
    if (value11 === 0) {
      circle11.setText('');
    } else {
      circle11.setText(value11 + '%');
 
    }

  }
});
bar11.text.style.fontFamily = 'Nilland';
bar11.text.style.fontSize = '2rem';

bar11.animate(0.4);   


 //circle12


  var bar12 = new ProgressBar.Circle(circle12, {
  color: '#2BC0E5',
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2BC0E5', width: 1 },
  to: { color: '#2BC0E5', width: 4 },

  step: function(state, circle12) {


    var value12 = Math.round(circle12.value() * 100);
    if (value12 === 0) {
      circle12.setText('');
    } else {
      circle12.setText(value12 + '%');
 
    }

  }
});
bar12.text.style.fontFamily = 'Nilland';
bar12.text.style.fontSize = '2rem';

bar12.animate(0.4);   

