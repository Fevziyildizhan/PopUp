<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PopUp</title>
    <style type="text/css">
    *{
        box-sizing: border-box;

    }
    body{
        background-color: #edeef6;
        font-family: 'Poppins',sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
    }

  button{
      background-color: #47a386;
      color: white;
      border: 0;
      border-radius: 5px;
      padding: 10px 25px;
      box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
      font-size: 14px;
  }

    .modal-container{
        background-color: rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        opacity: 0;
        pointer-events: none;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        transition: opacity 0.3s ease;
    }

.modal-container.show{
pointer-events: auto;
opacity: 1;
}



    .modal{
    background-color: #fff;
    border-radius: 5px;
    padding: 30px 50px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    width: 600px;
    max-width: 100%;
    text-align: center;  
    }

.modal h1{
    margin: 0;

}

.modal p{
font-size: 14px;
opacity: 0.7;

}

    </style>
</head>
<body>
    <button id="open">
        TIKLA LÜTFEN
    </button>
    <div class="modal-container">
        <div class="modal">
            <h1>FEVZİ</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          <button id="close">
              LÜTFEN KAPAT
          </button>
         </div>
    </div>




    <script type="text/javascript">
    
    const open = document.getElementById('open')
    const modal_container = document.querySelector('.modal-container')
    const close = document.getElementById('close')

    


    open.addEventListener('click',()=>{
        modal_container.classList.add('show')
    })

    close.addEventListener('click',() => {

        modal_container.classList.remove('show')
    })

    
    
    
    </script>
</body>
</html>
