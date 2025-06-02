import { GoDotFill } from "react-icons/go";
function AboutLayer() {
  return (
    <main className="w-full min-h-screen bg-gray-100 sm:pt-10">
      <div className="w-full bg-white flex flex-col p-4 sm:p-8 md:p-15">
        <span className="text-center sm:text-right mb-5 sm:mb-7">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">درباره وکیل دادگستری</h2>
        </span>
        <div className="flex flex-col-reverse md:flex-row-reverse md:gap-15">
          <div className="w-full md:w-[50%] h-auto text-right flex flex-col">
            <p className="mb-5 sm:mb-7 text-base sm:text-lg">
              خانم سمیرا معطوفی با سابقه‌ای برجسته در زمینه وکالت و حقوق دادرسی
              فعالیت می‌کند. او دارای تجربه‌ای گسترده در رسیدگی به پرونده‌های
              متنوع حقوقی از جمله پرونده‌های امور حسبی ، کیفری، حقوقی، خانواده،
              مالی و ثبتی است. خانم معطوفی با اخلاق حرفه‌ای خود توانسته است
              اعتماد بسیاری از موکلین خود را جلب کند.با دارا بودن دانش عمیق
              درحوزه قوانین و مقررات مربوط به شهر تهران، توانسته است به عنوان یک
              وکیل موفق شهرتهران شناخته شود. او با پشتکار، استعداد وتعهد خود،
              بهترین خدمات حقوقی را به موکلین خود ارائه می‌دهد.وکیل معطوفی با
              توانایی‌ها و تجربه‌ای که دارد، آماده است به شما در امور حقوقی کمک
              کند و بهترین راه‌حل‌ها را برای مسائل حقوقی شما پیشنهاد دهد.{" "}
            </p>
            <div className="flex flex-col mb-6 sm:mb-8 space-y-3 sm:space-y-5">
              <span className="flex flex-row-reverse gap-2 items-center">
                <GoDotFill />
                <span className="flex">
                  سال سابقه کاری در دادگستری تهران <p>۱۲</p>{" "}
                </span>
              </span>
              <span className="flex flex-row-reverse gap-2 items-center">
                <GoDotFill /> <p>کارشناس حقوق ثبتی</p>
              </span>
              <span className="flex flex-row-reverse gap-2 items-center">
                <GoDotFill /> <p>عضو مرکز وکلای قوه قضاییه</p>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-row-reverse items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-clock h-8 w-8 text-blue-900 flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div>
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm flex justify-end">
                    سال تجربه <p>۱۲</p>
                  </div>
                  <div className="text-xs text-gray-600">
                    بیش از یک دهه فعالیت در حوزه حقوق
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-award h-8 w-8 text-blue-900 flex-shrink-0"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
                <div>
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm">
                    مدرک وکالت
                  </div>
                  <div className="text-xs text-gray-600">
                    دارای پروانه وکالت از کانون وکلای ایران
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-trophy h-8 w-8 text-blue-900 flex-shrink-0"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
                <div>
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm">
                    نرخ موفقیت بالا
                  </div>
                  <div className="text-xs text-gray-600">
                    ۹۸ درصد نرخ موفقیت در پرونده‌ها
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-users h-8 w-8 text-blue-900 flex-shrink-0"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <div>
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm">
                    +۵۰۰ موکل
                  </div>
                  <div className="text-xs text-gray-600">
                    خدمات‌رسانی به بیش از ۵۰۰ موکل
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%] flex-grow-1 mb-8 md:mb-0">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-gray-800 rounded-2xl p-5 sm:p-8 text-white">
                <div className="text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                    {/* <Scale className="h-16 w-16 text-white" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-scale h-10 w-10 sm:h-16 sm:w-16 text-white"
                    >
                      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                      <path d="M7 21h10"></path>
                      <path d="M12 3v18"></path>
                      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">سمیرا معطوفی</h2>
                  <p className="text-blue-200 mb-2 sm:mb-4 text-sm sm:text-base">وکیل پایه یک دادگستری</p>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <p>شماره پروانه: ۱۲۳۴۵</p>
                    <p>عضو کانون وکلای تهران</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-amber-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-16 sm:h-16 bg-blue-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutLayer;
