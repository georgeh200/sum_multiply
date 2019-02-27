window.onload = function () {


var app = new Vue({
  el: '#app',
  data: {
    // array carrying the three values
    values: [0,1,2],
    //operation type sum or multiply
    operation:0,
    //result of the operation
    result:0
  },


  methods: {

    //respond to sum
    sum: function () {
      var self=this;
      self.result=0;
      self.values.forEach(function(item){
        self.result += parseInt(item);
      })
    }

    //respond to multiply
    ,multiply: function () {
      var self=this;
      self.result=1;
      self.values.forEach(function(item){
        self.result *= parseInt(item);
      })
    }


  }
  ,watch:{
    /*
    watch operation parameter
    if 1 means Sum
    2 means Multiply
    */
    operation:function(value)
    {
      if(value==1)
        this.sum();
        else if(value==2)
        this.multiply();
    }
  }
});

}
