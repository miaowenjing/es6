function selfPromise(fn){
     console.log(this)
    // var self=this;
     this.status = 'pending'
     this.Value = null;
     resolve=(value)=>{
        if (this.status === 'pending'){
            this.status = 'resolve'
            this.Value = value
            console.log('resolve')
        }
        // console.log('resolve')
    }
    reject=(value)=>{
        if (this.status === 'pending'){
            this.status = 'reject'
            this.Value = value;

   console.log('reject')
        }
     
    }
 fn(resolve,reject);
}

var promise=new selfPromise((resolve,reject)=>{
    
    reject(28888822)
//    console.log("promise",this)
})
console.log(promise)

var promise2 = new Promise((resolve,reject)=>{
   
   resolve(222);
//    console.log("promise2",this)
   
})
console.log(promise2)
