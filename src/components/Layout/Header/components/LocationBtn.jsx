import React from "react";

export default function LocationBtn() {
    const dropDown = function () {
		document.getElementById('dropdown').classList.toggle('hidden')
		document.getElementById('address').textContent=document.getElementById('myAddress').value
	}


  return (
    <div>
      <form
        id="dropdownButton"
        class="flex items-center relative max-[650px]:hidden"
      >
        <input
          type="text"
          id="myAddress"
          class="text-black bg-white font-normal border-none  rounded-3xl text-sm px-10 py-2 text-center "
          required
        />
              <svg
                class="absolute left-3 "
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
  >
      <path
          d="M20.96 9.62999C20.8303 8.27182 20.3756 6.96481 19.6344 5.81941C18.8931 4.67401 17.887 3.72388 16.7011 3.04931C15.5152 2.37474 14.1843 1.99554 12.8209 1.94377C11.4576 1.89201 10.1018 2.16918 8.86814 2.75188C7.63449 3.33458 6.55923 4.20568 5.73322 5.29157C4.90722 6.37745 4.35475 7.64622 4.12249 8.99065C3.89023 10.3351 3.985 11.7157 4.39881 13.0157C4.81262 14.3158 5.5333 15.4972 6.49995 16.46L11.8 21.77C11.8929 21.8637 12.0035 21.9381 12.1254 21.9889C12.2472 22.0396 12.3779 22.0658 12.51 22.0658C12.642 22.0658 12.7727 22.0396 12.8945 21.9889C13.0164 21.9381 13.127 21.8637 13.22 21.77L18.5 16.46C19.3912 15.5754 20.0743 14.5036 20.4998 13.3223C20.9253 12.1409 21.0825 10.8796 20.96 9.62999ZM17.1 15.05L12.5 19.65L7.89996 15.05C7.22204 14.372 6.70276 13.5523 6.37942 12.6497C6.05609 11.7472 5.93674 10.7842 6.02996 9.82999C6.12377 8.86109 6.43172 7.92515 6.93153 7.08983C7.43133 6.25451 8.11051 5.54069 8.91995 4.99999C9.9809 4.29522 11.2263 3.91928 12.5 3.91928C13.7736 3.91928 15.019 4.29522 16.08 4.99999C16.8869 5.5386 17.5646 6.24927 18.0643 7.08092C18.564 7.91258 18.8733 8.84459 18.97 9.80999C19.0662 10.7674 18.9484 11.7343 18.6249 12.6405C18.3015 13.5468 17.7806 14.3698 17.1 15.05ZM14.29 6.24999C14.197 6.15626 14.0864 6.08186 13.9645 6.03109C13.8427 5.98033 13.712 5.95419 13.58 5.95419C13.4479 5.95419 13.3172 5.98033 13.1954 6.03109C13.0735 6.08186 12.9629 6.15626 12.87 6.24999L9.28995 9.82999C9.10521 10.0162 9.00106 10.2676 8.99995 10.53V13C8.99995 13.2652 9.10531 13.5196 9.29285 13.7071C9.48038 13.8946 9.73474 14 9.99995 14H12.42C12.5516 14.0007 12.682 13.9755 12.8039 13.9258C12.9257 13.876 13.0365 13.8027 13.13 13.71L16.71 10.13C16.8962 9.94262 17.0007 9.68917 17.0007 9.42499C17.0007 9.1608 16.8962 8.90735 16.71 8.71999L14.29 6.24999ZM12.01 12H11.01V11L13.59 8.41999L14.59 9.41999L12.01 12Z"
          fill="black"
      />
  </svg>
        <svg
          class="w-2.5 h-2.5 absolute right-4 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          color="rgba(28, 187, 238, 1)"
          fill="none"
          viewBox="0 0 10 6"
          onClick={dropDown}
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 mt-[105px] absolute rounded-lg shadow-lg w-72 dark:bg-gray-700 max-[650px]:w-10/12"
        >
          <ul class="py-2 text-[16px] text-gray-700 dark:text-gray-200">
            <li
              onClick={dropDown}
              id="anotherAddress"
              class="block px-4 py-2  hover:bg-gray-100 focus:bg-blue-50"
            >
              Choose another address
            </li>
            <li
              onClick={dropDown}
              id="address"
              class="block px-4 py-2  hover:bg-gray-100 focus:bg-blue-50"
            >
              Beshyogoch 28-3
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}
