function avenger(name) {
  return promise = new Promise((resolve,reject)=>{
     setTimeout(()=>{
    console.log('Inside Avenger Function')
    resolve(name)
  })
})
}
function heroic_name(name1){
 return promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('Inside Heroic Function')
    resolve(name1)
  })
})
}


function enemy(name2){
  return promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('Inside Heroic Function')
    resolve(name2)
  })
})
}
async function mission() {

let nm = await avenger('steve')
  console.log(nm)

 let hm = await heroic_name(nm) 
 let hn = hm 

    if (hn == 'steve') {
      console.log('I can do this all day')
      hn ='Red Skull'
    }
    else {
      console.log('No Hero can do this')
    }
     let en = await enemy(hn ) 
      if (en == 'Red Skull'){
        console.log('Meet me on vlomir')
      }
      else{
        console.log('Hail Hydra')
      }
    }
    mission()
