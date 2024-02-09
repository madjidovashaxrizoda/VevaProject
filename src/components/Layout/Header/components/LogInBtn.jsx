import React from 'react'

export default function LogInBtn() {
    const LogInModal = function () {
		
		document.getElementById('modal').classList.remove('hidden')
	}
  const close = function () {
    document.getElementById('modal').classList.add('hidden')
}
  return (
    <div >
      <div>
      <button id="LogInBtn" onClick={LogInModal}    class="text-black bg-white font-normal  rounded-r-2xl text-sm px-6	 py-1.5 text-center flex gap-5  items-center max-[650px]:rounded-full max-[650px]:px-4 max-[650px]:py-3 max-[420px]:py-2 max-[420px]:px-3 max-[360px]:px-2 max-[360px]:py-1" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C10.0605 2.00369 8.16387 2.57131 6.54122 3.63374C4.91856 4.69617 3.63988 6.20754 2.86093 7.98377C2.08197 9.76 1.83636 11.7244 2.15401 13.6378C2.47166 15.5511 3.33887 17.3308 4.64999 18.76C5.58641 19.775 6.72293 20.5851 7.98793 21.1392C9.25292 21.6933 10.619 21.9793 12 21.9793C13.381 21.9793 14.7471 21.6933 16.012 21.1392C17.277 20.5851 18.4136 19.775 19.35 18.76C20.6611 17.3308 21.5283 15.5511 21.846 13.6378C22.1636 11.7244 21.918 9.76 21.139 7.98377C20.3601 6.20754 19.0814 4.69617 17.4588 3.63374C15.8361 2.57131 13.9395 2.00369 12 2ZM12 20C9.92845 19.9969 7.9389 19.1903 6.44999 17.75C6.90203 16.6495 7.67102 15.7083 8.65924 15.0459C9.64746 14.3835 10.8103 14.0298 12 14.0298C13.1897 14.0298 14.3525 14.3835 15.3407 15.0459C16.329 15.7083 17.0979 16.6495 17.55 17.75C16.0611 19.1903 14.0715 19.9969 12 20ZM9.99999 10C9.99999 9.60444 10.1173 9.21776 10.337 8.88886C10.5568 8.55996 10.8692 8.30362 11.2346 8.15224C11.6001 8.00087 12.0022 7.96126 12.3902 8.03843C12.7781 8.1156 13.1345 8.30608 13.4142 8.58579C13.6939 8.86549 13.8844 9.22186 13.9616 9.60982C14.0387 9.99778 13.9991 10.3999 13.8477 10.7654C13.6964 11.1308 13.44 11.4432 13.1111 11.6629C12.7822 11.8827 12.3955 12 12 12C11.4696 12 10.9608 11.7893 10.5858 11.4142C10.2107 11.0391 9.99999 10.5304 9.99999 10ZM18.91 16C18.0165 14.4718 16.6414 13.283 15 12.62C15.5092 12.0427 15.8409 11.3307 15.9555 10.5694C16.07 9.80822 15.9625 9.03011 15.6457 8.3285C15.329 7.62688 14.8166 7.03156 14.1699 6.61397C13.5232 6.19637 12.7698 5.97425 12 5.97425C11.2302 5.97425 10.4768 6.19637 9.83008 6.61397C9.1834 7.03156 8.67096 7.62688 8.35424 8.3285C8.03752 9.03011 7.92997 9.80822 8.04452 10.5694C8.15906 11.3307 8.49082 12.0427 8.99999 12.62C7.35859 13.283 5.98346 14.4718 5.08999 16C4.37793 14.7871 4.00171 13.4065 3.99999 12C3.99999 9.87827 4.84284 7.84344 6.34313 6.34315C7.84342 4.84285 9.87826 4 12 4C14.1217 4 16.1566 4.84285 17.6568 6.34315C19.1571 7.84344 20 9.87827 20 12C19.9983 13.4065 19.622 14.7871 18.91 16Z" fill="black"/>
    </svg>
        
    <p id='myAddress' class="max-[650px]:hidden"> Войти в кабинет</p> 
    </button>
      </div>
    <div id="modal" class=" fixed hidden left-1/3 md:top-24 top-32 bg-white rounded-2xl 
    max-[650px]:bottom-0 max-[650px]:w-full max-[650px]:left-0 max-[650px]:top-auto  ">
       <button type="button" data-drawer-hide="drawer-navigation"  onClick={close} aria-controls="drawer-navigation" class="text-black  text-sm w-8 h-8 absolute rounded-full bg-gray-100 top-4 end-6 inline-flex items-center justify-center " >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
    <form class=" mx-auto flex-col pt-16 items-center justify-center flex gap-6 py-6 px-8 box-border max-[650px]:gap-4">
      
        <h4 class=" text-3xl font-bold max-[650px]:text-2xl max-[345px]:text-xl">Вход в личный кабинет</h4>
        
        <input type="email" id="email" class="bg-gray-100 border text-gray-900 text-lg border-none rounded-lg  block w-full p-4 dark:text-white max-[650px]:text-[15px] max-[650px]:p-3" placeholder="Логин" required/>
      
      
        
        <input type="password" id="password" class="bg-gray-100 border text-gray-900 text-lg border-none rounded-lg  block w-full p-4 dark:text-white max-[650px]:text-[15px] max-[650px]:p-3" placeholder='Пароль' required/>
      
     
      <button type="submit" class="text-white  block bg-black hover:bg-stone-800 font-medium rounded-3xl text-lg  w-full  py-3.5 text-center max-[650px]:text-[15px] max-[650px]:py-3">Войти в кабинет</button>
    
      <button class="text-lg font-light underline text-center pb-4 max-[650px]:pb-0 max-[650px]:text-[15px]  ">Зарегистрироваться</button>
    </form>
    
    </div>
    </div>
  )
}