console.log('start')

function avenger(name,callback) {
  setTimeout(()=>{
    console.log('Inside Avenger Function')
    callback(name)
  },2000)
}

function heroic_name(name1, callback){
  setTimeout(()=>{
    console.log('Inside Heroic Function')
    callback(name1)
  })
}

function enemy(name2, callback){
  setTimeout(()=>{
    console.log('Inside Heroic Function')
    callback(name2)
  })
}

avenger('steve', (nm) =>{
  console.log(nm)
  heroic_name(nm,(hn) =>{
    if (hn == 'steve') {
      console.log('I can do this all day')
      hn='Red Skull'
    }
    else {
      console.log('No Hero can do this')
    }
    enemy(hn , (en) =>{
      if (en == 'Red Skull'){
        console.log('Meet me on vlomir')
      }
      else{
        console.log('Hail Hydra')
      }
    })
  })
})
console.log('End')