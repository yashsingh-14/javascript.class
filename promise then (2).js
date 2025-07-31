function avenger(name) {
 return promise = new Promise((resolve,reject) =>{

   setTimeout(()=>{
     console.log('Inside Avenger Function')
     resolve(name)
    })
  })
}

function heroic_name(name1){
return promise = new Promise((resolve,reject) =>{
   
   setTimeout(()=>{
     console.log('Inside Heroic Function')
     resolve(name1)
    })
 })
}

function enemy(name2){
return promise = new Promise((resolve,reject) =>{
     setTimeout(()=>{
      console.log('Inside Heroic Function')
      resolve(name2)
    })  
  })
}

avenger('steve').then(
  nm => {
    console.log(nm)
    return heroic_name(nm)
  }
).then(
    hn => {
      console.log(hn)
      if (hn == 'steve'){
        console.log('I can do this all day')
        hn='Red skull'
      }
      else{
        console.log('no hero can do this')
      }
      return enemy(hn)
    }
).then(
  en=> {
    if (en == 'Red skull'){
      console.log('Meet on volmir')
    }
    else{
      console.log('Hail hydra!')
    }
  }
)