import React from 'react'
import RydeCar from "../assets/ryde_car.svg"
import RydeCarHourly from "../assets/ryde_car_hourly.svg"
import AitTransport from "../assets/airport_transport.svg"
import AllRides from "../assets/all-rides.svg"

const Others = () => {
  return (
    <section className="flex justify-center bg-white  my-20 md:mt-0">
        <div className="flex w-full mx-6 md:mx-0 md:w-[80%] max-w-[1300px] justify-between">
            <div className="w-full lg:w-1/2 flex flex-col justify-between items-center md:items-start">
            <div>
                <h1 className="text-2xl sm:text-3xl text-center md:text-left md:text-[2.5rem]">NOW, <span className="font-bold">GET MORE THAN JUST BUS</span> TICKETS WITH REDBUS!</h1>
                <div className="w-full md:w-[480px] h-14 flex items-center border-b border-gray-200 justify-center text-left md:justify-between my-6">
                    <button className="h-full flex gap-3 px-4 py-[0.8rem] rounded-t-lg items-center border-b-2 border-main-color">
                        <svg className="fill-main-color h-full" viewBox="0 0 35 20">
                            <path d="M16.3867 14.881L16.3002 14.7492L16.1873 14.8594C15.6684 15.365 15.0775 15.7819 14.4314 16.0982C13.8116 16.4026 13.1535 16.6086 12.4737 16.7117V10.6877L17.0328 6.13978C17.3091 6.53514 17.5421 6.96166 17.727 7.40495L17.7847 7.54153L17.9144 7.46725L17.9384 7.45288C17.9528 7.44329 17.9697 7.4361 17.9841 7.42652C18.5125 7.13418 19.0962 6.94249 19.7208 6.85383L19.8865 6.82987L19.8241 6.67652C19.1635 5.02077 18.0345 3.60942 16.5572 2.59105C15.0439 1.55112 13.2736 1 11.4336 1C9.59355 1 7.84242 1.54393 6.33871 2.57668C4.86863 3.58307 3.73964 4.98243 3.07186 6.6238L3.0022 6.79633L3.18716 6.80351C3.86695 6.83466 4.50351 6.97604 5.08001 7.22764L5.19771 7.27796L5.25056 7.16054C5.4163 6.80351 5.61327 6.46086 5.83667 6.13738L10.3958 10.6853V16.7093C9.15877 16.52 7.99856 15.9928 7.03532 15.1781L6.93203 15.0919L6.84795 15.1973C6.47563 15.6645 6.01683 16.0503 5.48596 16.3427C5.44753 16.3642 5.4091 16.3858 5.35865 16.4097L5.19291 16.496L5.32983 16.623C7.00169 18.1565 9.16838 19 11.4336 19C13.814 19 16.0624 18.0799 17.7655 16.405L17.8832 16.2899L17.7439 16.2013C17.201 15.861 16.7446 15.4153 16.3867 14.8762V14.881ZM15.606 4.63978L11.436 8.79952L7.26351 4.63978C7.82801 4.20128 8.45255 3.85623 9.12274 3.61422C9.86258 3.34585 10.6409 3.21166 11.4336 3.21166C12.2262 3.21166 13.0045 3.34824 13.7444 3.61422C14.4146 3.85623 15.0391 4.20128 15.6036 4.63978H15.606Z"/>
                            <path d="M2.13749 8.92406V8.00873H0.0812988V16.3043H2.22877V12.2763C2.22877 11.5119 2.42334 10.9225 2.81008 10.5247C3.19441 10.1269 3.74209 9.92566 4.4339 9.92566C4.5564 9.92566 4.69572 9.94004 4.84706 9.96879L5.00319 9.99754V7.92007H4.87108C3.64361 7.92007 2.72841 8.25793 2.13749 8.92406Z" />
                            <path d="M23.7708 4.88175H23.6387V8.80907C23.3624 8.55028 23.0454 8.34661 22.6874 8.20044C22.231 8.01354 21.7218 7.92009 21.1741 7.92009C20.3814 7.92009 19.6584 8.09741 19.0218 8.44725C18.3853 8.79948 17.8785 9.30028 17.5157 9.94245C17.1554 10.5822 16.9705 11.3274 16.9705 12.1589C16.9705 12.9904 17.153 13.738 17.5157 14.3825C17.8785 15.0271 18.3853 15.5327 19.0218 15.8849C19.656 16.2348 20.3814 16.4121 21.1741 16.4121C21.741 16.4121 22.2695 16.3115 22.7403 16.1174C23.1078 15.964 23.4345 15.7484 23.7131 15.4776V16.3091H25.7837V4.88175H23.7684H23.7708ZM23.6699 12.1589C23.6699 12.6357 23.569 13.0599 23.3696 13.4193C23.1703 13.7763 22.8988 14.0567 22.5601 14.2484C22.219 14.4425 21.8299 14.5407 21.4023 14.5407C20.9748 14.5407 20.5856 14.4425 20.2469 14.2484C19.9082 14.0567 19.6344 13.7763 19.4374 13.4193C19.238 13.0599 19.1371 12.6357 19.1371 12.1589C19.1371 11.6821 19.238 11.2579 19.4374 10.8985C19.6368 10.5415 19.9082 10.2611 20.2469 10.0695C20.588 9.87536 20.9772 9.77712 21.4023 9.77712C21.8275 9.77712 22.219 9.87536 22.5601 10.0695C22.8988 10.2611 23.1727 10.5415 23.3696 10.8985C23.569 11.2579 23.6699 11.6821 23.6699 12.1589Z"/>
                            <path d="M34.3807 9.96639C34.0228 9.32182 33.5184 8.81384 32.8818 8.45681C32.2477 8.10218 31.5174 7.92007 30.7151 7.92007C29.9129 7.92007 29.161 8.10218 28.51 8.464C27.8591 8.82582 27.3402 9.3362 26.9751 9.98077C26.6076 10.6253 26.4226 11.3562 26.4226 12.1589C26.4226 12.9616 26.6148 13.7092 26.9919 14.3538C27.369 14.9983 27.9119 15.5087 28.6061 15.8705C29.2955 16.23 30.1026 16.4121 31.0034 16.4121C31.7096 16.4121 32.3558 16.2971 32.9227 16.0718C33.4944 15.8442 33.9724 15.5015 34.3471 15.0558L34.4192 14.9696L34.3447 14.8857L33.3334 13.7284L33.2398 13.6205L33.1413 13.7212C32.596 14.2747 31.8922 14.555 31.049 14.555C30.3885 14.555 29.8288 14.3897 29.3844 14.0614C28.988 13.7691 28.7262 13.3737 28.6013 12.8897H34.878L34.8876 12.7699C34.9092 12.5231 34.9188 12.3362 34.9188 12.202C34.9188 11.361 34.7387 10.6086 34.3832 9.964L34.3807 9.96639ZM32.8362 11.3801H28.5797C28.683 10.8913 28.9136 10.4912 29.2691 10.1892C29.6606 9.85617 30.1459 9.68604 30.7151 9.68604C31.2844 9.68604 31.7817 9.85617 32.166 10.194C32.5167 10.5007 32.7425 10.8985 32.8362 11.3801Z"/>
                        </svg>
                        <p className="text-main-color font-bold">Cab/Bus Rental</p>
                    </button>
                    <div className="h-[50%] w-[1px] bg-gray-300 rounded-full mx-3"></div>
                    <button className="h-full flex gap-3 px-4 py-[0.8rem] group hover:bg-gray-200 rounded-t-lg items-center ">
                        <svg className="fill-gray-600 group-hover:fill-main-color h-full" viewBox="0 0 35 20">
                            <path d="M34.6657 13.3366L33.8769 14.3512H33.4167L33.5463 10.8389C33.5572 10.5179 33.5077 10.1979 33.4006 9.89748L30.9659 2.99232C30.8016 2.53105 30.5088 2.13359 30.1264 1.85262C29.744 1.57164 29.2901 1.42044 28.8247 1.41904H24.6508L23.8934 0.518577C23.7561 0.355357 23.5879 0.224779 23.3996 0.135409C23.2113 0.0460392 23.0073 -0.000151152 22.8009 4.79963e-07H20.718C20.4128 -0.000254262 20.1151 0.100901 19.8669 0.289128C19.6187 0.477356 19.4324 0.743237 19.3342 1.04944L19.2155 1.41904H0V2.8851H28.8276C29.0108 2.88542 29.1897 2.94459 29.3405 3.05479C29.4913 3.165 29.6071 3.32106 29.6725 3.50239L32.1072 10.4067C32.1493 10.5254 32.1684 10.6519 32.1633 10.7787L32.0132 14.862C32.0047 15.1089 31.906 15.3425 31.7379 15.5137C31.5698 15.6849 31.3455 15.7802 31.1123 15.7794H27.9282C27.7499 15.7796 27.5756 15.7239 27.4273 15.6191C27.2789 15.5143 27.1633 15.3652 27.095 15.1907L26.4912 13.6475C26.3343 13.244 26.0676 12.8992 25.7251 12.657C25.3825 12.4147 24.9797 12.2859 24.5678 12.2871H24.5612L5.85336 12.3643C5.46486 12.3641 5.08415 12.4798 4.75481 12.6981C4.42547 12.9164 4.1608 13.2286 3.99109 13.5989L3.6903 14.2447C3.61545 14.4045 3.50013 14.539 3.35724 14.6333C3.21434 14.7276 3.04951 14.7779 2.88116 14.7787H0V16.2447H2.88116C3.24969 16.243 3.61246 16.1477 3.93894 15.9665C4.26541 15.7854 4.54606 15.5238 4.75727 15.2038C4.51709 16.1252 4.61461 17.1088 5.03028 17.9572C5.44594 18.8056 6.14901 19.4562 6.99847 19.7784C7.84793 20.1006 8.78095 20.0705 9.61041 19.6944C10.4399 19.3182 11.1044 18.6237 11.4707 17.7501H9.84299C9.54763 18.1021 9.15824 18.3506 8.72649 18.4627C8.29474 18.5748 7.84102 18.5452 7.42552 18.3778C7.01002 18.2104 6.65237 17.9131 6.40002 17.5254C6.14766 17.1377 6.01252 16.6779 6.01252 16.2069C6.01252 15.7359 6.14766 15.2761 6.40002 14.8884C6.65237 14.5007 7.01002 14.2035 7.42552 14.0361C7.84102 13.8687 8.29474 13.839 8.72649 13.9511C9.15824 14.0632 9.54763 14.3117 9.84299 14.6637H11.4686C11.3386 14.3571 11.1708 14.0702 10.9697 13.8103L12.4809 13.8034C12.2771 14.0648 12.1076 14.3542 11.9769 14.6637H13.6047C13.8101 14.4187 14.0621 14.2226 14.3443 14.0883C14.6264 13.954 14.9322 13.8845 15.2415 13.8845C15.5508 13.8845 15.8566 13.954 16.1388 14.0883C16.4209 14.2226 16.673 14.4187 16.8784 14.6637H18.5069C18.3718 14.3453 18.1961 14.048 17.9847 13.7802L19.5425 13.7732C19.3284 14.0427 19.1507 14.3424 19.0145 14.6637H20.6452C20.9406 14.3115 21.3301 14.0627 21.762 13.9505C22.1939 13.8382 22.6479 13.8678 23.0636 14.0352C23.4793 14.2026 23.8371 14.5 24.0896 14.8879C24.3421 15.2757 24.4773 15.7357 24.4773 16.2069C24.4773 16.6781 24.3421 17.1381 24.0896 17.526C23.8371 17.9139 23.4793 18.2112 23.0636 18.3786C22.6479 18.546 22.1939 18.5756 21.762 18.4633C21.3301 18.3511 20.9406 18.1023 20.6452 17.7501H19.0167C19.3504 18.5426 19.9307 19.1896 20.6607 19.5831C21.3906 19.9767 22.226 20.0928 23.027 19.9121C23.8281 19.7314 24.5463 19.2649 25.0617 18.5904C25.577 17.916 25.8583 17.0746 25.8583 16.2069C25.8583 16.0716 25.8512 15.9363 25.8372 15.8018C26.0154 16.2315 26.3079 16.5968 26.679 16.8531C27.0502 17.1094 27.4837 17.2455 27.9267 17.2447H31.1123C31.5564 17.2461 31.9913 17.1099 32.3633 16.8528C32.7353 16.5958 33.0283 16.2291 33.2062 15.798H33.9301L34.6672 16.6367C34.693 16.6659 34.7265 16.6862 34.7633 16.695C34.8001 16.7038 34.8386 16.7007 34.8738 16.6861C34.9089 16.6714 34.9391 16.646 34.9604 16.613C34.9818 16.58 34.9933 16.5409 34.9934 16.5009L35 13.4662C35.0005 13.4248 34.9889 13.3842 34.9667 13.3501C34.9445 13.316 34.9129 13.2901 34.8762 13.2758C34.8395 13.2616 34.7995 13.2598 34.7618 13.2706C34.7241 13.2815 34.6905 13.3046 34.6657 13.3366Z"  />
                            <path d="M15.2441 18.5273C14.9346 18.5275 14.6286 18.4581 14.3464 18.3236C14.0641 18.1892 13.8121 17.9926 13.6069 17.7472H11.9784C12.2594 18.416 12.7173 18.9842 13.2968 19.3829C13.8762 19.7817 14.5524 19.9939 15.2434 19.9939C15.9343 19.9939 16.6105 19.7817 17.19 19.3829C17.7694 18.9842 18.2274 18.416 18.5083 17.7472H16.8806C16.6755 17.9926 16.4235 18.189 16.1414 18.3235C15.8593 18.458 15.5535 18.5274 15.2441 18.5273Z"  />
                            <path d="M22.9757 16.2039C22.9757 16.0095 22.9028 15.8231 22.7731 15.6857C22.6433 15.5482 22.4673 15.4709 22.2838 15.4709H8.20576C8.02226 15.4709 7.84628 15.5482 7.71653 15.6857C7.58677 15.8231 7.51388 16.0095 7.51388 16.2039C7.51388 16.3983 7.58677 16.5848 7.71653 16.7223C7.84628 16.8598 8.02226 16.937 8.20576 16.937H22.2816C22.3727 16.9373 22.4629 16.9186 22.5471 16.8819C22.6313 16.8452 22.7078 16.7912 22.7723 16.7231C22.8368 16.655 22.8879 16.5741 22.9228 16.485C22.9578 16.3959 22.9757 16.3004 22.9757 16.2039Z"  />
                            <path d="M0 10.3448V6.26733H1.28678V7.45598L1.09483 7.11744C1.20858 6.8115 1.39342 6.5833 1.64935 6.43284C1.90529 6.27737 2.21573 6.19963 2.58067 6.19963V7.48607C2.51906 7.47604 2.46455 7.47102 2.41716 7.47102C2.3745 7.46601 2.3271 7.4635 2.27497 7.4635C2.00008 7.4635 1.77732 7.54375 1.6067 7.70424C1.43607 7.85971 1.35076 8.1155 1.35076 8.47159V10.3448H0Z"  />
                            <path d="M5.1224 10.4125C4.66741 10.4125 4.26929 10.3223 3.92804 10.1417C3.59154 9.95614 3.3285 9.70537 3.13891 9.3894C2.95407 9.06842 2.86165 8.7048 2.86165 8.29856C2.86165 7.89231 2.9517 7.53121 3.1318 7.21524C3.31665 6.89426 3.57021 6.646 3.8925 6.47046C4.21479 6.2899 4.57736 6.19963 4.98022 6.19963C5.35938 6.19963 5.70536 6.28238 6.01817 6.44789C6.33098 6.60838 6.57981 6.84661 6.76465 7.16258C6.94949 7.47855 7.04191 7.86222 7.04191 8.3136C7.04191 8.36376 7.03954 8.42144 7.0348 8.48664C7.03006 8.55183 7.02532 8.61202 7.02058 8.66719H3.9707V7.91488H6.30254L5.79068 8.12553C5.79542 7.93996 5.76224 7.77947 5.69115 7.64405C5.62479 7.50864 5.53 7.40332 5.40677 7.32809C5.28829 7.25285 5.14847 7.21524 4.98733 7.21524C4.82618 7.21524 4.684 7.25285 4.56077 7.32809C4.44228 7.40332 4.34986 7.51115 4.28351 7.65158C4.21715 7.78699 4.18398 7.94748 4.18398 8.13305V8.35122C4.18398 8.55183 4.22189 8.72486 4.29773 8.87031C4.3783 9.01576 4.49205 9.1286 4.63897 9.20885C4.7859 9.28408 4.96126 9.32169 5.16506 9.32169C5.35464 9.32169 5.51578 9.29411 5.64849 9.23894C5.78594 9.17876 5.92101 9.08848 6.05372 8.96811L6.76465 9.75051C6.57981 9.96617 6.35231 10.1317 6.08216 10.247C5.812 10.3574 5.49209 10.4125 5.1224 10.4125Z"  />
                            <path d="M9.34248 10.4125C8.99176 10.4125 8.67184 10.3273 8.38273 10.1568C8.09836 9.98121 7.87086 9.73797 7.70024 9.42702C7.52962 9.11105 7.44431 8.7349 7.44431 8.29856C7.44431 7.86724 7.52962 7.4961 7.70024 7.18515C7.87086 6.86918 8.09836 6.62593 8.38273 6.45541C8.67184 6.28489 8.99176 6.19963 9.34248 6.19963C9.67425 6.19963 9.95388 6.27486 10.1814 6.42532C10.4136 6.57578 10.589 6.80649 10.7075 7.11744C10.826 7.42839 10.8852 7.8221 10.8852 8.29856C10.8852 8.78505 10.8283 9.18377 10.7146 9.49472C10.6008 9.80568 10.4302 10.0364 10.2027 10.1868C9.97521 10.3373 9.68847 10.4125 9.34248 10.4125ZM9.62686 9.27656C9.77852 9.27656 9.9136 9.23894 10.0321 9.16371C10.1553 9.08848 10.2525 8.97814 10.3236 8.8327C10.3947 8.68223 10.4302 8.50419 10.4302 8.29856C10.4302 8.09293 10.3947 7.9199 10.3236 7.77947C10.2525 7.63402 10.1553 7.52368 10.0321 7.44845C9.9136 7.37322 9.77852 7.33561 9.62686 7.33561C9.47045 7.33561 9.33064 7.37322 9.20741 7.44845C9.08892 7.52368 8.99413 7.63402 8.92304 7.77947C8.85194 7.9199 8.8164 8.09293 8.8164 8.29856C8.8164 8.50419 8.85194 8.68223 8.92304 8.8327C8.99413 8.97814 9.08892 9.08848 9.20741 9.16371C9.33064 9.23894 9.47045 9.27656 9.62686 9.27656ZM10.4729 10.3448V9.64518L10.48 8.29856L10.4089 6.95193V4.76273H11.7596V10.3448H10.4729Z"  />
                            <path d="M12.6927 10.3448V5.07869H14.9676C15.4226 5.07869 15.8137 5.15643 16.1407 5.31191C16.4724 5.46738 16.7284 5.69308 16.9085 5.98898C17.0886 6.27987 17.1786 6.62593 17.1786 7.02716C17.1786 7.42338 17.0886 7.76693 16.9085 8.05782C16.7284 8.3437 16.4724 8.56437 16.1407 8.71985C15.8137 8.87031 15.4226 8.94554 14.9676 8.94554H13.4747L14.1003 8.32113V10.3448H12.6927ZM15.771 10.3448L14.534 8.42645H16.034L17.2782 10.3448H15.771ZM14.1003 8.47911L13.4747 7.79451H14.8823C15.1762 7.79451 15.3942 7.72681 15.5364 7.59139C15.6833 7.45598 15.7568 7.2679 15.7568 7.02716C15.7568 6.78141 15.6833 6.59083 15.5364 6.45541C15.3942 6.32 15.1762 6.25229 14.8823 6.25229H13.4747L14.1003 5.56769V8.47911Z"  />
                            <path d="M20.2097 10.3448V9.585L20.1173 9.39692V7.99764C20.1173 7.77195 20.0509 7.59891 19.9182 7.47855C19.7902 7.35316 19.5841 7.29047 19.2997 7.29047C19.1149 7.29047 18.9276 7.32307 18.7381 7.38827C18.5485 7.44845 18.3873 7.53372 18.2546 7.64405L17.7996 6.67358C18.0177 6.52312 18.2783 6.40777 18.5817 6.32752C18.8897 6.24226 19.1954 6.19963 19.4988 6.19963C20.1244 6.19963 20.6078 6.3526 20.9491 6.65853C21.295 6.95946 21.468 7.43341 21.468 8.08039V10.3448H20.2097ZM19.0722 10.4125C18.7641 10.4125 18.5035 10.3574 18.2902 10.247C18.0769 10.1367 17.9134 9.98623 17.7996 9.79565C17.6906 9.60506 17.6361 9.39191 17.6361 9.15619C17.6361 8.90542 17.6954 8.68976 17.8139 8.5092C17.9371 8.32364 18.1243 8.1832 18.3755 8.08791C18.6267 7.98761 18.9513 7.93745 19.3495 7.93745H20.2595V8.68223H19.5343C19.3163 8.68223 19.1623 8.71985 19.0722 8.79508C18.9869 8.87031 18.9442 8.97062 18.9442 9.096C18.9442 9.22139 18.9893 9.32169 19.0793 9.39692C19.1694 9.47216 19.2926 9.50977 19.449 9.50977C19.5959 9.50977 19.7286 9.47216 19.8471 9.39692C19.9703 9.31668 20.0604 9.19631 20.1173 9.03582L20.3021 9.56243C20.231 9.84329 20.0912 10.0564 19.8827 10.2019C19.6789 10.3423 19.4087 10.4125 19.0722 10.4125Z"  />
                            <path d="M22.3206 10.3448V6.26733H23.6714V10.3448H22.3206ZM22.996 5.81595C22.7496 5.81595 22.5505 5.74323 22.3988 5.59778C22.2472 5.45234 22.1713 5.27178 22.1713 5.05612C22.1713 4.84046 22.2472 4.65991 22.3988 4.51446C22.5505 4.36902 22.7496 4.2963 22.996 4.2963C23.2425 4.2963 23.4415 4.36651 23.5932 4.50694C23.7449 4.64236 23.8207 4.81789 23.8207 5.03356C23.8207 5.25925 23.7449 5.44732 23.5932 5.59778C23.4463 5.74323 23.2472 5.81595 22.996 5.81595Z"  />
                            <path d="M24.5492 10.3448V4.76273H25.9V10.3448H24.5492Z"  />
                        </svg>
                        <p className="">Cab/Bus Rental</p>
                    </button>
                </div>
                <div>
                    <p className="mb-7">Rent Cabs, Tempo Travellers & Buses with best drivers</p>
                    <div className="flex flex-col gap-5">
                    <div className="flex gap-4 items-center">
                        <img className="w-20" src={RydeCar} alt=""/>
                        <h3 className="font-bold">Outstation</h3>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img className="w-20" src={RydeCarHourly} alt=""/>
                        <h3 className="font-bold">Hourly Rental</h3>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img className="w-20" src={AitTransport} alt=""/>
                        <h3 className="font-bold">Airport Transfers</h3>
                    </div>
                </div>
                </div>
            </div>   
                <button className="font-bold text-base gap-3 bg-main-color text-white px-5 max-w-xs py-3 flex items-center rounded-xl mt-12">Book Cab / Bus Rental
                    <i className="fa-solid fa-arrow-right-long text-2xl"></i>
                </button>

            </div>
            <div className="relative w-1/2 h-full hidden lg:inline-block">
                <svg className="float-right"  height="100%" viewBox="0 0 564 628" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_3718_198646" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="12" y="0" width="552" height="628">
                    <path d="M524 0H205.447C187.492 0 171.738 11.9634 166.916 29.2584L14.1456 577.258C7.03787 602.755 26.2081 628 52.6764 628H524C546.091 628 564 610.091 564 588V40C564 17.9086 546.091 0 524 0Z" fill="#F1F1F1"/>
                    </mask>
                    <g mask="url(#mask0_3718_198646)">
                    <path opacity="0.4" d="M-101.178 -214.402H564.553V755.535H-101.178V-214.402Z" fill="url(#paint0_linear_3718_198646)"/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_3718_198646" x1="383.275" y1="633.313" x2="-81.5339" y2="-44.2445" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#BF849A"/>
                    <stop offset="0.0758" stopColor="#C48BA0"/>
                    <stop offset="0.1898" stopColor="#D1A0B1"/>
                    <stop offset="0.3271" stopColor="#E6C2CC"/>
                    <stop offset="0.461" stopColor="#FFE9EC"/>
                    <stop offset="0.6918" stopColor="#D5D7F0"/>
                    <stop offset="0.8876" stopColor="#B9CAF3"/>
                    <stop offset="1" stopColor="#AEC5F4"/>
                    </linearGradient>
                    </defs>
                    </svg>
                <img className="absolute bottom-24 right-16 scale-125 z-10" src={AllRides} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Others