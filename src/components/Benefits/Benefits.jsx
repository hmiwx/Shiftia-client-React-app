import React from 'react'

export default function Benefits() {
  return (
    <section className="mt-16 card p-8 glass-card fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold text-blue-900 mb-4">مزایای استفاده از شیفتیا</h3>
                    <p className="text-gray-700 mb-6">در زمان تنگ و بدون نیاز به حضور فیزیکی، امور روزمره را به ما بسپارید.</p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-green-100 p-2 rounded-full">
                                <i className="fas fa-check text-green-600"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-blue-900">صرفه‌جویی در زمان</h4>
                                <p className="text-gray-700">رزرو سریع و آنلاین بدون نیاز به تماس تلفنی</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="bg-green-100 p-2 rounded-full">
                                <i className="fas fa-check text-green-600"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-blue-900">قیمت‌گذاری شفاف</h4>
                                <p className="text-gray-700">مشاهده قیمت‌ها قبل از رزرو و بدون هزینه‌های پنهان</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="bg-green-100 p-2 rounded-full">
                                <i className="fas fa-check text-green-600"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-blue-900">پشتیبانی ۲۴/۷</h4>
                                <p className="text-gray-700">پشتیبانی در تمام مراحل رزرو و دریافت خدمات</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="md:w-1/2">
                    <img src={import.meta.env.BASE_URL + "/images/cleaning.jpg"} alt="نظافت" className="rounded-xl shadow-lg" />
                </div>
            </div>
        </section>
  )
}
