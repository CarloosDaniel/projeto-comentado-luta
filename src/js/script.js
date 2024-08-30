let char = new Knight('Jonh')
let monster = new littleMonster()

const stage = new Stage (
    char, 
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)
stage.start()